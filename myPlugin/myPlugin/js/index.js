(function(){
  var $ = function(id){
    return document.getElementById(id)
  }

  var create = function (opt){
    let myLi = document.createElement('li');
    myLi.innerText = `${opt.name || opt.event ||'默认按钮'}`;
    myLi.className = "btn_list";
    myLi.clickFun = `${opt.event}`;
    myLi.addEventListener('click',function(){
      if(opt.event && window[opt.event]){
        window[opt.event]();       
      }else{
        alert("请检查配置的方法名是否正确")
      }
    })
    return myLi;
  }

  myData.forEach(item => {
    $("btn_list").appendChild(create(item));
})
})()