// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: camera-retro;
// Original script by Andreas Redeker <hello@andreasredeker.de>
// Enhanced by: J. Lützen <kliffkieker67@gmail.com>
// Cam URL: https://webtv.feratel.com/webtv/?design=v3v&cam=3150&c24=0
// Preview Cam imgURL "https://cs3.wettercomassets.com/thumbnails/variants/5afdfcba9c6a4/16x9_player.jpg"

const camLocation = "Kampen Hotel Rungholt";
const url = "https://webtv.feratel.com/webtv/?design=v3v&cam=3150&c24=0";
const imgUrl = "https://cs3.wettercomassets.com/thumbnails/variants/5afdfcba9c6a4/16x9_player.jpg";
const imgReq = await new Request(imgUrl);
const img = await imgReq.loadImage();

let actualdate = new Date();
let lastrefresh = new DateFormatter();
lastrefresh.useShortDateStyle();
lastrefresh.useShortTimeStyle();
camSubtitle = lastrefresh.string(actualdate);

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

