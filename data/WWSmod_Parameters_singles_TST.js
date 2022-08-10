// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: magic;

// Ausgelagerte Funktionen für das Eimlesen der Parameter nach Filename.
// Diese Funktion wird einmal pro Tag vom Server geladen.
// So ist bei Fehlern ein automatisches Update auf den geänderten Code innerhalb eines Tages möglich
//
// presently, the following filenames are foreseen:
// WWS_Syltcams.js
// WWS_Syltfaehre.js
// WWS_Syltshuttle.js
// WWS_Surfcams_Bayern.js
// WWS_CSML-Edition.js
// Default: Webcams_BBS_File.js (Mein Testscript)


// the affected parameters are
// CamFamily									--> Im Widget links 1. Zeile
// GitHubCamFile							--> Download Datei mit den jeweiligen Cam-Details
// sourceURL									--> Im Widget links 3. Zeile
// GitHubLogoName							--> Im Widget rechts Name des Logo-PNG
// GitHubErrorPic							--> Name des Fehler-PNG wenn zu große Parameter aufgerufen wurden
// GitHubSpecialCaseFile			--> Name des nachzuladenen Moduls für das WebScraping
// hinweistext								--> der Hinweistext erscheint links unter dem CamNamen
// param 											--> Nummer des Eintrags in der CamListe
//

module.exports.assignParameters = async function(myFilename,is_version) {

console.log("My Filename: " + myFilename);
console.log("is_version: " + is_version);

let to_be_version=21.7;

switch (myFilename) {

	// *****************************
	// WWS_Syltcams
	// *****************************


	case ("WWS_Sylt_Westerland_Promenade"):
		CamFamily = "Sylt Cams";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "1"
	break;


	case ("WWS_Sylt_SurfcamSylt"):
		CamFamily = "Sylt Cams";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "2"
	break;

	case ("WWS_Sylt_Hoernum"):
		CamFamily = "Sylt Cams";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "3"
	break;

	case ("WWS_Sylt_Kampen_Quermarkenfeuer"):
		CamFamily = "Sylt Cams";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "4"
	break;

	case ("WWS_Sylt_Kampen Hotel Rungholt"):
		CamFamily = "Sylt Cams";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "5"
	break;

	case ("WWS_Sylt_Rantum"):
		CamFamily = "Sylt Cams";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "6"
	break;

	case ("WWS_Sylt_Sansibar"):
		CamFamily = "Sylt Cams";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "7"
	break;

	case ("WWS_Sylt_Kampen_Golfclub_Sylt"):
		CamFamily = "Sylt Cams";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "8"
	break;

// *****************************
// WWS_Syltfaehre
// *****************************

	case ("WWS_Syltfaehre_Havneby"):
		CamFamily = "FRS Syltfähre";
		GitHubCamFile = "Cams_Syltfaehre.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "1"
	break;

	case ("WWS_Syltfaehre_List"):
		CamFamily = "FRS Syltfähre";
		GitHubCamFile = "Cams_Syltfaehre.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "2"
	break;

	case ("WWS_Syltfaehre_List-Zoom"):
		CamFamily = "FRS Syltfähre";
		GitHubCamFile = "Cams_Syltfaehre.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "3"
	break;

	// *****************************
	// WWS_Syltshuttle
	// *****************************

	case ("WWS_Niebuell_1"):
		CamFamily = "Autozug Sylt";
		GitHubCamFile = "Cams_Syltshuttle.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "1"
	break;

	case ("WWS_Niebuell_2"):
		CamFamily = "Autozug Sylt";
		GitHubCamFile = "Cams_Syltshuttle.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "2"
	break;

	case ("WWS_Niebuell_3"):
		CamFamily = "Autozug Sylt";
		GitHubCamFile = "Cams_Syltshuttle.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "3"
	break;

	case ("WWS_Westerland_1"):
		CamFamily = "Autozug Sylt";
		GitHubCamFile = "Cams_Syltshuttle.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "4"
	break;

	case ("WWS_Westerland_2"):
		CamFamily = "Autozug Sylt";
		GitHubCamFile = "Cams_Syltshuttle.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "5"
	break;

	case ("WWS_Westerland_3"):
		CamFamily = "Autozug Sylt";
		GitHubCamFile = "Cams_Syltshuttle.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "6"
	break;

	// *****************************
	// Default
	// *****************************


	default:
		CamFamily = "Sylt Cams";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "Du hast da was vergessen";
		param = "1"
	}


//
// check version and create Hinweistext, if needed

	if (1*is_version != 1*to_be_version) {
		hinweistext = "neu Version verfügbar, Update Kurzbefehl ausführen"
	}


	myFileParameters = CamFamily + "*" + GitHubCamFile + "*" + sourceURL + "*" + GitHubLogoName + "*" + GitHubErrorPic + "*" + GitHubSpecialCaseFile + "*" + hinweistext + "*" + param;
	console.log("Im Modul..");
	console.log("myFileParameters : " + myFileParameters);

	return myFileParameters;

}
