// content.js 接收
chrome.runtime.onMessage.addListener((request, sender, senderResponse) => {
	console.log(request.data)
})