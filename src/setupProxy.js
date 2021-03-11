const { createProxyMiddleware } = require('http-proxy-middleware');
const MM_API = `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`;

module.exports = function(app){
    app.use(
        createProxyMiddleware(MM_API, {
            target:"https://api.musixmatch.com",
            secure:false,
            changeOrigin:true
        })
    );
};