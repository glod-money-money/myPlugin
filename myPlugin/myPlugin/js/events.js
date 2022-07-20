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