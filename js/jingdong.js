$(function(){


  var aa=jQuery.noConflict();
  aa("img").lazyload({
    threshold:400,
    event:'scroll',
    effect:'fadeIn',
  });
  // banner 动画
  function nodeloubanner(one){
  var banner=one;
  var imgs=$(".imgs",banner);
  var lis=$(".circleone",banner);
  var left=$(".left",banner)[0];
  var right=$(".right",banner)[0];
  var flag=true;
  var n=0;
  var t=setInterval(move,2500);
  function move(){
    if(n>=imgs.length){
            n=0;
    }
    for(var i=0;i<imgs.length;i++){
      for(var j=0;j<imgs.length;j++){
        lis[j].style.background="#3E3E3E";
        animate(imgs[j],{opacity:0},600);
      }
      lis[n].style.background="#AE1D23";
      animate(imgs[n],{opacity:1},600,function(){
        
      });
        }
        n++;
    }
    banner.onmouseover=function(){
      clearInterval(t)
      left.style.display="block";
      right.style.display="block";
    }
    banner.onmouseout=function(){
      t=setInterval(move,2500);
      left.style.display="none";
    right.style.display="none";
    }
    for(var i=0;i<lis.length;i++){
       lis[i].index=i;
         lis[i].onmouseover=function(){
          for(var i=0;i<lis.length;i++){
            lis[i].style.background="#3E3E3E";
            animate(imgs[i],{opacity:0},600)
          }
          this.style.background="#AE1D23";
          animate(imgs[this.index],{opacity:1},600);
          n=this.index
         }
    }
    right.onclick=function(){
         move();
    }
    left.onclick=function(){
      if(n<0){
            n=imgs.length-1;
    }
    for(var i=0;i<imgs.length;i++){
      for(var j=0;j<imgs.length;j++){
        lis[j].style.background="#3E3E3E";
        animate(imgs[j],{opacity:0},600);
      }
      lis[n].style.background="#AE1D23";
      animate(imgs[n],{opacity:1},600);
        }
        n--;
    }
  
}
nodeloubanner($(".inner-banner")[0])
//第一楼 
function nodeloutwo(two){
    var parent=two;
    var bannera=$(".fsdp1",parent)[0];
    var imgsa=$(".fsdp-lunbo");
    var lisa=$(".circlefirstone1",bannera);
    var flaga=true;
    var lefta=$(".firstfloor-left",bannera)[0];
    var righta=$(".firstfloor-right",bannera)[0];
    var widtha=parseInt(getStyle(bannera,"width"));
    var na=0;
    var nexta=0;
    var ta=setInterval(movea,2000);
    function movea(obj){
      if(flaga==false){
        return;
      }
      flaga=false;
      obj=obj||"left";
      if(obj=="left"){
        nexta=na+1;
        if(nexta>=imgsa.length){
          nexta=0
        }
        imgsa[nexta].style.left=widtha+"px";
        animate(imgsa[na],{left:-widtha},600);
      }else if(obj=="right"){
        nexta=na-1;
        if(nexta<0){
          nexta=imgsa.length-1
        }
        imgsa[nexta].style.left=-widtha+"px";
        animate(imgsa[na],{left:widtha},600);
      }
      animate(imgsa[nexta],{left:0},600,function(){
        flaga=true;
      })
      lisa[na].style.background="#3E3E3E";
      lisa[nexta].style.background="#B61B1F";
      na=nexta;
    }
  bannera.onmouseover=function(){
    clearInterval(ta);
  }
  bannera.onmouseout=function(){
    ta=setInterval(movea,2000);
  }
  righta.onclick=function(){
    movea("left")
  }
  lefta.onclick=function(){
    movea("right")
  }
  for(var i=0;i<lisa.length;i++){
    lisa[i].index=i;
    lisa[i].onmouseover=function(){
      if(flaga==false){
        return;
      }
      flaga=false;
      if(na>this.index){
        imgsa[this.index].style.left=-widtha+"px";
        animate(imgsa[na],{left:widtha},600);
        }else if(na<this.index){
        imgsa[this.index].style.left=widtha+"px";
        animate(imgsa[na],{left:-widtha},600);
      }
      animate(imgsa[this.index],{left:0},600,function(){
        flaga=true
      });
      lisa[na].style.background="#3E3E3E";
      lisa[this.index].style.background="#B61B1F";
      na=this.index
    }
  }
}
nodeloutwo($(".leftmove")[0])
// 第三楼
//第二楼 
var xiaolunbo=function(obj){
  var fashion=obj;
  var firstbox=$('.firstbox',fashion);
  var Circle_li=$('.circle-li',fashion);
  var box=$('.food-right-two')[0];
  var width=parseInt(getStyle(box,"width"));
  var foodleft=$('.foodleft',fashion)[0];
  var foodright=$('.foodright',fashion)[0];
  // console.log(firstbox.length)
  var now=0;
  var next=0;
  var flag=true;
  var T=setInterval(fun,2000);
  function fun(){
    next=now+1;
    if(next>=firstbox.length){
      next=0;
    }
    firstbox[next].style.left=width+'px';
    
    animate(firstbox[now],{left:-width},600);
    animate(firstbox[next],{left:0},600);
    Circle_li[now].style.background='#3E3E3E';
    Circle_li[next].style.background='#B61B1F';
    now=next;
  }

  firstbox.onmouseover=function(){
    clearInterval(T);
  }
  firstbox.onmouseout=function(){
    T=setInterval(fun,2000)
  }
  foodright.onclick=function(){
    fun();
  }
  foodleft.onclick=function(){
    next=now-1;
    if(next<0){
      next=firstbox.length-1;
    }
    firstbox[next].style.left=-width+'px';
    animate(firstbox[now],{left:width},600);
    animate(firstbox[next],{left:0},600);
    Circle_li[now].style.background='#3E3E3E';
    Circle_li[next].style.background='#B61B1F';
    now=next;
  }
  for(i=0;i<Circle_li.length;i++){
    Circle_li[i].index=i;
    Circle_li[i].onclick=function(){
      if(this.index>now){
        firstbox[this.index].style.left=width+'px';
        animate(firstbox[now],{left:-width},600);
      }else if(this.index<now){
        firstbox[this.index].style.left=-width+'px';
        animate(firstbox[now],{left:width},600);
      }
      animate(firstbox[this.index],{left:0},600);
      Circle_li[now].style.background='#3E3E3E';
      Circle_li[this.index].style.background='#B61B1F';
      now=this.index;
      next=this.index;
    }
  }
}
xiaolunbo($('.food-right-two')[0]);
xiaolunbo($('.sport')[0]);
xiaolunbo($('.sport')[1]);
xiaolunbo($('.sport')[2]); 
xiaolunbo($('.sport')[3]);
// 楼层跳转
  var left_hidden=$(".build-floor")[0];

  var hidden=$(".floor-build")
  
  var first=$(".floor-build-first")[0]
  var now;
  var build=$(".second-floor")[0];
  var first_bul=build.offsetTop
  var qua=$(".floor-banner")[0].offsetTop
  var sale=$(".everyday-special")[0].offsetTop
  var two_building=$(".second-floor")
  var first_word=$(".floor-build-word-f")[0]
  var two_word=$(".floor-build-word")
  var first_hidden=$(".floor-build-first-hidden-f")[0]
  var two_hidden=$(".floor-build-first-hidden")

  for(var i=0;i<two_building.length;i++){
    two_building[i].h=two_building[i].offsetTop
  }

  window.onscroll=function(){
      var obj=document.body.scrollTop?document.body:document.documentElement;
      var t=obj.scrollTop;
          if(t>=qua){                           
                    left_hidden.style.display="block"
              

              }
              if(t<qua){                            
                    left_hidden.style.display="none"
              }

              if(t>=sale){  

                    left_hidden.style.display="none"
              }
             for(var i=0;i<two_building.length;i++){
              if(t>=two_building[i].h-200){
                first.style.color="#625351"
                for(var j=0;j<hidden.length;j++){       
                  hidden[j].style.color="#625351"                 
                }
                  hidden[i].style.color="#C81623"

              }
             }
             first.onmouseover=function(){
              first.style.backgroundColor="#C81623"
              first.style.color="#fff"
              first_word.style.display="none"
              first_hidden.style.display="block"


             }
              first.onmouseout=function(){
              first.style.backgroundColor="#fff"
              first.style.color="#625351"
              first_word.style.display="block"
              first_hidden.style.display="none"
             }
             first.onclick=function(){
              animate(document.documentElement,{scrollTop:first_bul},500)
              animate(document.body,{scrollTop:first_bul},500)
             

                  
             }
             for( var i=0;i<hidden.length;i++){
              hidden[i].index=i;  
              hidden[i].onclick=function(){
                for(var i=0;i<two_building.length;i++){
                  animate(document.documentElement,{scrollTop:two_building[this.index].h},500)
                  now=this.index;
                  animate(document.body,{scrollTop:two_building[this.index].h},500)
                  now=this.index;

                }
              }
              hidden[i].onmouseover=function(){
                hidden[this.index].style.color="#fff"
                hidden[this.index].style.backgroundColor="#C81623"
                two_word[this.index].style.display="none"
                two_hidden[this.index].style.display="block"
                now=this.index;
                
              }
              hidden[i].onmouseout=function(){
                hidden[this.index].style.color="#625351"
                hidden[this.index].style.backgroundColor="#fff"
                two_word[this.index].style.display="block"
                two_hidden[this.index].style.display="none"
                now=this.index;
              }
             }
    }




   // 今日推荐
        var bao=$(".baohidden")[0];
        var today=$(".tody-hidden")[0];
        var today_xiao=$(".today");
        console.log(today_xiao);
        var width_kuan=today_xiao[0].offsetWidth;
        var left_zuo=$(".baohidden-left")[0]
      var right_you=$(".baohidden-right")[0]
      
      bao.onmouseover=function(){
        left_zuo.style.display="block"
        right_you.style.display="block"
      }     
      bao.onmouseout=function(){
        left_zuo.style.display="none"
        right_you.style.display="none"
      }     
      right_you.onclick=function(){
        animate(today,{left:-width_kuan},600,function(){
            var first=getFirstChild(today);
            today.appendChild(first);
            today.style.left=0+"px"
           })
        
      }
      left_zuo.onclick=function(){
        var last=getLastChild(today);
          var first=getFirstChild(today);
          insertBefore(last,first)
           today.style.left=-width_kuan+"px"
              animate(today,{left:0},600)


      } 
// eight
        // 八楼
    var  returnTop=$(".fixed-left")[6];
    returnTop.onclick=function(){
                  animate(document.body,{scrollTop:0},400)
                  animate(document.documentElement,{scrollTop:0},400)

    }
      // 红线
    // 小下拉
      var top_left=$('.top-left')[0];
      var areamini_list=$('.areamini-list')[0];
      var fore3=$(".fore3")[0];
      var please_login=$(".please-login")[0];
      var fore33=$(".fore3")[1];
      var attention_jd=$('.attention-jd')[0];
      var fore333=$(".fore3")[2];
      var curtomer=$(".customer")[0];
      var fore3333=$(".fore3")[3];
      var web_navigation=$(".web-navigation")[0];
      var fore4=$(".fore4")[0];
      var phonejd_select=$(".phonejd-select")[0]
      hover(top_left,function(){
        top_left.style.background="#fff"
        areamini_list.style.display="block"
      },function(){
        top_left.style.background="transparent"
        areamini_list.style.display="none"
      })
      hover(fore3,function(){
        fore3.style.background="#fff"
        please_login.style.display="block"
      },function(){
        fore3.style.background="transparent"
        please_login.style.display="none"
      })
      hover(fore33,function(){
        fore33.style.background="#fff"
        attention_jd.style.display="block"
      },function(){
        fore33.style.background="transparent"
        attention_jd.style.display="none"
      })
      hover(fore333,function(){
        fore333.style.background="#fff"
        curtomer.style.display="block"
      },function(){
        fore333.style.background="transparent"
        curtomer.style.display="none"
      })
      hover(fore3333,function(){
        fore3333.style.background="#fff"
        web_navigation.style.display="block"
      },function(){
        fore3333.style.background="transparent"
        web_navigation.style.display="none"
      })
      hover(fore4,function(){
        fore4.style.background="#fff"
        phonejd_select.style.display="block"
      },function(){
        fore4.style.background="transparent"
        phonejd_select.style.display="none"
      })


      function bannerSelect(num,num1){
        var leftsmall=$(".leftsmall")[num];
        var leftsmall_select=$(".leftsmall-select")[num1];
        hover(leftsmall,function(){
          leftsmall_select.style.display="block"
        },function(){
          leftsmall_select.style.display="none";
        })
      }
      bannerSelect(0,0);
      bannerSelect(1,1);
      bannerSelect(2,2);
      bannerSelect(3,3);
      bannerSelect(4,4);
      bannerSelect(5,5);
      bannerSelect(6,6);
      bannerSelect(7,7);
      bannerSelect(8,8);
      bannerSelect(9,9);
      bannerSelect(10,10);
      bannerSelect(11,11);
      bannerSelect(12,12);
      bannerSelect(13,13);
      bannerSelect(14,14);   



      function onefloor(nub){
        var rightkindwords=$(".rightkindwords",nub);
        var contentright=$(".contentright",nub); 
        var hiddenbox=$(".hiddenbox",nub);
           for(var I=0;I<rightkindwords.length;I++){
                  rightkindwords[I].index=I;
                  rightkindwords[I].onmouseover=function(){
                for(var J=0;J<rightkindwords.length;J++){
                  hiddenbox[J].className="hiddenbox"
                  rightkindwords[J].className="rightkindwords";
                  contentright[J].style.display='none';
                }
                hiddenbox[this.index].className="hiddenbox hiddenbox-first"
                rightkindwords[this.index].className="rightkindwords rightkindwords-first";
                contentright[this.index].style.display="block"         
               }           
          }
    }
      onefloor($(".second-floor")[9])
      onefloor($(".second-floor")[0])
      onefloor($(".first-floor")[0]) 
      onefloor($(".second-floor")[1]) 
      onefloor($(".second-floor")[2]) 
      onefloor($(".second-floor")[3]) 
      onefloor($(".second-floor")[4]) 
      onefloor($(".second-floor")[5])
      onefloor($(".second-floor")[6])
      onefloor($(".second-floor")[7])
      onefloor($(".second-floor")[8])

// 三楼轮播
  // 楼层lunbo
  function xiaolunbo2(obj){
    var banner=obj;
    var width3=parseInt(getStyle(banner,'width'));
    var img3=$('.threehouse',obj);
    var lis3=$('.Circle-li',obj);
    var sanlouleft=$('.sanlouleft',obj)[0];
    var sanlouright=$('.sanlouright',obj)[0];
    var n=0;
    var next=0;
    var flag=true;
    var t=setInterval(move,2000);
    function move(type){
      var type=type||'right';
      if(!flag){
        return;
      }
      flag=false;
      if(type=='right'){
        next=n+1;
        if(next>=img3.length){
          next=0;
        }
        img3[next].style.left=width3+'px';
        animate(img3[n],{left:-width3},600,Tween.Quad.easeInOut);
      }else if(type=='left'){
        next=n-1;
        if(next<0){
          next=img3.length-1;
        }
        img3[next].style.left=-width3+'px';
        animate(img3[n],{left:width3},600,Tween.Quad.easeInOut);
      }
      animate(img3[next],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
      lis3[n].style.background="#3E3E3E";
      lis3[next].style.background='#B61B1F';
      n=next;
    }
    banner.onmouseover=function(){
      clearInterval(t)
    }
    banner.onmouseout=function(){
      t=setInterval(move,2000);
    }
    sanlouleft.onclick=function(){
      move('left')
    }
    sanlouright.onclick=function(){
      move('right');
    }
    for(var i=0;i<lis3.length;i++){
      lis3[i].index=i;
      lis3[i].onclick=function(){
        if(this.index<n){
          if(!flag){
            return;
          }
          flag=false;
          img3[this.index].style.left=-width3+'px';
          animate(img3[n],{left:width3},600,Tween.Quad.easeInOut);
          
        }else if(this.index>n){
          if(!flag){
            return;
          }
          flag=false;
          img3[this.index].style.left=width3+'px';
          animate(img3[n],{left:-width3},600,Tween.Quad.easeInOut);
        }
        animate(img3[this.index],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
        lis3[n].style.background="#3E3E3E";
        lis3[this.index].style.background='#B61B1F';
        n=this.index;
        next=this.index;
      }
      
    }
  }
  xiaolunbo2($('.silid-top')[0]);
  xiaolunbo2($('.silid-top')[1]);
  xiaolunbo2($('.silid-top')[2]);
  xiaolunbo2($('.silid-top')[3]);
  xiaolunbo2($('.silid-top')[4]);
  xiaolunbo2($('.silid-top')[5]);
  xiaolunbo2($('.silid-top')[6]);

      // 固定定位
        var middleone=$(".middleone");
        var onmousefirst=$(".onmousefirst");
        var onmouse=$(".onmouse");        // 
        var fixed_left=$(".fixed-left");
        for(var i=0;i<middleone.length;i++){
          middleone[i].index=i;
          middleone[i].onmouseover=function(){
            for(var i=0;i<middleone.length;i++){
              onmousefirst[i].style.display="block";
              onmouse[i].style.display="none";
            }
              onmousefirst[this.index].style.display="none";
              onmouse[this.index].style.display="block";
              animate(fixed_left[this.index],{right:33},400)

          }
          middleone[i].onmouseout=function(){
              onmousefirst[this.index].style.display="block";
              onmouse[this.index].style.display="none";
              animate(fixed_left[this.index],{right:-35},400)  
          }
        }
      
});