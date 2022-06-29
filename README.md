
<head>
<link rel="stylesheet" type="text/css" href="stylesheet.css">
<link rel="apple-touch-icon" sizes="180x180" href="./assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./assets/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">

<!--- <link rel="shortcut icon" type="image/x-icon" href="./assets/favicon.png?"> --->

</head>

![image](images/IMG_0184_corrected_20210403_Banner_Logo.jpg "Banner-List-Ellenbogen")

# Webcam Widgets Sylt -  live auf dem iPhone

### Einleitung
Hier ist eine Sammlung von Webcam Widgets von Sylt. Widgets, das sind kleine Apps, die Informationen direkt auf dem Homescreen vom Smartphone darstellen und eben nicht nur das App-Symbol.
Diese hier zeigen Bilder von WebCams auf der wundervollen Nordsee-Insel Sylt.

Wie das genau auf dem Smartphone aussieht, zeigt dieses Video: [https://youtu.be/xDe2LnULC7Y](https://youtu.be/xDe2LnULC7Y)

{% include youtubePlayer.html id="xDe2LnULC7Y" %}



Hier kommt das neueste Zeugs... (die alten Scripte stehen unten)

### 12.06.20222: deutlich verbessertes Script der 2. Generation ab sofort verfügbar - Eins für Alles - 
Ab sofort steht neben den bereits bewährten Scripts das deutlich verbesserte Script der 2. Generation unter dem Namen **WWS_Master_singles.js** bzw **WWS_Master.js** zur Verfügung. [HIER](https://gist.github.com/JLuetzen/c30ec199e664938198e8f38e16a2aed6) stehts zum Anschauen bereitsteht. Die Vorteile dieser neuen Version sind
* Kinderleichtes Einrichten durch **Kurzbefehl**, dazu den Kurzbefehl unten ausführen
* Automatische Updates
* Sonnenaufgangs- und Sonnenuntergangszeiten (im Widget rechts unten)
* Nennung der Website, die die WebCam bereitstellt (im Widget rechts unten)
* erleichterte Erweiterung um neue WebCams ohne Neu-Installation 
* Bessere Benutzerunterstützung bei fehlerhafter Einrichtung
* tägliche Aktualisierung der WebCam-Listen
* News-Zeile, falls notwendig (zeigt sich dann im Widget links oberhalb Datum/Uhrzeit)

<table class="center">
  <tr>
    <td text align="center"><a href="https://www.icloud.com/shortcuts/6159c22b53e544cfa4e8bf1cb80c89b8"><img src="images/WWS_Shortcut_Sylt_Singles.jpg" title="Link zum Kurzbefehl zum Installieren" height="200"></a></td>
  </tr>
</table>

----------------------------------------------------

**Es ist einfach und kinderleicht in 3 Schritten: (1) Scriptable installieren - (2) Update-Kurzbefehl laden und ausführen - (3) Widgets einrichten**


**1. Scriptable installieren**

Im App Store die App [Scriptable ](https://apps.apple.com/de/app/scriptable/id1405459188) auf dem iPhone installieren



**2. Kurzbefehl ausführen**

**Einfach das Bild antippen** und den Kurzbefehl installieren. Der Kurzbefehl kopiert das Update-Scrpit auf das iPhone, danach startet es.
Der Updater kopiert alles Notwendige auf das iPhone. Einfach und unkompliziert. 
Das funktioniert auch, wenn neue Widgets verfügbar sind. Wenn sich bei den Cams etwas ändert, aktualisiert sich das Widget automatisch über Nacht.

<table class="center">
  <tr>
    <td text align="center"><a href="https://www.icloud.com/shortcuts/6159c22b53e544cfa4e8bf1cb80c89b8"><img src="images/WWS_Shortcut_Sylt_Singles.jpg" title="Link zum Kurzbefehl zum Installieren" height="200"></a></td>
  </tr>
</table>



**3. Widgets einrichten**

<ins>schnelle Variante:
  1. Scriptable öffnen
  2. Script antippen

<ins>Homescreen Variante mit Livestream:
  
  
Dieser Weg ist von Apple vorgegeben, es geht nicht einfacher... [Beispiel](https://youtu.be/vTvw9BsSmVY)

  1. Einmal lange auf den HomeScreen tippen, bis die Icons wackeln. Dann über das Plus-Zeichen oben ein neues Widget erstellen.
  2. Nach unten scrollen und "_Scriptable_" auswählen (Schneller gehts, wenn man in das Suchfenster SC eingibt...), die "_mittlere_" Widget-Größe auswählen und "Add Widget" antippen.
  3. Die Icons sollten immer noch wackeln. Jetzt das neue Widget antippen, um die Einstellung zu starten
  4. Falls die Icons nicht wackeln, einfach den Homescreen lang drücken, bis sie es tun
  5. Unter "Script" das neue Script auswählen, zB "_WWS_Sylt_SurfcamSylt_"
  6. Das war's. Jetzt auf den HomeScreen tippen, um die Einstellung abzuschliessen.
  
 Um den Livestream zu starten, einfach das Bild auf dem Homescreen antippen (das funktioniert NICHT bei der schnellen Variante)
  
  Stapeln der Bilder:
  Wenn die Icons wackeln, ein Bild auf das andere ziehen, um einen Smart Stapel zu erzeugen, mit dem man durch die Cams mit dem Daumen durchscrollen kann. Das ist ein Smart Stack. bis zu 10 Bilder können so gestapelt werden.

  ***Frage:*** Warum kann man die Widgets nicht automatisch auf den Homescreen bringen?  
  ***Antwort***: Weil Apple das nicht freigegeben hat.


----------------------------------------------------

Das Ergebnis kann sich sehen lassen (Tap oder Click zum Vergrößern):
<table class="center">
  <tr>
    <td text align="center"><a href="images/WWSv2-1.jpeg"><img src="images/WWSv2-1.jpeg" title="Sylt-Shuttle"></a></td>
    <td text align="center"><a href="images/WWSv2-2.jpeg"><img src="images/WWSv2-2.jpeg" title="Sylt-Shuttle"></a></td>
    <td text align="center"><a href="images/WWSv2-3.jpeg"><img src="images/WWSv2-3.jpeg" title="Sylt-Shuttle"></a></td>
  </tr>
</table>

Die wesentlichen Neuerungen sind, falls es interessiert, weiter unten genannt.

----------------------------------------------------
### iPhone Nerd Version

Warum eine Nerd-Version?
Weils so ursprünglich programmiert war:
Ein Widget-Script bekommt einen Übergabe-Parameter, welche Zeilennummer aus der CamListe genommen werden soll. 
<u>Vorteil:</u> 
Man hat nur wenige Scripte auf dem iPhone
<u>Nachteil:</u>
Das Einrichten auf dem Homescreen ist... sagen wir einmal .. nerdisch ;-)
Daher die "Singles"-Version oben, für jede Cam 1 ein Script mit einem sprechenden Namen. Das macht es kinderleicht
Wer es eher etwas aufgeräumt in seinem Scriptable Folder auf dem iCloud Drive mag, kann diese Version hier verwenden
Beim Einrichten der Widgets auf dem Homescreen dann den Wert "Parameter" mit einer Zahl ab 1 füllen, bis das Maximum erreicht wurde (steht im Widget)

<table class="center">
  <tr>
    <td text align="center"><a href="https://www.icloud.com/shortcuts/8d46e117081f48a89b25cfe9b9cb06ab"><img src="images/WWS_Shortcut.jpg" title="Link zum Kurzbefehl zum Installieren" height="200"></a></td>
  </tr>
</table>

------------------------------------------------
### weitere Hinweise
  
<br>
Desweiteren gibt es [dieses kommentierte](https://youtu.be/okgi-ZKg_PY) Video und vom Sylt-Shuttle [dieses unkommentierte](https://youtu.be/En-h2LZYh1w) YouTube-Video, um sich einen Eindruck zu verschaffen.

Für alle, die nicht auf ihre Lieblings-Insel können (wie ich 😉) bietet sich somit hier die Gelegenheit, Live-Bilder und Streams sehr bequem anzusehen.
Wer aber auf die Insel reisen möchte oder sie wieder verlassen muss, der findet hier ein sehr angenehmes Angebot, sich über die Situation an den Verladestationen in Westerland oder Niebüll sowie an den Fähranlegern in List oder Havneby zu informieren.
Das macht diese Widgets so attraktiv.

Das iPhone aktualisiert diese Bilder alle 15-20 min und damit sind die Bilder immer aktuell.
Der Livestream der WebCam öffnet sich, wenn man das Bild antippt.

------------------------------------------------

Richtig interessant wird es, wenn man die Bilder auf dem Homescreen kombiniert, z.B. die Bilder von der Verladestation in Niebüll mit denen vom Fähr-Anleger in Havneby.
So weiß man bei der Anreise immer, wie viel gerade los ist und ob man unter Umständen mit Wartezeiten rechnen muss.

Gleiches gilt natürlich auch für die Abreise mit der Kombination Verladestation Westerland und Fähranleger List.

Hier einmal das Beispiel für die Anreise von Ostern 2021:

<img src="images/IMG_0447_Ostern.jpg" title="Anreise" height="300" />

Hier noch ein paar Impressionen, wie man sich die Widgets einrichten kann:

<table class="center">
  <tr>
    <td text align="center"><a href="images/IMG_1070.jpeg"><img src="images/IMG_1070.jpeg" title="Sylt-Shuttle"></a></td>
    <td text align="center"><a href="images/IMG_1075.jpeg"><img src="images/IMG_1075.jpeg" title="FRS-Syltfähre"></a></td>
    <td text align="center"><a href="images/IMG_1076.jpeg"><img src="images/IMG_1076.jpeg" title="Livespotting & andere"></a></td>
  </tr>
</table>

Cool, oder? Now have fun and enjoy!

-JL-

------------------------------------------------
Übrigens:
Die Firma Livespotting hat einen Blog-Eintrag zu diesem Projekt veröffentlicht: [HIER](https://livespotting.com/blog/ios-widget-fuer-livespotting-webcams-sylt)

![Livespotting_Blog_Eintrag](images/livestreaming-open-source-app-sylt.jpg "livestreaming-open-source-app-sylt")


------------------------------------------------

### 2,99 € für die Kaffeedose


Wenn Euch die Widgets gefallen, würde ich mich über einen Einwurf in meine Kaffedose sehr freuen. Vielen herzlichen Dank!

<a href="https://www.buymeacoffee.com/8gy54qdgqyq/e/61153" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>


Und wenn es irgendwo hakt, bei Fragen oder Problemen bin ich hier erreichbar: [kliffkieker67@gmail.com](mailto:kliffkieker67@gmail.com).

------------------------------------------------

### Aufkleber....

<img src="https://user-images.githubusercontent.com/76537507/125843823-b743bf3d-b305-4e16-9646-dd337ec3472e.jpeg" title="Aufkleber" height="400" />

Ich gebe diese Aufkleber weg für 1,50 € pro Stück plus Porto (90 ct) , wenn Ihr den Betrag in die Paypal Kaffeedose einzahlt und mir per eMail Bescheid gebt.

Die Aufkleber sind rund, 7 cm Durchmesser, weiße Schrift auf transparenter Folie.

Versand erfolgt allerdings nur innerhalb Deutschlands.


------------------------------------------------

### Syltcams (Stand 12.06.2022)

Diese Sylter Cams sind eingebunden:
* Westerland Kurpromendade
* Surfcam Sylt auf Hotel Miramar
* Hörnum Webcam im Leuchtturm
* Kampen Quermarkenfeuer an Kliffende
* Kampen Hotel Runghold
* Rantum Beach
* Sansibar Beach
* Kampen Golfclub Sylt


------------------------------------------------

### FRS-Syltfähre (Stand 12.06.2022)

Diese Cams der FRS Syltfähre sind abrufbar:
* Anleger Havneby/Rømø
* Anleger List/Sylt
* Anleger List/Sylt - Zoom


------------------------------------------------

### Autozug Sylt / Syltshuttle (Stand 12.06.2022)

Vom Blauen Autozug und Syltshuttle sind diese 6 WebCams wählbar:
* 3 x Autoverladung Niebüll
* 3 x Autoverladung Westerland


------------------------------------------------

### Surfcams Bayern (Stand 12.06.2022)

Auch an den Bayrischen Seen gibt es Webcams, die von Surfern genutzt werden.

Diese Seen sind eingebunden:
* Brombachsee
* Altmühlsee
* Chiemsee
* Ammersee
* Walchensee
* Kochelsee
* Starnbergersee
* Tegernsee
* Gardasee


------------------------------------------------

### CSML-Edition (Stand 12.06.2022)

Webcams im Norden...

Diese Webcams sind eingebunden:
* Sankt Peter-Ording, Badestelle Ording
* Sankt Peter-Ording, Erlebnispromenade
* Sankt Peter-Ording, Küstenpanorama
* Büsum I
* Büsum II
* Büsum Deichhausen
* Greetsiel


------------------------------------------------

### "Das will ich auch..."

Wenn Ihr Webcams habt, die ich Euch in Widgets einbinden soll oder für die ich Euch Widgets schreiben soll, dann meldet Euch gerne per Mail bei mir.


------------------------------------------------

![image](images/DSC01323_Banner.JPG "Banner-Kliffende")

------------------------------------------------
### Danke an
- Sabine
- D. Erdmann, [Hotel Rungholt](https://hotel-rungholt.de), Kampen
- C. Kochanek, [C-A Ferienwohnung Sylt](https://www.cundasylt.de), Westerland
- S. Erbeck, [Livespotting.com](https://livespotting.com)
- H.-J. Rotter, [feratel media Technologies GmbH](https://www.feratel.com/)
- M. Franzen, P. Villwock, Insel Sylt Tourismus-Service, [www.insel-sylt.de](https://www.insel-sylt.de)
- M. Hoppe, [www.nordwind-ev.de](https://www.nordwind-ev.de)

------------------------------------------------
#### Hashtags:
#sylt #sychtig #syltliebe #kampensylt #einflirtfürsleben #syltfähre
#webcamwidgets #webcamwidgetssylt

------------------------------------------------
#### News:

##### 2022-06-17
Erleichterte Installation durch einen iPhone Kurzbefehl. Der lädt das Update-Script und das wiederum speichert die Scripts für die Widgets wie benötigt. Das machts extrem leicht, die Widgets zu nutzen. Das Einrichten der Widgets (Homescreen drücken, bis die Symbole wackeln,...) muss erst einmal weiter von Hand gemacht werden. Aber wer weiß schon was iOS 16 kann oder ob ich nicht doch einmal eine App ind den Store bringe.. ;-)

------------------------------------------------
##### 2022-06-12
*Script der 2. Generation*
Die neue Version WWS_Master.js, **das Eine für Alle** steht ab sofort zur Verfügung, eine für alles. 
Die Installation erfolgt über einen Kurzbefehl, die List der verfügbaren Cams wird dann täglich heruntergeladen. 
[Hier](https://gist.github.com/JLuetzen/c30ec199e664938198e8f38e16a2aed6) gehts zum Anschauen.
Unbedingt Aktualisieren, die Scripte der 1. Generation werden nicht mehr weiter gepflegt.

------------------------------------------------
##### 2022-02-06
*Scripts der 1. Generation*
Die geänderte Adresse der Webcam am Altmühlsee ist eingearbeitet und neu ist die WebCam an der Prienavera mit schönem Blick auf die Halbinsel, den See und das Alpenpanorama dahinter. Damit die Änderungen sichtbar werden, muss das Script "WebCams_Surfcams_Bayern" neu geladen werden, es ist [Hier](https://gist.github.com/JLuetzen/32108386834dce1f2c2de70ca597626f) zu finden.
---> Das erneute Laden entfällt bei Verwendung des Scripts der 2. Generation --> unbedingt Aktualsieren!

------------------------------------------------
##### 2021-08-20
*Scripts der 1. Generation*
Der Fehler beim Sylt Shuttle Widget mit der ausgefallenen Webcam von der Verladung in Westerland ist korrigiert. [Hier](https://bit.ly/3dj5YcN) geht's zum Widget zum Aktualisieren.
---> Das erneute Laden entfällt bei Verwendung des Scripts der 2. Generation --> unbedingt Aktualsieren!



[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjluetzen.github.io%2FWebCamWidgetsSylt%2F&count_bg=%230277BD&title_bg=%23555555&icon=slideshare.svg&icon_color=%23E7E7E7&title=Besucher&edge_flat=false)](https://hits.seeyoufarm.com)

------------------------------------------------
## Neuerungen im Script der 2. Generation

Diese Neuerungen sind in dem Script der 2. Generation **WWS_Master.js** umgesetzt:
* die Daten der Cams stehen jetzt nicht mehr im Script, sondern in einer zentralen Datei, die das Script täglich 1x aktualisiert. Dadurch kommt der Benutzer viel schneller in den Genuss neuer verfügbarer Cams. Die Textdateien mit den Daten der Cams liegen hier im [Data-Verzeichnis des GitHub Projects](https://github.com/JLuetzen/WebcamWidgetsSylt/tree/main/data)
* Die Parameter pro Script werden in einer zentralen Datei geführt, die auch täglch 1x aktualisiert wird. Damit kann zentral und schnell auf Änderungsbedarf reagiert werden, ohne das Script selber ändern zu müssen. Die Parameter-Datei _WWSmod_Paramters.js_ mit den Parametern der einzelnen Scripte liegt liegt hier im [Data-Verzeichnis des GitHub Projects](https://github.com/JLuetzen/WebcamWidgetsSylt/tree/main/data)
* Auf einigen WebCams sind die Informationen zu den WebCams oder Livestreams mit Zeitstempeln versehen. Damit ändert sich laufend der Verweis auf die WebCam und das kann zu ärgerlichen Widget-Fehlern führen. Mit der neuen Scriptversion werden die gerade gültigen Pfade zu den Medien direkt von der Website des Herstellers ausgelesen, wenn das Widget sich aktualisiert. Auch dieses Verfahren kann sich laufend ändern und deshalb wird die Datei 1x pro Tag aktualisiert. Die Parameter-Datei _WWSmod_Specialcases.js_ mit den Auslese-Routinen von den Websites liegt liegt hier im [Data-Verzeichnis des GitHub Projects](https://github.com/JLuetzen/WebcamWidgetsSylt/tree/main/data)


------------------------------------------------
## Scripts der ersten Generation
Zu allen Widgets geht es [hier entlang:](https://gist.github.com/JLuetzen)
Ihr findet da alles, den Code und die Installations-Anleitung in Text und als YouTube-Video.
Das erste Video erklärt, wie das Widget-Script von Github nach Scriptable gebracht wird: [https://youtu.be/tRHFpwIr_l0](https://youtu.be/tRHFpwIr_l0)
Das zweite Video stellt dann dar, wie danach das Widget eingerichtet wird [https://youtu.be/LnrikIM3T0U](https://youtu.be/LnrikIM3T0U) .

Ihr werdet sehen, das ist alles sehr einfach.

<table class="center">
  <tr>
    <th>7 Webcams Livespotting & andere von Sylt</th>
    <th>6 Webcams Autozug Sylt-Shuttle</th>
    <th>3 WebCams Syltfähre</th>
  </tr>
  <tr>
    <td text align="center"><img src="images/Preview_Livespotting.jpg" title="Livespotting.com"></td>
    <td text align="center"><img src="images/Preview_SyltShuttle.jpg" title="Sylt-Shuttle"></td>
    <td text align="center"><img src="images/Preview_SyltFaehre.jpg" title="FRS-Syltfähre"></td>

  </tr>
  <tr>
    <td text align="center"><a href="https://bit.ly/3b2wrsd">[Link zum Einrichten]</a></td>
    <td text align="center"><a href="https://bit.ly/3dj5YcN">[Link zum Einrichten]</a></td>
    <td text align="center"><a href="https://bit.ly/3eCBe7d">[Link zum Einrichten]</a></td>
  </tr>
</table>


