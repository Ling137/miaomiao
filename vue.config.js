// 反向代理proxy，解决跨域问题
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin : true
            },
            '/api2' : {
                target : 'http://localhost:3000',
                changeOrigin : true
            },
            // '/mockapi' : {
            //     target : 'https://mockapi.eolinker.com/6bSx7Afdb3d0356201003058ae87cfe77bab2f2c0898e8b                ',
            //     changeOrigin : true
            // }           
        }
    }
}