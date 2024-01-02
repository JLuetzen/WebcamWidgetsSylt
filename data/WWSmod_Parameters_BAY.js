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

module.exports.assignParameters = async function(myFilename_is_version) {

myFilename_Ver_Array = myFilename_is_version.split("*");
myFilename = myFilename_Ver_Array[0];
is_version = myFilename_Ver_Array[1];

console.log("My Filename: " + myFilename);
console.log("is_version: " + is_version);

let to_be_version=21.40;

switch (myFilename) {

	// *****************************
	// Surfcams Bayern
	// *****************************


	case ("WWS_BAY_Brombachsee"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "1";
	break;

	case ("WWS_BAY_Brombachsee_Video"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "2";
	break;

	case ("WWS_BAY_Altmuehlsee"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "3";
	break;

	case ("WWS_BAY_Chiemsee Uebersee"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "4";
	break;

	case ("WWS_BAY_Chiemsee Uebersee Video"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "5";
	break;

	case ("WWS_BAY_Chiemsee Prienavera"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "6";
	break;

	case ("WWS_BAY_Tegernsee Wallberg"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "7";
	break;

	case ("WWS_BAY_Tegernsee Sonnenbichl"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "8";
	break;

	case ("WWS_BAY_Ammersee"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "9";
	break;

	case ("WWS_BAY_Walchensee"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "10";
	break;

	case ("WWS_BAY_Kochelsee"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "11";
	break;

	case ("WWS_BAY_Starnbergersee Ammerland"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "12";
	break;

	case ("WWS_BAY_Gardasee Malcesine"):
		CamFamily = "Surfcams Bayern";
		GitHubCamFile = "Surfcams_Bayern.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "13";
	break;


	// *****************************
	// Default
	// *****************************


	default:
		CamFamily = "ERROR";
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
			hinweistext = "Blauen Update-Kurzbefehl ausführen!"
		}


	myFileParameters = CamFamily + "*" + GitHubCamFile + "*" + sourceURL + "*" + GitHubLogoName + "*" + GitHubErrorPic + "*" + GitHubSpecialCaseFile + "*" + hinweistext + "*" + param;
	console.log("Im Modul..");
	console.log("myFileParameters : " + myFileParameters);

	return myFileParameters;

}
