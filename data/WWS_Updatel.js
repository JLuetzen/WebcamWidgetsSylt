// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: camera-retro;
// Script by Jens Luetzen: <kliffkieker67@gmail.com>

//
// Initialization der Variablen
//
// Diese beiden Konstanten sind die Minimalwerte zum Laden des Parameterfiles
///
const GitHubDataPath = 'https://wwsylt.live/data';
const GitHubMasterScriptFile = "WWS_Master"

//const localWidgetfile = "WWS_CSML-Edition"
// var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,localWidgetfile+".js");

var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Syltcams.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Syltfaehre.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Syltshuttle.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_CSML-Edition.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Surfcams_Bayern.js");

Script.complete();




//
// get scriptfile as download
//
async function copyFile(prvmasterscriptfile, prvscriptfileURL, prvlocalwidgetfile) {
    let fm = FileManager.iCloud();
    let dir = fm.documentsDirectory();
    let path = fm.joinPath(dir, prvlocalwidgetfile);

		console.log("scriptfile Title = " + prvlocalwidgetfile);

		// erst Löschen der bisherigen Datei (ohne Datumsstring)
		if (fm.fileExists(path)) {
			 console.log("Lösche Datei")
			fm.remove(path);
		}

		let writepath = fm.joinPath(dir, prvlocalwidgetfile);
		let scriptUrl;
		scriptUrl = prvscriptfileURL + "/" + prvmasterscriptfile;
		let req = new Request(scriptUrl);
		fm.writeString(writepath,scriptUrl);
		console.log("Schreibe neue Datei: " + writepath);

		return scriptfile;
}
/* closes function getData */
