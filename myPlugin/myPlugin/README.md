1.manifest.json文件：
{
    "manifest_version":2,//版本号，由google指定为2
    "name": "helloWorld",//插件名称
    "version":"1.0",//插件版本
    "description":"hello world 插件",//插件描述
    "icons":{//插件图标
        "128":"img/logo.png",
        "48":"img/logo.png",
        "16":"img/logo.png"
    },
    "browser_action":{
        "default_icon":"img/logo.png",//插件图标
        "default_popup":"popup.html"//点击图标后弹出的html互动文件
    }
}

2.新增功能需要在data.js里面依照格式依次添加对象数据到myData里面
3.新增数据的event的值要与events.js里面的方法唯一对应