// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: camera-retro;
// Script by Jens Luetzen: <kliffkieker67@gmail.com>
//

//
// assigning parameters from scriptable callup
//

{
let param = args.widgetParameter;
if ( param == null ){
	param = 8;
	}
	console.log("Parameter : " + param);
//
// Initialization of variables
//
// https://wwsylt.live/images/WWS_Logo.png

let campic; //number of cam being handed over to Widget
let errParam;
let url;
let widget;
let helpwidget;

const GitHubCamFile = 'Cams_CSML-Edition.txt';
const GitHubDataPath = 'https://wwsylt.live/data';
const GitHubLogoName = 'WWS_Logo.png';
const GitHubErrorPic = 'Error_Parameter.png';

CamFamily = "CSML-Edition"

const logoImg = await getImage(GitHubLogoName,GitHubDataPath);
const dataFl = await getData(GitHubCamFile,GitHubDataPath);

// logoIMG enthält das logo,
//dataFl enthält die Datei der Cams.

//if (param != null && param.length > 0)
if (param != null) {
	campic = param-1; //Correction by -1 as arrays begin at Zero
	errParam = "Parameter received. ";
	// console.log("Paramter received: " + param + " ; Campic: " + campic);
	} else {
	errParam = "No Parameter received";
	// console.log("No Parameter received");
	}

	//
	// Creating value for date and time
	//

	let actualdate = new Date();
	let lastrefresh = new DateFormatter();
	lastrefresh.useShortDateStyle();
	lastrefresh.useShortTimeStyle();
	timestamp = lastrefresh.string(actualdate);


	//
	// from www.addicted-sports.com double digits needed to calculate most actual jpg- and mp4 URL:
	// correction for month, day, hour & minutes 0-9 --> 00 - 09
	//

	let month10 = ("00" + (1 +  actualdate.getMonth())).slice(-2)
	let date10 = ("00" + (actualdate.getDate())).slice(-2)
	let hours10 = ("00" + (actualdate.getHours())).slice(-2);
	let time10 = ("00" + (10 * Math.floor(actualdate.getMinutes()/10))).slice(-2);
	//console.log("Zeit : " + time10);

let camtxt = dataFl.split("\n");
console.log("Campic: " + campic);
console.log("Anzahl Zeilen: " + camtxt.length);


//
// Wenn der Parameter > Anzahl der Zeilen in der Datei, dann wird das Error Bild gezeigt und das Script beendet:
//
if (campic >= camtxt.length-1){
	camLocation = "Max Parameter: " + (camtxt.length-1);
	camSubtitle = "";
	imgURL = GitHubDataPath + "/" + GitHubErrorPic;
	console.log("ImgURL: " + imgURL);
	url = "";

	let imgReq = await new Request(imgURL);
	let img = await imgReq.loadImage();
	let widget = createWidget(img,camLocation,camSubtitle,url,logoImg);

	if (!config.runsInWidget) {
		await widget.presentLarge();
		} else {
		await Script.setWidget(widget);
		}
	console.log("Parameter too large");
	return;
}
//
// ENDE Error Bild
//


let camline = camtxt[campic];

// console.log("Zeile zum Zerlegen: " + camline);

const myArray = camline.split(";");

//Spotlocation = myArray[1];
//imgURL = myArray[2];
//LiveStreamURL= myArray[3];

//
// Website addicted-sports stops feeding new pics / videos at 22:00
// so if time > 22 this time needs to be fixed
// Attention: Parameter campic is corrected by -1
console.log("SpotLocation:" + myArray[1]);

// console.log("URL umgerechnet: " + myArray[2]);
// const myImgURLArray = myArray[2].split("+");
// console.log("1. Teil: " + myImgURLArray[0]);
// console.log("2. Teil: " + myImgURLArray[1]);
// console.log("3. Teil: " + myImgURLArray[2]);

//
// Main: display preview pics with information or helpwidget, if parameters are missing
//

switch (errParam) {
	case "Parameter received. ":
		camLocation = myArray[1];
		camSubtitle = "(" + ( campic + 1 ) + ") - " + timestamp;
		imgURL = myArray[2];
		url = myArray[3];
		console.log("CamLocation : " + camLocation);

		switch ( camLocation) {
			case "Chiemsee Prienavera":
				if ( hours10 >= 22 ) {
					if ( time10 >= 30 ) {
						hours10 = "22" ;
						time10 = "30" ;
					}
				}
				stream_date_time = actualdate.getFullYear() + "/" + month10 + "/" + date10 + "/" + hours10 + time10;
				const myImgURLArray = myArray[2].split("+");
				imgURL = myImgURLArray[0] + stream_date_time + myImgURLArray[2];
				console.log("umgerechnete URL: " + imgURL);
				break;
		}

		let imgReq = await new Request(imgURL);
		let img = await imgReq.loadImage();

		let widget = createWidget(img,camLocation,camSubtitle,url,logoImg);

		if (!config.runsInWidget) {
			await widget.presentLarge();
			} else {
			await Script.setWidget(widget);
			}
	break;

	case "No Parameter received":
		let helpwidget = createHelpWidget();

		if (!config.runsInWidget) {
		await helpwidget.presentLarge();
		} else {
		await Script.setWidget(helpwidget);
		}
	break;
	}

Script.complete();
}

//
// end Main
//


//
// Here come the functions
//

//
// Creating Widget with parameters img, camLocation cLoc and camSubtitle cSub
//

function createWidget(prv_img,prv_Loc,prv_Subt,prv_URL,prvlogoImg) {
	const widget = new ListWidget();
	sourceURL = "https://wwsylt.live";
	widget.backgroundColor = Color.black();
	widget.url = prv_URL;
	widget.backgroundImage = prv_img;

	widget.setPadding(3,15,15,3);

  const logoStack = widget.addStack();
  logoStack.addSpacer();
  const logoImageStack = logoStack.addStack();
  logoImageStack.addSpacer();
  const wimg = logoImageStack.addImage(prvlogoImg);
  wimg.imageSize = new Size(80, 80);
  wimg.rightAlignImage();

  widget.addStack;
	widget.addSpacer();

	const CamFamilyText = widget.addText(CamFamily)
	CamFamilyText.font = Font.boldSystemFont(12);
	CamFamilyText.textColor = Color.white();
	CamFamilyText.shadowRadius = 3;
	CamFamilyText.shadowColor = Color.black();

	const titleText = widget.addText(prv_Loc);
	titleText.font = Font.boldSystemFont(12);
	titleText.textColor = Color.white();
	titleText.shadowRadius = 3;
	titleText.shadowColor = Color.black();

	widget.addSpacer(2);

	const subtitleText = widget.addText(prv_Subt);

	subtitleText.font = Font.systemFont(8);
	subtitleText.textColor = Color.white();
	subtitleText.textOpacity = 0.8;
	subtitleText.shadowRadius = 3;
	subtitleText.shadowColor = Color.black();

	const sourceURLText = widget.addText(sourceURL);
	sourceURLText.font = Font.systemFont(8);
	sourceURLText.textColor = Color.white();
	sourceURLText.textOpacity = 0.8;
	sourceURLText.shadowRadius = 3;
	sourceURLText.shadowColor = Color.black();

	return widget;
}

//
// Creating HELP-Widget without parameters
//

function createHelpWidget() {
	const helpwidget = new ListWidget;
	helpwidget.backgroundColor = Color.blue();

	const titleText = helpwidget.addText("To Do's to configure the Widget");
	titleText.leftAlignText();
	titleText.font = Font.boldSystemFont(12);
	titleText.textColor = Color.white();

	myText = addLine(helpwidget,"===============================");
	helpwidget.addSpacer(1);
	myText = addLine(helpwidget,"1. Widget lange drücken für den Config Mode");
	helpwidget.addSpacer(1);
	myText = addLine(helpwidget,"2. Option Scripts: dieses Script wählen");
	helpwidget.addSpacer(1);
	myText = addLine(helpwidget,"3. Option When interacting: 'Open URL'");
	helpwidget.addSpacer(1);
	myText = addLine(helpwidget,"4. Option Parameter: Zahl zwischen 1 und 3");
	helpwidget.addSpacer(1);
	myText = addLine(helpwidget,"5. Fertig mit einzelnem Widget, wiederholen für restl. 2 Cams");
	helpwidget.addSpacer(1);
	myText = addLine(helpwidget,"6. Widges aufeinander ziehen für scrollbaren Smart Stack");
	helpwidget.addSpacer(2);
	myText = addThankyouLine(helpwidget,"Bilder von https://www.frs-syltfaehre.de/informationen/webcams");

	return helpwidget;
}

//
// Adds single line to the widget, parameter: text to be displayed;
// same for Thankyou line, only smaller
//

function addLine(prvHW,prvTXT) {
	var TextLine = prvHW.addText(prvTXT);
	TextLine.leftAlignText();
	TextLine.font = Font.boldSystemFont(10);
	TextLine.textColor = Color.white();
}

function addThankyouLine(prvHW,prvTXT) {
	var TextLine = prvHW.addText(prvTXT);
	TextLine.leftAlignText();
	TextLine.font = Font.boldSystemFont(7);
	TextLine.textColor = Color.white();
}


//
// get logo-image as download
//
async function getImage(image,prvlogofileURL) {
//		console.log("GetImage: ImageFile: " + image);
//		console.log("GetImage: ImagePfad: " + prvlogofileURL);

    let fm = FileManager.local();
    let dir = fm.documentsDirectory();
    let path = fm.joinPath(dir, image);

		// IMMER die neueste Datei vom Netz laden!
		// Erzwingen erneutes Laden der Datei:
		// erst Löschen...

		if (fm.fileExists(path)) {
		// console.log("Lösche Image")
		fm.remove(path);
		}

		// dann Laden:

		// console.log("GetImage: ImageFile wird neu geladen")
		let logoUrl;
		logoUrl = prvlogofileURL + "/" + image;
		// console.log("GetImage: passing URL:--"+logoUrl+"--");
		const req = await new Request(logoUrl);
		// console.log("GetImage: passing URL immer noch: xxxx  " + logoUrl);
		let iconImage = await req.loadImage();
		// console.log("GetImage: ImageFile wurde vom Netz geladen")
		fm.writeImage(path, iconImage);
		// console.log("GetImage: ImageFile wurde lokal geschrieben")
		return iconImage;

}
/* closes function getImage */


// helper function to download an image from a given url
/*  async function loadImage(prvlogoUrl) {
  // console.log(`passed URL: ${prvlogoUrl}`);
    const req = new Request(prvlogoUrl);
    return await req.loadImage();
}
*/

//
// get datafile as download
//
async function getData(datafile, prvdatafileURL) {
//	console.log("GetData: DataFile: " + datafile);
//	console.log("GetData: DataPfad: " + prvdatafileURL);

    let fm = FileManager.local();
    let dir = fm.documentsDirectory();
    let path = fm.joinPath(dir, datafile);

		// Erzwingen neues Laden der Datei:
		// erst Löschen...

		if (fm.fileExists(path)) {
			// console.log("Lösche Datei")
			fm.remove(path);
			}

		// dann Laden:

			let dataUrl;

			dataUrl = prvdatafileURL + "/" + datafile;
			// console.log("getData: Cam-File neu anlegen: dataURL =  " + dataUrl);

			// console.log("getData: passing URL:  " + dataUrl);
			let req = new Request(dataUrl);
			let camfile = await req.loadString();
			// console.log(`getData: path: ${path}.`);
			// console.log(`getData: camfile: ${camfile}.`);
			fm.writeString(path, camfile);
			return camfile;

}
/* closes function getData */
