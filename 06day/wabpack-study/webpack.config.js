const path =require('path')



//这个配置文件,其实就是一个jS文件,通过Node中的模块操作,向外暴露了一个配置对象
module.exports = {
        //手动指定入口和出口
        entry:path.join(__dirname,'./src/main.js'),//入口文件,表示要使用的webpack打包的文件
        output: {//输出文件相关的配置
            filename: 'bundle.js', //指定 输出文件的名称
            path: path.join(__dirname, './dist'),//指定打包好的文件,输出到那个目录中去
        }
}