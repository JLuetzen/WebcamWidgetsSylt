// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: camera-retro;
// Original script by Andreas Redeker <hello@andreasredeker.de>
// Enhanced by: J. Lützen <kliffkieker67@gmail.com>
// Cam URL  https://player.livespotting.com/?alias=nn1xc3my&ch=LS_3f855
// Preview Cam imgURL "https://cs3.wettercomassets.com/thumbnails/variants/5c6c8bfda5b4b90f1f0a3b07/16x9_player.jpg"
// Preview Cam imgURL 


const camLocation = "Westerland Kurpromenade";
const camSubtitle = "Mein Bild 1.0";
const url = "https://player.livespotting.com/?alias=nn1xc3my&ch=LS_3f855";
const imgUrl = "https://cdn.livespotting.com/vpu/4b7r3v86/xhn7c8l2.jpg";
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

