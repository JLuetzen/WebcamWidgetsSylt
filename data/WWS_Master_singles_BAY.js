// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: camera-retro;
// Script by Jens Luetzen: <kliffkieker67@gmail.com>
//
// Sichern dieses Scriptes unter einem der folgenden Namen, damit die Parameter ausgelesen werden:
//
// WWS_Syltcams   WWS_Syltfaehre   WWS_Syltshuttle
// WWS_CSML-Edition   WWS_Surfcams_Bayern
//
// bei allen anderen Namen werden die Parameter des Test-Scripts geladen
//
// assigning parameters from scriptable callup
//
{
let param = args.widgetParameter;
if ( param == null ){//
//param = 1; //zum Testen direkt in Scriptable diese Zeile aktivieren...
	}
	var ver = 21.20;

	console.log("Parameter : " + param);
	console.log("V " + ver);
//
// Initialization der Variablen
//
var dataload_mode = "Standard"; // d.h. 1x pro Tag. Jeder andere Wert als "Standard" führt zum Laden der Daten bei jeder Widget-Aktualisierung

var campic; //number of cam being handed over to Widget
var errParam;
var widget;
var helpwidget;
var movietimestamp = "N";
var nighttime = "N";
var camLocation; // Standort der Cam
var camSubtitle; // Ergänzungstext, hält dann das Datum
var camProvider; // URL der WebSite, von der das Cambild stammt
var LAT; // geogr. Breite der Cam für Sonnenauf- / untergang
var LON; // geogr. Länge der Cam für Sonnenauf- / untergang
var imgURL; // URL zum Vorschaubild
var camURL; // LiveStreamURL
var sunrise; // Zeit Sonnenaufgang
var sunset; // Zeit Sonnenuntergang
var hinweistext = "";  // der Hinweistext ersetzt den movietimestamp
var sunhint = ""; // falls die Sonnenauf- und Untergangsberechnung in California wieder wegen Zertifikatsfehler nicht geht
var customLogoName = ""; // Cam-abhängiges Logo möglich --> wird in Specialcases mitgegeben
var logo;
var singleparam = ""; // ist der Wert, der bei Einzelwidget aus der Parameters gezogen wird.
//
// Ende Initialisierung der Variablen
//
// Diese beiden Konstanten sind die Minimalwerte zum Laden des Parameterfiles
///
const GitHubDataPath = 'https://wwsylt.live/data';
const GitHubParameterFile = "WWSmod_Parameters_BAY";
const GitHubSunriseSunsetFile = "Mod_SunriseSunset";

//
// Creating value for date and time
// und Erzeugen der Datum Strings von heute und Gestern
//
		let actualdate = new Date(); // für das heutige Datum
		let formerdate = new Date(); // für das gestringe Datum
		let lastrefresh = new DateFormatter();
		lastrefresh.useShortDateStyle();
		lastrefresh.useShortTimeStyle();
		timestamp = lastrefresh.string(actualdate);
		time = timestamp.substr(-5);

		yesterdaydatelong = formerdate.setDate(formerdate.getDate()-1);
		yesterdaydate = new Date(yesterdaydatelong);

		// Für das tägliche 1x Downloaden der CamFiles ....
		todaydatestring = "." + actualdate.getFullYear() + "-" + (actualdate.getMonth()+1) + "-" + actualdate.getDate();
		yesterdaydatestring = "." + yesterdaydate.getFullYear() + "-" + (yesterdaydate.getMonth()+1) + "-" + yesterdaydate.getDate();
		console.log("String von Heute: " + todaydatestring);
		console.log("String von Gestern: " +  yesterdaydatestring);


// First, create a local copy of the parameters module named "WWS_Parameters.todaydatestring.js":
	const parameterFl = await getData(GitHubParameterFile+".js",GitHubDataPath,todaydatestring,yesterdaydatestring,dataload_mode);

//
// Loading the parameter file and assiging the assignParameters
//
// My script name is... (ohen die .js Erweiterung!)
	var myName = Script.name();
	console.log("My Name is: " + myName);

	const loadparameterfile = importModule(GitHubParameterFile + todaydatestring + ".js");
	var myName_ver = myName + "*" + ver;
	let parameterdata = await loadparameterfile.assignParameters(myName_ver);

	console.log("Ausgang: LoadParameterFile: " + parameterdata);

	myparameterArray = parameterdata.split("*");
	CamFamily = myparameterArray[0];
	GitHubCamFile = myparameterArray[1];
	sourceURL = myparameterArray[2];
	GitHubLogoName = myparameterArray[3];
	GitHubErrorPic = myparameterArray[4];
	GitHubSpecialCaseFile = myparameterArray[5];
	hinweistext = myparameterArray[6];
	singleparam = myparameterArray[7];

	console.log("Ausgang Parameter: camFamily: " + CamFamily);
	console.log("Ausgang Parameter: GitHubCamFile: " + GitHubCamFile);
	console.log("Ausgang Parameter: sourceURL: " + sourceURL);
	console.log("Ausgang Parameter: GitHubLogoName: " + GitHubLogoName);
	console.log("Ausgang Parameter: GitHubErrorPic: " + GitHubErrorPic);
	console.log("Ausgang Parameter: GitHubSpecialCaseFile: " + GitHubSpecialCaseFile);
	console.log("Ausgang Parameter: Hinweistext: " + hinweistext);
	console.log("Ausgang Parameter: Single-Parameter: " + singleparam);

//
// jetzt können die restlichen Dateien geladen werden...
// logoImg enthält das Logo,
// dataFl enthält die Datei mit den Daten der Cams,
// specialCaseFl enthält die Sonderfälle für das Webscraping.
//
//	const logoImg = await getImage(GitHubLogoName,GitHubDataPath,todaydatestring,yesterdaydatestring,dataload_mode);
	const dataFl = await getData(GitHubCamFile,GitHubDataPath,todaydatestring,yesterdaydatestring,dataload_mode);
	const specialCaseFl = await getData(GitHubSpecialCaseFile+".js",GitHubDataPath,todaydatestring,yesterdaydatestring,dataload_mode);
	const sunrisesunsetFl = await getData(GitHubSunriseSunsetFile+".js",GitHubDataPath,todaydatestring,yesterdaydatestring,dataload_mode);


// falls das Einzelwidget gewählt wurde und nicht per Widget der Parameter eingegeben wird:
if (singleparam != null) {
	param = singleparam;
	}

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
// Main: display preview pics with information or helpwidget, if parameters are missing
//

switch (errParam) {
	case "Parameter received. ":
//
// so, jetzt wird die lokale Datei in Zeilen zerlegt:
//
//	let camtxt = dataFl.split("\n"); //Zerlegen der Datei in Zeilen (\n)
		let camtxt = dataFl.split("\n"); //Zerlegen der Datei in Zeilen (\n)
		console.log("Campic: " + campic);
		console.log("Anzahl Zeilen: " + camtxt.length);

//
// Error Routine:
// Wenn der Parameter > Anzahl der Zeilen in der Datei, dann wird das Error Bild gezeigt und das Script beendet:
//
		if (campic >= camtxt.length-1){
			camLocation = "Max Parameter: " + (camtxt.length-1);
			camSubtitle = "";
			imgURL = GitHubDataPath + "/" + GitHubErrorPic;
			console.log("ImgURL: " + imgURL);
			camURL = "";
			sunrise = "";
			sunset = "";
			camProvider = "";

			let imgReq = await new Request(imgURL);
			let img = await imgReq.loadImage(); // Laden des Error-Bildes
			let error_widget = createWidget(img,camLocation,camSubtitle,camURL,logoImg,sourceURL,sunrise,sunset,movietimestamp,camProvider);

			if (!config.runsInWidget) {
				await error_widget.presentMedium();
				} else {
				await Script.setWidget(error_widget);
				}
			console.log("Parameter too large");
			return;
		}
//
// ENDE Error Routine
//

		let camline = camtxt[campic];

// console.log("Zeile zum Zerlegen: " + camline);
//
// Zusammensetzung:
//
// Camlocation = myArray[0];
// camProvider URL = myArray[1];
// LAT = myArray[2];
// LON = myArray[3];
// imgURL = myArray[4]; 2 (preview Picture)
// camURL = myArray[5]; 3 (LiveStreamURL)

		const myArray = camline.split(";");

		console.log("CamLocation:" + myArray[0]);
   
		camLocation = myArray[0];
		camSubtitle = "(" + ( campic + 1 ) + "/" + (camtxt.length - 1 ) + ") - " + timestamp;
		camProvider = myArray[1];
		LAT = myArray[2];
		LON = myArray[3];
		imgURL = myArray[4];
		camURL = myArray[5];

		if (!LAT) {LAT = "N"};
		if (!LON) {LON = "N"};

		console.log("CamLocation : " + camLocation);
		console.log("camProvider: " + camProvider);
		console.log("LAT: " + LAT);
		console.log("LON: " + LON);
		console.log("Image URL : " + imgURL);
		console.log("Stream CamURL : " + camURL);

// Sonnenauf- und -Untergang, falls übergeben

/*
		try {
			let sunData = await new Request("https://api.sunrise-sunset.org/json?lat=" + LAT + "&lng=" + LON + "&formatted=0&date=" + actualdate.getFullYear() + "-" + (actualdate.getMonth()+1) + "-" + actualdate.getDate()).loadJSON();
		}
		catch(err) {
			LAT = "N"
			sunhint = "Heute ohne Sonnenzeiten :("
		}

	 	if (LAT != "N") {
			let sunData = await new Request("https://api.sunrise-sunset.org/json?lat=" + LAT + "&lng=" + LON + "&formatted=0&date=" + actualdate.getFullYear() + "-" + (actualdate.getMonth()+1) + "-" + actualdate.getDate()).loadJSON();
			let now = actualdate.getTime();
			let sunrise_hr = ('0' + new Date(sunData.results.sunrise).getHours()).substr(-2); // macht die Zahl zweistellig
			let sunrise_min = ('0' + new Date(sunData.results.sunrise).getMinutes()).substr(-2); // macht die Zahl zweistellig
			let sunset_hr = ('0' + new Date(sunData.results.sunset).getHours()).substr(-2); // macht die Zahl zweistellig
			let sunset_min = ('0' + new Date(sunData.results.sunset).getMinutes()).substr(-2); // macht die Zahl zweistellig

			sunrise = sunrise_hr + ":" + sunrise_min;
			sunset = sunset_hr + ":" + sunset_min;
		} else {
			sunrise = "N";
			sunset = "N";
		}
/*
sunrise = "N";
sunset = "N";
*/
/*HIER GEHTS WEITER*/
	let latlon = LAT + "*" + LON;
	console.log("latlon: " + latlon);

	const calcsunrisesunset = importModule(GitHubSunriseSunsetFile + todaydatestring + ".js");
	let sunrise_sunset = await calcsunrisesunset.calculateSunriseSunset(latlon);
	console.log("Zurück im Hauptprogramm sunrise_sunset: " + sunrise_sunset);

	mySunriseSunsetArray = sunrise_sunset.split("*");
	sunrise = mySunriseSunsetArray[0];
	sunset = mySunriseSunsetArray[1];

		console.log("Sonnenaufgang: " + sunrise);
		console.log("Sonnenuntergang: " + sunset);

// Ende Sonnenaufgang & Sonnenuntergang

//
// Special case handling
//
// Special Case: https://www.addicted-sports.com
// Auslesen des aktuellen Video - URLs mit richtigem Zeitstempel --> neue camUrl
//


//		specialcase = camLocation  + "*" + camProvider + "*" + imgURL + "*" + camURL + "*" + movietimestamp + "*" + customLogo;
		specialcase = camLocation  + "*" + camProvider + "*" + imgURL + "*" + camURL + "*" + movietimestamp;
		console.log("Eingang: specialcase: " + specialcase);

		const loadcamparameter = importModule(GitHubSpecialCaseFile + todaydatestring + ".js");
		let camparameterstring = await loadcamparameter.determineSpecialCase(specialcase);

		console.log("Ausgang: specialcase: " + camparameterstring);

		mynewcamparameterArray = camparameterstring.split("*");
		camLocation = mynewcamparameterArray[0];
		camProvider = mynewcamparameterArray[1];
		imgURL = mynewcamparameterArray[2];
		camURL = mynewcamparameterArray[3];
		movietimestamp = mynewcamparameterArray[4];
		customLogoName = mynewcamparameterArray[5];

		console.log("WWS nach specialcases: camLocation: " + camLocation);
		console.log("WWS nach specialcases: camProvider: " + camProvider);
		console.log("WWS nach specialcases: imgURL: " + imgURL);
		console.log("WWS nach specialcases: camURL: " + camURL);
		console.log("WWS nach specialcases: movietimestamp: " + movietimestamp);
		console.log("WWS nach specialcases: customLogoName: " + customLogoName);

		//
		// für Hinweise Standard
		//
		if (hinweistext != "") {
			movietimestamp = hinweistext;
		}

		//
		// für Hinweise bei api error Sonnenauf- und Untergangsberechnung
		//
		if (sunhint != "") {
			movietimestamp = sunhint;
		}

		console.log("Check: GitHubLogoName: " + GitHubLogoName);
		console.log("Check: customLogoName: " + customLogoName);

		if (customLogoName == "noCustomLogo") {
			var logoImg = await getImage(GitHubLogoName,GitHubDataPath,todaydatestring,yesterdaydatestring,dataload_mode);
		} else {
			var customLogoPath = GitHubDataPath + "/CustomLogos";
			console.log("CustomLogoPath = " + customLogoPath);
			console.log("CustomLogoName = " + customLogoName);
			var logoImg = await getImage(customLogoName,customLogoPath,todaydatestring,yesterdaydatestring,dataload_mode);
		}
//
// Laden des des Preview Pictures = Hintergrundbild des Widgets
//
		let imgReq = await new Request(imgURL);
		let img = await imgReq.loadImage();

// Auf gehts, bauen wir ein Widget...
		let widget = createWidget(img,camLocation,camSubtitle,camURL,logoImg,sourceURL,sunrise,sunset,movietimestamp,camProvider);

		if (!config.runsInWidget) {
			await widget.presentMedium();
			} else {
			await Script.setWidget(widget);
			}
	break;

	case "No Parameter received":
		let helpwidget = createHelpWidget();

		if (!config.runsInWidget) {
		await helpwidget.presentMedium();
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
// Creating Widget with all parameters ...
//

function createWidget(prv_img,prv_Loc,prv_Subt,prv_camURL,prv_logoImg,prv_sourceURL,prv_sunrise,prv_sunset,prv_movietimestamp,prv_camProvider) {
	const widget = new ListWidget();
	widget.backgroundColor = Color.black();
	widget.url = prv_camURL;
	widget.backgroundImage = prv_img;
	widget.setPadding(5,8,5,5);

  const logoStack = widget.addStack();
	logoStack.addSpacer(); // um das Logo in eine 2. Spalte und darin nach rechts zu schieben
	const wimg = logoStack.addImage(prv_logoImg);
  wimg.imageSize = new Size(80, 80);
  wimg.rightAlignImage();

	const mainStack = widget.addStack();
  const descriptionStack = mainStack.addStack();
	descriptionStack.bottomAlignContent();
  descriptionStack.layoutVertically();
	descriptionStack.addSpacer();
	mainStack.addSpacer();
	const sunsetStack = mainStack.addStack();
	sunsetStack.bottomAlignContent();
	sunsetStack.layoutVertically();

//	descriptionStack.addSpacer();

	const CamFamilyText = descriptionStack.addText(CamFamily);
	CamFamilyText.font = Font.boldSystemFont(12);
	CamFamilyText.textColor = Color.white();
	CamFamilyText.shadowRadius = 3;
	CamFamilyText.minimumScaleFactor = 0.5;
	CamFamilyText.shadowColor = Color.black();

	const titleText = descriptionStack.addText(prv_Loc);
	titleText.font = Font.boldSystemFont(12);
	titleText.textColor = Color.white();
	titleText.shadowRadius = 3;
  titleText.minimumScaleFactor = 0.5;
	titleText.shadowColor = Color.black();

	if (prv_movietimestamp != "N"){
		const movietimestampText = descriptionStack.addText(prv_movietimestamp);
		movietimestampText.minimumScaleFactor = 0.5;
		if (hinweistext != "") {
			movietimestampText.font = Font.boldSystemFont(10);
			movietimestampText.textColor = Color.yellow();
		} else {
			movietimestampText.font = Font.systemFont(8);
			movietimestampText.textColor = Color.white();
		}
//		movietimestampText.textOpacity = 0.8;
		movietimestampText.shadowRadius = 3;
		movietimestampText.shadowColor = Color.black();
	}

	const subtitleText = descriptionStack.addText(prv_Subt);
	subtitleText.font = Font.systemFont(8);
	subtitleText.textColor = Color.white();
//	subtitleText.textOpacity = 0.8;
	subtitleText.shadowRadius = 3;
	subtitleText.shadowColor = Color.black();

	const sourceURLText = descriptionStack.addText(prv_sourceURL);
	sourceURLText.font = Font.systemFont(8);
	sourceURLText.textColor = Color.white();
//	sourceURLText.textOpacity = 0.8;
	sourceURLText.shadowRadius = 3;
	sourceURLText.shadowColor = Color.black();

// 	descriptionStack.addSpacer();

	sunsetStack.addSpacer();

if (prv_sunset != "N") {
		let inner_footer1 = sunsetStack.addStack();
		inner_footer1.layoutVertically;
		inner_footer1.bottomAlignContent;
		inner_footer1.addSpacer();

		printSFSymbol(inner_footer1, "sunrise", 8);
		sunrise_txt = inner_footer1.addText(" " + prv_sunrise + "  ");
		sunrise_txt.textColor = Color.white();
		sunrise_txt.font = Font.mediumMonospacedSystemFont(8);
		sunrise_txt.shadowRadius = 3;
		sunrise_txt.shadowColor = Color.black();

		printSFSymbol(inner_footer1, "sunset", 8);
		sunset_txt = inner_footer1.addText(" " + prv_sunset + "   " );
		sunset_txt.textColor = Color.white();
		sunset_txt.font = Font.mediumMonospacedSystemFont(8);
		sunset_txt.shadowRadius = 3;
		sunset_txt.shadowColor = Color.black();
	}

	let inner_footer2 = sunsetStack.addStack();
	inner_footer2.layoutVertically;
	inner_footer2.bottomAlignContent;
	inner_footer2.addSpacer();

	printSFSymbol(inner_footer2, "video", 8);
	camProvider_txt = inner_footer2.addText(" " + prv_camProvider + "   " );
	camProvider_txt.textColor = Color.white();
	camProvider_txt.font = Font.mediumMonospacedSystemFont(8);
	camProvider_txt.shadowRadius = 3;
	camProvider_txt.shadowColor = Color.black();

//     sunsetStack.addSpacer(5);

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
	myText = addLine(helpwidget,"4. Option Parameter: Zahl 1 bis max Parameter");
	helpwidget.addSpacer(1);
	myText = addLine(helpwidget,"5. Fertig mit einzelnem Widget, wiederholen für restl. Cams");
	helpwidget.addSpacer(1);
	myText = addLine(helpwidget,"6. Widges aufeinander ziehen für scrollbaren Smart Stack bis max 10 Widgets");
	//helpwidget.addSpacer(2);
	//myText = addThankyouLine(helpwidget,"Bilder von https://www.frs-syltfaehre.de/informationen/webcams");

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
// print sunise / sunset icons; thx to folks from hessenschau
//
function printSFSymbol(stack, symbolStr, width) {
  let mobileIcon;
  let mobileIconElement;
  mobileIcon = SFSymbol.named(symbolStr);
  mobileIconElement = stack.addImage(mobileIcon.image);
  mobileIconElement.imageSize = new Size(width, width);
  mobileIconElement.tintColor =  Color.white();
}



//
// get logo-image as download
//
async function getImage(image,prvlogofileURL,prv_todaydatestring,prv_yesterdaydatestring,prv_dataload_mode) {
    let fm = FileManager.local();
    let dir = fm.documentsDirectory();
    let path = fm.joinPath(dir, image); // das war bisher...
		console.log("Image = " + image);
		// jetzt kommt das neue Zeugs...
		// Today - Datei mit heutigem Datum "WWS_Logo_HEUTEDATUM.png"
		const myArray = image.split(".");
		let imagetitle = myArray[0];
		console.log("Image Title = " + imagetitle);
		let todaydatafile = imagetitle + prv_todaydatestring + "." + myArray[1];
		let todaypath = fm.joinPath(dir, todaydatafile);
		console.log("Todayfile: " + todaydatafile);
		// Yesterday - Datei mit gestrigem Datum "WWS_Logo_GESTERNDATUM.png"
		let yesterdaydatafile = imagetitle + prv_yesterdaydatestring + "." + myArray[1];
		let yesterdaypath = fm.joinPath(dir, yesterdaydatafile);
		console.log("Yesterdayfile: " + yesterdaydatafile);

		// erst Löschen der bisherigen Datei ohne Datumsstring
		if (fm.fileExists(path)) {
		// console.log("Lösche Image")
		fm.remove(path);
		}
		// ... jetzt Löschen der neuen Gestern-Datei (mit Datumsstring)
		if (fm.fileExists(yesterdaypath)) {
			 console.log("Lösche Yesterday-Datei")
			fm.remove(yesterdaypath);
			}
 		// Und Löschen der Heute-Datei, wenn Dataload Mode nicht Standard ist
		// wenn der Dataload Mode = Standard ist, bleibt die lokale Kopie bestehen.
		if (prv_dataload_mode != "Standard") {
			if (fm.fileExists(todaypath)) {
				console.log("Lösche Heute-Datei");
				fm.remove(todaypath);
				}
			}

		// und jetz Laden....
		// wenn sie lokal existiert, lokal laden
		// wenn sie nicht lokal existiert, vom Netz laden

			if (fm.fileExists(todaypath)) {
				console.log("Logo-Image exists, needs to be loaded locally");
				console.log("Local Logo-Image name: " + todaypath);
				let iconImage = fm.readImage(todaypath);
				return iconImage;
			} else {
				// console.log("GetImage: ImageFile wird neu geladen")
				let logoUrl;
				logoUrl = prvlogofileURL + "/" + image;
				const req = await new Request(logoUrl);
				let iconImage = await req.loadImage();
				// console.log("GetImage: ImageFile wurde vom Netz geladen")
				fm.writeImage(todaypath, iconImage);
				console.log("Schreibe Heute-Datei: " + todaypath);
				return iconImage;
			}
}
/* closes function getImage */

//
// get datafile as download
//
async function getData(datafile, prvdatafileURL,prv_todaydatestring,prv_yesterdaydatestring,prv_dataload_mode) {
    let fm = FileManager.local();
    let dir = fm.documentsDirectory();
    let path = fm.joinPath(dir, datafile); // das war bisher
		// jetzt kommt das neue Zeugs...
		// Today - Datei mit heutigem Datum

		const myArray = datafile.split(".");
		let datafiletitle = myArray[0];
		console.log("DataFile Title = " + datafiletitle);
		let todaydatafile = datafiletitle + prv_todaydatestring + "." + myArray[1];
		let todaypath = fm.joinPath(dir, todaydatafile);
		console.log("Todayfile: " + todaydatafile);
		// Yesterday - Datei mit gestrigem Datum
		let yesterdaydatafile = datafiletitle + prv_yesterdaydatestring + "." + myArray[1];
		let yesterdaypath = fm.joinPath(dir, yesterdaydatafile);
		console.log("Yesterdayfile: " + yesterdaydatafile);

		// erst Löschen der bisherigen Datei (ohne Datumsstring)
		if (fm.fileExists(path)) {
			 console.log("Lösche Datei")
			fm.remove(path);
			}
		// ... jetzt Löschen der neuen Gestern-Datei (mit Datumsstring)
		if (fm.fileExists(yesterdaypath)) {
			 console.log("Lösche Yesterday-Datei")
			fm.remove(yesterdaypath);
			}
 		// Und Löschen der Heute-Datei, wenn Dataload Mode nicht Standard ist
		// wenn der Dataload Mode = Standard ist, bleibt die lokale Kopie bestehen.
		if (prv_dataload_mode != "Standard") {
			if (fm.fileExists(todaypath)) {
				console.log("Lösche Heute-Datei");
				fm.remove(todaypath);
				}
			}

		// und jetz Laden....
		// wenn sie lokal existiert, lokal laden
		// wenn sie nicht lokal existiert, vom Netz laden

			if (fm.fileExists(todaypath)) {
					console.log("File exists, needs to be loaded locally");
					console.log("Local File name: " + todaypath);
					let camfile = fm.readString(todaypath);
					return camfile
			} else {
					let dataUrl;
					dataUrl = prvdatafileURL + "/" + datafile;
					let req = new Request(dataUrl);
					let camfile = await req.loadString();
//				 	console.log(`getData: camfile: ${camfile}.`);
					fm.writeString(todaypath,camfile);
					console.log("Schreibe Heute-Datei: " + todaypath);

					return camfile;
				}
}
/* closes function getData */
