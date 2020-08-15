module.exports = {
    devServer:{
        proxy:{
            "/api2":{
                target:'http://127.0.0.1:3000',
                changeOrigin:true
            },
            "/api":{
                target:'http://127.0.0.1:3000',
                changeOrigin:true
            }
        }
    }
}