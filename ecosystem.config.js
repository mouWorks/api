module.exports = {
    apps : [{
        name   : "api",
        script : "./server.js"
    }],
    env:
        {
            PM2_SERVE_PATH: '.',
            PM2_SERVE_PORT: 3005
        }
}

