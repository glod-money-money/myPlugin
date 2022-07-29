//错误提示
function errorMessage(msg){
    window.alert(msg);
}

//打开github1s
function goToGitHub1s(){    
    chrome.tabs.getSelected(null, function (tab) { // 先获取当前页面的tabID
        let url =tab.url;
        if(url.indexOf('//github') >= 0){
            url = url.replace('//github',"//github1s");
            window.open(url)
        }
    });
}

//打开百度
function openBaidu(){
    window.open("http://www.baidu.com");
}

//消息通讯-content
function sendMessageToContent () {
    let message = {action: 'test', data: '你好，我来自popup！'}
	chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, message)
	})
}

