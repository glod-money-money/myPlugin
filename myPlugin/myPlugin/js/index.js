(function(){
  var $ = function(id){
    return document.getElementById(id)
  }

  var create = function (opt){
    let myLi = document.createElement('li');
    myLi.innerText = `${opt.name || opt.event ||'默认按钮'}`;
    myLi.className = "btn_list";
    myLi.clickFun = `${opt.event}`;
    if(!opt.disabled){
      myLi.addEventListener('click',function(){
        if(opt.event && window[opt.event]){
          let params = {}
          if(opt.params){
            params = Object.assign({},params,opt.params)
          }
          window[opt.event](params);       
        }else{
          // alert("请检查配置的方法名是否正确")
          window.errorMessage("请检查配置的方法名是否正确!")
        }
      })
    }else{
      myLi.classList.add('btn_disabled')
    }
    return myLi;
  }

  myData.forEach(item => {
    $("btn_list").appendChild(create(item));
})
})()