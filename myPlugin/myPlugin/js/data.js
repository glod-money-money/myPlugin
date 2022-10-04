var myData = [
  {
    name: "切换到GitHub1s",
    event: "goToGitHub1s",
    disabled: false,
    params:{}
  },
  {
    name: "打开百度",
    event: "openBaidu",
    disabled: false,
    params:{}
  },
  {
    name: "通讯",
    event: "sendMessageToContent",
    disabled: false,
    params:{active:"sendMsg",data:"这是传递的消息"}
  },
  {
    name: "去除弹窗",
    event: "closeModelWin",
    disabled: false,
    params:{}
  },
  {
    name:"去除广告",
    event:"sendMessageToContent",
    disabled:false,
    //params:{active:"",data:""}
    params:{active:"deleteAD"}
  }
];
