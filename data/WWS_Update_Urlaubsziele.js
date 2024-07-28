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
const GitHubMasterScriptFile = "WWS_Master_singles_Holiday"

//
// WWS_SyltcamsSyltCams
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_SPO_Badestelle_Ording.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_SPO_Erlebnispromenade.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_SPO_Kuestenpanorama.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Buesum_Perlebucht.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Buesum_Hauptstrand.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Buesumer_Deichhausen.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Greetsiel_Hafen.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Gardasee Color Hotel.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Gardasee Malcesine.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Insel Poel.js");
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
		let transferfile = await req.loadString();
		fm.writeString(writepath,transferfile);
		console.log("Schreibe neue Datei: " + writepath);

		return scriptfile;
}
/* closes function getData */
