const path = require('path')

export default {
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: '../dist'
    },
    base: '/SA-website-about/',
    server: {
        port: 8080
    }
}