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
const GitHubMasterScriptFile = "WWS_Master_singles"

//const localWidgetfile = "WWS_CSML-Edition"
// var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,localWidgetfile+".js");
//
// WWS_SyltcamsSyltCams
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Westerland_Promenade.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_SurfcamSylt.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Hoernum.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Hoernum_Weststrand.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Kampen_Quermarkenfeuer.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Kampen Hotel Rungholt.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Rantum.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Sansibar.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Kampen_Golfclub_Sylt.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Friesenkapelle_Wenningstedt.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Wenningstedt_HausAmKliff.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Wenningstedt_BerthinBleegStr.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_Wenningstedt_Risgap.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_List_Weststrand.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Sylt_List_Hafen.js");


// WWS_Syltfaehre
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Syltfaehre_Havneby.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Syltfaehre_List.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Syltfaehre_List-Zoom.js");

// WWS_Syltshuttle
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Niebuell_1.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Niebuell_2.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Niebuell_3.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Westerland_1.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Westerland_2.js");
var scriptfile = await copyFile(GitHubMasterScriptFile+".js",GitHubDataPath,"WWS_Westerland_3.js");


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
