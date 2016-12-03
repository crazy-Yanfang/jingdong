//1.解决类名的兼容函数
//classname: 所要找的类名
//father: 通过父元素来找这个类名

function getClass(classname,father){
 			father=father||document   //"或"运算,获取默认值
  	if(father.getElementsByClassName){		//检测浏览器类型
  		return father.getElementsByClassName(classname)		//火狐,谷歌
  		}
  	else{	//IE浏览器
  		var bq=father.getElementsByTagName("*")		//获得所有标签
  		var arr=[]	//新建数组
  		for(var i=0;i<bq.length;i++){	//遍历所有标签
  			if(check(bq[i].className,classname)){	//if语句引入判断类名函数
  				arr.push(bq[i])		//将标签赋值给数组
  				} 
  			}	return arr	//返回数组内标签
 		}
}

function check(bq,classname){
  		var newarr=bq.split(" ")   //将标签多类名拆分成数组
  		  for(var i=0;i<newarr.length;i++){	  
  		  	    if(newarr[i]==classname){	//遍历数组元素与类名比较
  		  	    	return true	  //返回为真
  		}
 	} return false	//返回为假
}

/*******************************************/
//2.纯文本的兼容函数(获取与设置)
//obj:对象
//val: 要设置的内容(纯文字) 

function getText(obj,val){
  if(val!=undefined){	//val不是空值,将val赋值给obj
  		if(obj.textContent){	//FF,chrome
  			obj.textContent=val;
  		}else{	  //IE
  			obj.innerText=val;
  		}

  }else{	//val是空值,获取obj的内容
  		if(obj.textContent){	//FF,chrome
  			return obj.textContent;
  		}else{	  //IE
  			return obj.innerText;
  		}
  }
}

/**********************************************/
//3. 获取样式的兼容函数
//obj: 对象
//attr: 属性

function getStyle(obj,attr){
  if(obj.currentStyle){
      return parseInt(obj.currentStyle[attr])
      //[attr]适用于对象的属性名中有引号出现
      //parseInt转换成数字,方便运算
  }else{
      return parseInt(getComputedStyle(obj,null)[attr])
  }
}

/**************************************************/
//4.获取元素的兼容函数
//selector:表示选择器，与css的选择器一样
//father: 父容器
/*$(".box")
$("#box")
$("div")*/
function $(val,obj){
    if(typeof val=='string'){
        var obj=obj||document;
        val=val.replace(/^\s*|\s*$/g,'')
        if(val.charAt(0)=='#'){
              return document.getElementById(val.slice(1))
        }else if(val.charAt(0)=='.'){
              return getClass(val.slice(1),obj)
        }else if(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/.test(val)){
          return obj.getElementsByTagName(val)
        }else if(/^<[a-zA-Z][a-zA-Z0-9]{0,10}>$/.test(val)){
          return document.createElement(val.slice(1,-1))
        }
    }else if(typeof val=='function'){
      window.onload=function(){
        val();
      }
    }
}
//兼容性问题
	//获取子节点
	function getChilds(obj,type){
		//初始化type
	        var type=type||"no";
	        //获取子节点的集合
	        var kids=obj.childNodes;
	        //定义一个空数组
	        var arr=[];
	        //循环遍历
	        for(var i=0;i<kids.length;i++){
	        	//如果子节点里面没有空文本的情况下
	        	if(type=="no"){
	        		//如果kids[i]的类型值为1时，
					if(kids[i].nodeType=="1"){
						//把kids[i]赋到arr数组里面
	                arr.push(kids[i]);}
 				//如果子节点里面有空字符
	             }else if(type=="yes"){
	             	//如果kids[i]的类型值为一或者类型值为三并且它的文本内容的空格用空字符代替
	             	if(kids[i].nodeType=="1"||kids[i].nodeType=="3"&&kids[i].nodeValue.replace(/^\s*|\s*$/g,"")){
                      arr.push(kids[i]);
	             	}
	             }
	        }
	        return arr;
	}

//获取第一个子节点
function getFirst(obj,type){
  	var type=type||"no";
  	return getChilds(obj,type)[0];
}
//获取最后一个子节点
function getLast(obj,type){
    var type=type||"no";
    var childs=getChilds(obj,type);
    return childs[childs.length-1];
}
//获取第n个子节点
function getNub(obj,n,type){
    var type=type||"no";
    var childs=getChilds(obj,type)[0];
    if(n>childs.length||n<1){
       return false;
    }
    return childs[n-1];
}
//取下一个兄弟节点
function getNext(obj,type){
      var type=type||"no";
      var next=obj.nextSibling;
      if(next===null){
          return false;
      }
      if(type=="no"){
          while(next.nodeType==3||next.nodeType==8){
            next=next.nextSibling;
            if(next==null){
                return false;
            }
          }
          return next;
      }else if(type=="yes"){
          while(next.nodeType==3&&!next.nodeType.replace(/^\s*|\s*$/g,"")){
            next=next.nextSibling;
            if(next==null){
                return false;
            }
          }
          return next;
      }
}
//取上一个兄弟节点
function getPrevious(obj,type){
      var type=type||"no";
      var previous=obj.previousSibling;
      if(previous===null){
          return false;
      }
      if(type=="no"){
          while(previous.nodeType=="3"||previous.nodeType=="8"){
            previous=previous.previousSibling;
            if(previous==null){
                return false;
            }
          }
          return previous;
      }else if(type=="yes"){
          while(previous.nodeType=="3"&&!previous.nodeType.replace(/^\s*|\s*$/g,"")){
            previous=previous.previousSibling;
            if(previous==null){
                return false;
            }
          }
          return previous;
      }
}
//插入到什么之前
function insertBefore(obj,beforeObj){
      var parent=beforeObj.parentNode;
      return parent.insertBefore(obj,beforeObj);
}
//插入到什么之后
function insertAfter(obj,afterObj){
      var parent=afterObj.parentNode;
      var next=getNext(afterObj,"yes");
      if(!next){
        parent.appendChild(obj);
      }else{
        parent.insertBefore(obj,next);
      }     
}
//添加事件兼容函数
function addEvent(obj,event,fun){
  if(obj.addEventListener){//FF,Chrome
   return  obj.addEventListener(event,fun,false)
  }else{
    //IE
   return obj.attachEvent("on"+event,fun)
  }
}
//删除绑定事件兼容函数
function deleteEvent(obj,event,fun){
  if(obj.removeEventListener){
    return  obj.removeEventListener(event,fun,false) 
  }else{
    return obj.detachEvent("on"+event,fun);
  }
}

// function mouseWheel(obj,down,up){
//    if(obj.attachEvent){
//       obj.attachEvent("onmousewheel",scrollFun,);
//    }else(){
//       obj.addEventListener("mousewheel",scrollFun,false);
//       obj.addEventListener("DOMMouseScroll",scrollFun,false);
//    }
//    function scrollFun(e){
//         var e=e||window.event;
//         var nub=e.wheelDelta||e.detail;
//         if(nub==120||nub==-3){
//           up.call(obj);
//         }else if(nub==-120||nub==3){
//           down.call(obj);
//         }
//    }
// }