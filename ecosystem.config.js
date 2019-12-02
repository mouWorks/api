module.exports = {
    apps : [{
        name   : "api",
        script : "dist/main.js"
    }],
    env:
        {
            PM2_SERVE_PATH: '.',
            PM2_SERVE_PORT: 3005
        }
}

