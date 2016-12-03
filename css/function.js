//获取属性的兼容性问题
function getStyle(a1,a2){
    if(a1.currentStyle){
    	return a1.currentStyle.a2
    }else{
    	return getComputedStyle(a1,null).a2;
    }
}

//判断操作内容的兼容性
function getText(a){
	if(a.innerText){
     return a.innerText;
	}else(){
     return a.textContent;
	}
}