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
	// WWS_CamsAmRing
	// *****************************


	case ("WWS_CamAmRing_GrandPrixStrecke"):
		CamFamily = "- Teaser Nürburgring -";
		GitHubCamFile = "Cams_am_Ring.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases_CamsAmRing';
		hinweistext = "";
		param = "1"
	break;


	case ("WWS_CamAmRing_ZufahrtNordschleife"):
		CamFamily = "- Teaser Nürburgring -";
		GitHubCamFile = "Cams_am_Ring.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases_CamsAmRing';
		hinweistext = "";
		param = "2"
	break;

	// *****************************
	// Default
	// *****************************


	default:
		CamFamily = "- Teaser Nürburgring -";
		GitHubCamFile = "Cams_am_Ring.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases_CamsAmRing';
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
