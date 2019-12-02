module.exports = {
    apps : [{
        name   : "api",
        script : "src/main.ts"
    }],
    env:
        {
            PM2_SERVE_PATH: '.',
            PM2_SERVE_PORT: 3005
        }
}

