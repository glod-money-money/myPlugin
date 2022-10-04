// content.js 接收
chrome.runtime.onMessage.addListener((request, sender, senderResponse) => {
	try{
		sendMsg(request);
		window[request.active](request);
	}catch{
		console.log('程序出错')
	}
});

function deleteAD(){
	let adout = document.getElementsByClassName("container")[0];
    let ads = adout.querySelectorAll("a");
    let adf = adout.querySelectorAll(".first")
    ads.forEach(item=>{
        if(item.href.indexOf("qihuyingshi18.com")<0){
            item.remove();
        }
    })
    adf.forEach(item=>{
        if(item.getElementsByTagName("a").length<1){
            item.remove();
        }
    })
}

function sendMsg(request){
	console.log("通信消息：",request.active,request.data)
}