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
//

module.exports.assignParameters = async function(myFilename_is_version) {

myFilename_Ver_Array = myFilename_is_version.split("*");
myFilename = myFilename_Ver_Array[0];
is_version = myFilename_Ver_Array[1];

console.log("My Filename: " + myFilename);
console.log("is_version: " + is_version);

let to_be_version=21.40;

switch (myFilename) {

	case ("WWS_Syltcams"):
		CamFamily = "Sylt Cams";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
	break;


	case ("WWS_Syltcams_TST"):
		CamFamily = "Sylt Cams_TST";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases_TST';
		hinweistext = "Testcase for Logo Proposal";
	break;


	case ("WWS_Syltfaehre"):
		CamFamily = "FRS Syltfähre";
		GitHubCamFile = "Cams_Syltfaehre.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
	break;

	case ("WWS_Syltfaehre_TST"):
		CamFamily = "FRS Syltfähre_TST";
		GitHubCamFile = "Cams_Syltfaehre.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases_TST';
		hinweistext = "Testcase for Logo Proposal";
	break;


	case ("WWS_Syltshuttle"):
		CamFamily = "Autozug Sylt";
		GitHubCamFile = "Cams_Syltshuttle.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
	break;

	case ("WWS_Syltshuttle_TST"):
		CamFamily = "Autozug Sylt_TST";
		GitHubCamFile = "Cams_Syltshuttle.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases_TST';
		hinweistext = "Testcase for Logo Proposal";
	break;

	case ("WWS_Surfcams_Bayern"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
	break;


	case ("WWS_Surfcams_Bayern_WS"):
		CamFamily = "Testcase Walchensee";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases_WALCHENSEE';
		hinweistext = "";
	break;


	case ("WWS_CSML-Edition"):
		CamFamily = "CSML Edition";
		GitHubCamFile = "Cams_CSML-Edition.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
	break;


	case ("WWS_Livespotting_Coast"):
		CamFamily = "Livespotting Coast Edition";
		GitHubCamFile = "LiveSpotting_coast.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
	break;


	default:
		CamFamily = "Test Script";
		GitHubCamFile = "Cam_BBS.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo_NY.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
	}

	//
	// check version and create Hinweistext, if needed

		if (1*is_version != 1*to_be_version) {
			hinweistext = "Blauen Update-Kurzbefehl ausführen!"
		}


	myFileParameters = CamFamily + "*" + GitHubCamFile + "*" + sourceURL + "*" + GitHubLogoName + "*" + GitHubErrorPic + "*" + GitHubSpecialCaseFile + "*" + hinweistext;
	console.log("Im Modul..");
	console.log("myFileParameters : " + myFileParameters);

	return myFileParameters;

}
