// Step data for the recording-guide wizard, in Finnish and English. Kept
// separate from index.html so it can be loaded both as a plain <script>
// (defines the global STEPS_I18N) and required from steps.test.js.
//
// Segment numbers/timings follow RECORDING_GUIDE.md. Segment 4 (facial
// action units) is expanded into one step per action, since the guide asks
// to go through them "one at a time" -- everything else stays as one step
// per guide segment. The two language arrays must stay the same length and
// shape (checklist/seconds/done on the same indices) -- steps.test.js checks this.

const STEPS_FI = [
  {
    title: "Tarkista kamera ja ympäristö",
    checklist: [
      "Kamera tukevasti paikallaan (jalusta tms.) -- ei käsivarassa.",
      "Valotus, valkotasapaino ja tarkennus lukittu (AE/AF-lukko).",
      "Ei laajakulma-/ultralaajakulmaobjektiivia, ei muotokuva-/kaunistustilaa.",
      "1920x1080, 30 fps (tai 60 fps jos haluat välttää liike-epäterävyyttä).",
      "Pehmeä, tasainen valo edestä -- ei ikkunaa tai kirkasta valoa selän takana.",
      "Tausta yksivärinen ja paikallaan, ei muita ihmisiä/lemmikkejä/liikettä.",
      "Pää ja hartiat kuvassa marginaalilla, hiukset pois kasvoilta.",
      "Silmälasit pois jos mahdollista.",
    ],
  },
  { title: "1. Neutraali ilme", text: "Istu paikallasi, rento neutraali ilme, suu kiinni, katso suoraan kameraan.", seconds: 8 },
  { title: "2. Pään kierto (ROM)", text: "Hitaasti: käännä päätä vasemmalle, sitten oikealle, takaisin keskelle. Kallista leukaa alas, sitten ylös, keskelle. Kallista (roll) päätä kumpaakin olkapäätä kohti, keskelle. Pidä liikkeet hitaina ja erillisinä, pysähdy hetkeksi ääriasennoissa.", seconds: 25 },
  { title: "3. Silmien liike", text: "Pää paikallaan: katso vasemmalle, oikealle, ylös, alas, keskelle. Räpäytä muutaman kerran luonnollisesti. Sulje silmät hitaasti ja pidä hetki kiinni, avaa.", seconds: 18 },
  { title: "4. Kulmakarvat: nosta molemmat", text: "Nosta molemmat kulmakarvat ylös, pidä huipulla ~1s.", seconds: 4 },
  { title: "4. Kulmakarvat: nosta ulkokulmat", text: "Nosta vain kulmakarvojen ulkokulmat.", seconds: 4 },
  { title: "4. Kulmakarvat: rypistä", text: "Vedä kulmakarvat alas / rypistä.", seconds: 4 },
  { title: "4. Posket: täytä ilmalla", text: "Puhalla molemmat posket täyteen ilmaa.", seconds: 4 },
  { title: "4. Posket: siristä (hymy pelkillä poskilla)", text: "Siristä silmät hymyillen pelkillä poskilla.", seconds: 4 },
  { title: "4. Leuka: avaa suu", text: "Avaa suu luonnollisesti.", seconds: 4 },
  { title: "4. Leuka: vasemmalle", text: "Liikuta leukaa vasemmalle.", seconds: 3 },
  { title: "4. Leuka: oikealle", text: "Liikuta leukaa oikealle.", seconds: 3 },
  { title: "4. Leuka: eteen", text: "Työnnä leukaa eteenpäin.", seconds: 3 },
  { title: "4. Suu: hymy (molemmin puolin)", text: "Hymyile molemmilla puolilla suuta.", seconds: 4 },
  { title: "4. Suu: hymy (yksi puoli kerrallaan)", text: "Hymyile ensin vain vasemmalla puolella, sitten vain oikealla.", seconds: 5 },
  { title: "4. Suu: irvistys (frown)", text: "Vedä suupielet alas (surullinen ilme).", seconds: 4 },
  { title: "4. Suu: nyrpistä (kiss)", text: "Nyrpistä huulet suudelmaan.", seconds: 4 },
  { title: "4. Suu: funnel (\"oo\")", text: "Muodosta huulilla \"oo\"-asento.", seconds: 4 },
  { title: "4. Suu: paina huulet yhteen", text: "Paina huulet tiiviisti yhteen.", seconds: 3 },
  { title: "4. Suu: venytä leveäksi", text: "Venytä huulet leveäksi hymyksi ilman että näytät hampaita.", seconds: 4 },
  { title: "4. Suu: rullaa huulet sisään", text: "Rullaa ylä- ja alahuuli sisäänpäin.", seconds: 5 },
  { title: "4. Suu: kohauta huulia", text: "Kohauta (shrug) ylä- ja alahuulta.", seconds: 5 },
  { title: "4. Nenä: rypistä", text: "Rypistä/nyrpistä nenää kummaltakin puolelta.", seconds: 5 },
  { title: "4. Kieli ulos (valinnainen)", text: "Työnnä kieli ulos, jos tuntuu mukavalta.", seconds: 4 },
  { title: "5. Luonnollinen puhe", text: "Lue muutama lause ääneen tai puhu vapaasti mistä tahansa aiheesta luonnollisella tavalla.", seconds: 45 },
  { title: "6. Orbit-kuvaus (vaihe 3 varten)", text: "Kamera paikallaan: käänny hitaasti niin pitkälle kuin mukavaa, ihanteellisesti lähelle profiilia kummallakin puolella, neutraalilla ilmeellä. Voit halutessasi toistaa kerran leuka hieman ylhäällä ja kerran hieman alhaalla.", seconds: 35 },
  { title: "Valmis!", text: "Kaikki segmentit kuvattu. Tallenna video data/raw/-kansioon ja tarkista pikaisesti että kuvaus näyttää tasalaatuiselta alusta loppuun.", done: true },
];

const STEPS_EN = [
  {
    title: "Check camera and environment",
    checklist: [
      "Camera stationary (tripod etc.) -- not handheld.",
      "Exposure, white balance, and focus locked (AE/AF lock).",
      "No wide-angle/ultra-wide lens, no portrait mode / beauty filters.",
      "1920x1080, 30 fps (or 60 fps if you want to avoid motion blur).",
      "Soft, even light from the front -- no window or bright light behind you.",
      "Plain, static background -- no other people/pets/movement.",
      "Head and shoulders framed with margin, hair clear of your face.",
      "Glasses off if possible.",
    ],
  },
  { title: "1. Neutral expression", text: "Sit still, relaxed neutral expression, mouth closed, look straight at the camera.", seconds: 8 },
  { title: "2. Head rotation (ROM)", text: "Slowly: turn head left, then right, back to center. Tilt chin down, then up, back to center. Roll head toward each shoulder, back to center. Keep motions slow and separate, pause at each extreme.", seconds: 25 },
  { title: "3. Eye movement", text: "Head still: look left, right, up, down, back to center. A few natural blinks. Close eyes slowly, hold a moment, open.", seconds: 18 },
  { title: "4. Eyebrows: raise both", text: "Raise both eyebrows, hold the peak for ~1s.", seconds: 4 },
  { title: "4. Eyebrows: raise outer corners", text: "Raise only the outer corners of the eyebrows.", seconds: 4 },
  { title: "4. Eyebrows: furrow", text: "Pull the eyebrows down / furrow.", seconds: 4 },
  { title: "4. Cheeks: puff out", text: "Puff both cheeks out with air.", seconds: 4 },
  { title: "4. Cheeks: squint (cheek smile)", text: "Squint, smiling with just the cheeks.", seconds: 4 },
  { title: "4. Jaw: open mouth", text: "Open your mouth naturally.", seconds: 4 },
  { title: "4. Jaw: move left", text: "Move the jaw to the left.", seconds: 3 },
  { title: "4. Jaw: move right", text: "Move the jaw to the right.", seconds: 3 },
  { title: "4. Jaw: push forward", text: "Push the jaw forward.", seconds: 3 },
  { title: "4. Mouth: smile (both sides)", text: "Smile with both sides of the mouth.", seconds: 4 },
  { title: "4. Mouth: smile (one side at a time)", text: "Smile with only the left side first, then only the right.", seconds: 5 },
  { title: "4. Mouth: frown", text: "Pull the corners of the mouth down (sad expression).", seconds: 4 },
  { title: "4. Mouth: pucker (kiss)", text: "Pucker the lips into a kiss shape.", seconds: 4 },
  { title: "4. Mouth: funnel (\"oo\")", text: "Shape the lips into an \"oo\".", seconds: 4 },
  { title: "4. Mouth: press lips together", text: "Press the lips firmly together.", seconds: 3 },
  { title: "4. Mouth: stretch wide", text: "Stretch the lips into a wide smile without showing teeth.", seconds: 4 },
  { title: "4. Mouth: roll lips in", text: "Roll the upper and lower lip inward.", seconds: 5 },
  { title: "4. Mouth: shrug lips", text: "Shrug the upper and lower lip.", seconds: 5 },
  { title: "4. Nose: scrunch", text: "Sneer/scrunch the nose on each side.", seconds: 5 },
  { title: "4. Tongue out (optional)", text: "Stick your tongue out, if comfortable.", seconds: 4 },
  { title: "5. Natural talking", text: "Read a sentence or two out loud, or talk freely about anything, in a natural way.", seconds: 45 },
  { title: "6. Orbit coverage (for phase 3)", text: "Camera still fixed: slowly rotate as far as is comfortable, ideally approaching profile on each side, neutral expression. Optionally repeat once with chin slightly raised and once slightly lowered.", seconds: 35 },
  { title: "Done!", text: "All segments captured. Save the video under data/raw/ and do a quick check that the recording looks consistent from start to finish.", done: true },
];

const STEPS_I18N = { fi: STEPS_FI, en: STEPS_EN };

if (typeof module !== "undefined") module.exports = STEPS_I18N;
