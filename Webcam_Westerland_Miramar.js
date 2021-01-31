// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: camera-retro;
// Original script by Andreas Redeker <hello@andreasredeker.de>
// Enhanced by: J. Lützen <kliffkieker67@gmail.com>
// Cam URL  https://livestream.nordwind-ev.de/westerland-03.html
// Preview Cam imgURL "https://www.worldcam.pl/images/webcams/420x236/strand-sylt.jpg"



const camLocation = "Westerland Hotel Miramar";
const camSubtitle = "Mein Bild 1.0";
const url = "https://livestream.nordwind-ev.de/westerland-03.html";
const imgUrl = "https://www.worldcam.pl/images/webcams/420x236/strand-sylt.jpg";
const imgReq = await new Request(imgUrl);
const img = await imgReq.loadImage();

if (config.runsInWidget) {
  let widget = createWidget(img);
  Script.setWidget(widget);
  Script.complete();
} else { 	
  let widget = createWidget(img);
  await widget.presentMedium();
}

function createWidget(img) {

  const widget = new ListWidget();
  widget.backgroundColor = Color.black();
  widget.url = url;
  widget.backgroundImage = img;

  widget.addSpacer();

  const titleText = widget.addText(camLocation);
  titleText.font = Font.boldSystemFont(12);
  titleText.textColor = Color.white();
  titleText.shadowRadius = 3;
  titleText.shadowColor = Color.black();

  widget.addSpacer(2);

  const subtitleText = widget.addText(camSubtitle);
  subtitleText.font = Font.systemFont(8);
  subtitleText.textColor = Color.white();
  subtitleText.textOpacity = 0.8;
  subtitleText.shadowRadius = 3;
  subtitleText.shadowColor = Color.black();

  return widget
}

