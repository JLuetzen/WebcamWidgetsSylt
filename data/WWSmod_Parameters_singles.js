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

module.exports.assignParameters = async function(myFilename) {

switch (myFilename) {

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


	default:
		CamFamily = "Sylt Cams Singles";
		GitHubCamFile = "Cams_Sylt.txt";
		sourceURL = "https://wwsylt.live";
		GitHubLogoName = 'WWS_Logo.png';
		GitHubErrorPic = 'Error_Parameter.png';
		GitHubSpecialCaseFile = 'WWSmod_Specialcases';
		hinweistext = "";
		param = "1"
	}

	myFileParameters = CamFamily + "*" + GitHubCamFile + "*" + sourceURL + "*" + GitHubLogoName + "*" + GitHubErrorPic + "*" + GitHubSpecialCaseFile + "*" + hinweistext + "*" + param;
	console.log("Im Modul..");
	console.log("myFileParameters : " + myFileParameters);

	return myFileParameters;

}
