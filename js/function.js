//a태그 클릭방지 이벤트
$(function(){
    $("a").on("click",function(evt){
        evt.preventDefault();
    });
});

// header
$(function(){

    function mouseOver(){
        $("header").css({
            backgroundColor:"#fff"
         });
         $("nav>.gnb>li>a").css({
            color:"#0b4da2"
         });  
         $(".sub_bg").stop().slideDown(100);
         $(".sub").stop().fadeIn(200);       
           
        $(".logo").addClass("on");
        $(".lan").addClass("on");
        $(".srch").addClass("on");
        $(".all_menu").addClass("on");
        $(".lan>a").css({color:"#00a650"})          
    }

    function mouseLeave(){
        $("header").css({
            backgroundColor:"rgba(256,256,256,0)"
         });
         $("nav>.gnb>li>a").css({
            color:"#fff"
         });
         $(".sub_bg").stop().slideUp(100); 
         $(".sub").stop().fadeOut(200); 
           
        $(".logo").removeClass("on");       
        $(".lan").removeClass("on");
        $(".srch").removeClass("on");
        $(".all_menu").removeClass("on");       
        $(".lan>a").css({color:"#fff"})   
    }

   $("header nav").on("mouseover",function(){
    mouseOver();
   });
    
   $("header nav").on("mouseleave",function(){
    mouseLeave();
   });  
    
   $(".sub_bg").on("mouseover",function(){
    mouseOver();  
   });    
    
   $(".sub_bg").on("mouseleave",function(){
    mouseLeave();        
   });     
    
    $(".other_services>li.lan").on("mouseover",function(){
        $(".lan").addClass("on");
        $(".lan>a").css({color:"#00a650"})
        $(".lan_list").stop().show();
    });
    $(".other_services>li.lan").on("mouseleave",function(){
        $(".lan").removeClass("on");
        $(".lan>a").css({color:"#fff"})        
        $(".lan_list").stop().hide();
    });   
    
    //gnb_underline
    $(function(){
        var $gnb=$(".gnb>li")

        $gnb.eq(0).on({
            "mouseenter":function(){
                $(".gnb_line").stop().css({
                    left:0,
                    opacity:1
                })
            },
            "mouseleave":function(){
                $(".gnb_line").stop().css({
                    left:-176,
                    opacity:0                
                })
            }
        });        
       
        $gnb.eq(1).on({
            "mouseenter":function(){
                $(".gnb_line").stop().css({
                    left:176,
                    opacity:1
                })
            },
            "mouseleave":function(){
                $(".gnb_line").stop().css({
                    left:-176,
                    opacity:0                
                })
            }
        });       
        
        $gnb.eq(2).on({
            "mouseenter":function(){
                $(".gnb_line").stop().css({
                    left:352,
                    opacity:1
                })
            },
            "mouseleave":function(){
                $(".gnb_line").stop().css({
                    left:-176,
                    opacity:0                
                })
            }
        });  
        
        $gnb.eq(3).on({
            "mouseenter":function(){
                $(".gnb_line").stop().css({
                    left:528,
                    opacity:1
                })
            },
            "mouseleave":function(){
                $(".gnb_line").stop().css({
                    left:880,
                    opacity:0                
                })
            }
        });        
            
        $gnb.eq(4).on({
            "mouseenter":function(){
                $(".gnb_line").stop().css({
                    left:704,
                    opacity:1
                })
            },
            "mouseleave":function(){
                $(".gnb_line").stop().css({
                    left:880,
                    opacity:0                
                })
            }
        });               
    });

    //sub_underline
    $(".sub>li").on('mouseover',function(){
        $(this).find(".line").stop().animate({
            width:"100%"
        },200);
    });
    $(".sub>li").on('mouseleave',function(){
        $(this).find(".line").stop().animate({
            width:"0"
        },200);
    });     
});

// main_slide
$(function(){
    var $indicator=$("#main_slides>.pagination>li>button");
    var $slides=$("#main_slides>.slides_container>li");
    var nowIdx=0; 

    function txt(){ 
        $slides.filter('.on').find($('.txtbox')).stop().css({
            opacity:1,
            marginTop:-160
        });  
        $slides.filter('.on').find($('.go')).stop().css({
            opacity:1,
            marginLeft:-625
        }); 
        $slides.filter('.on').find($('.bg')).stop().css({
            opacity:0.9,
            left:-560
        });                  
    };
    
    function reset(){ 
        $slides.filter('.on').find($('.txtbox')).stop().css({
            marginTop:-250,
            opacity:0
        });
        $slides.filter('.on').find($('.go')).stop().css({
            marginLeft:-750,
            opacity:0
        });       
        $slides.filter('.on').find($('.bg')).stop().css({
            left:-1760,
            opacity:0
        });              
    };

    
    function slideMove(){
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        $slides.filter('.on').stop().fadeOut(1000).removeClass('on'); //이전 슬라이드 사라짐
        $slides.eq(nowIdx).stop().fadeIn(1000).addClass('on'); //이번에 나타날 슬라이드가 나타남 
    }
    
    function nextIdx(){
        if(nowIdx<2){
            nowIdx++;
        }else{
            nowIdx=0;
        }
    }

    txt();
    //autoplay
    intervalKey=setInterval(function(){
        reset();
        nextIdx();
        slideMove();
        txt();        
    },5000);

    //오류생김. 수정 후 삽입
    // $indicator.on('click',function(evt){
    //     evt.preventDefault();
    //     nowIdx=$indicator.index(this);
    //     slideMove();
    // });
    
});

// #news-slide
$(function(){
    $(".news_wrap>.slides>.slides_container>li").on("mouseenter",function(){
        $(this).children(".txtbox").stop().animate({
            bottom:0
        });
    });
    $(".news_wrap>.slides>.slides_container>li").on("mouseleave",function(){
        $(this).children(".txtbox").stop().animate({
            bottom:-185
        });
    });   
    
    var $prev=$(".news_wrap>.slides>.prev_btn");
    var $next=$(".news_wrap>.slides>.next_btn");
    var $container=$(".news_wrap>.slides>.slides_container")
    var nowIdx=0
    
    
    $next.on("click",function(){
        
        $container.stop().animate({
            marginLeft:-450
        },200,  function(){
            $container.children('li').eq(0).appendTo($container);
            $container.css('margin-left', 0);
        });
    });
    
    $prev.on("click",function(){
        
        $container.stop().animate({
            marginLeft:450
        },200,  function(){
            $container.children('li').last().prependTo($container);
            $container.css('margin-left', 0);
        });
    });    
});

//cont banner
$(function(){
    var $container=$(".news_wrap>.news_bottom>.cont>.banner>ol");
    var nowIdx=0;

    setInterval(function(){
        //다음번 인덱스번호 추출
        if(nowIdx<1){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        //컨테이너 이동
        $container.stop().animate({
            left:-650*nowIdx
        });
    },3000);
    
});


//all-menu
// $(function(){
//    var $btn=$(".all_menu>a");
//    var $bg=$(".all_menu_bg");
//    var $menuList=$('.all_menu_box');

//    $btn.on("click",function(){
//     $bg.stop().slideToggle();
//     $menuList.stop().slideToggle();

//     if($("body").hasClass("menu_on")){
//         $("body").removeClass("menu_on");
//         // $bg.stop().fadeOut(600);
//         // $menuList.stop().fadeOut(600);
//     }else{
//         $("body").addClass("menu_on");
//         // $bg.stop().fadeIn(600);
//         // $menuList.stop().fadeIn(600);
//     };
//    });

// });

//all_menu
$(function(){
    var $bg=$(".all_menu_bg");    
    var $menuList=$('.all_menu_box');
    var Menu = {
  
        el: {
          ham: $('.all_menu'),
          menuTop: $('.menu-top'),
          menuMiddle: $('.menu-middle'),
          menuBottom: $('.menu-bottom')

        },
        
        init: function() {
          Menu.bindUIactions();
        },
        
        bindUIactions: function() {
          Menu.el.ham
              .on(
                'click',
              function(event) {
              Menu.activateMenu(event);
              event.preventDefault();
              $bg.stop().slideToggle();
              $menuList.stop().slideToggle();
                if($("body").hasClass("menu_on")){
                    $("body").removeClass("menu_on");
                    // $bg.stop().fadeOut(600);
                    // $menuList.stop().fadeOut(600);
                }else{
                    $("body").addClass("menu_on");
                    // $bg.stop().fadeIn(600);
                    // $menuList.stop().fadeIn(600);
                };              
            }
          );
        },
        
        activateMenu: function() {
          Menu.el.menuTop.toggleClass('menu-top-click');
          Menu.el.menuMiddle.toggleClass('menu-middle-click');
          Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
        }
      };
      
      Menu.init();
});