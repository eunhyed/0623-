$(document).ready(function(){


let sliding = setInterval( leftMove ,2000 );

function leftMove(){
        $(".controller button").prop("disabled" , true);//사용안됨
        clearInterval(sliding);//자동기능 삭제
        $(".imgslide").stop().animate({left: "-2000px"},1500 ,function(){
           $(".imgslide").append( $(".imgslide>a:first-child"));
            $(".imgslide").css("left", "-1000px");           
            $(".controller button").prop("disabled" , false);//사용가능
            sliding = setInterval( leftMove ,2000 );//자동기능 추가
        });
}

function rightMove(){    
    $(".controller button").prop("disabled" , true);//사용안됨
    clearInterval(sliding);//자동기능 삭제
    $(".imgslide").stop().animate({left: "0px"},1500 ,function(){
       $(".imgslide").prepend( $(".imgslide>a:last-child"));
        $(".imgslide").css("left", "-1000px");
        $(".controller button").prop("disabled" , false);//사용가능
        sliding = setInterval( leftMove ,2000 );  //자동기능 추가      
    });
}

//왼쪽방향 화살표 클릭하면 오른쪽방향으로 이동한다.
$(".prev").click(function(){   
    rightMove();
});

//오른쪽방향 화살표 클릭하면 왼쪽방향으로 이동한다.
$(".next").click(function(){    
    leftMove();
});




//상단메뉴에 마우스를 대면 서브메뉴 내려온다.
    $(".navia1").mouseenter(function(){
    $(".submenu1").stop().slideDown();
    });

 //상단메뉴에 마우스를 치우면 서브메뉴 올라간다.
 $(".navi").mouseleave(function(){
    $(".submenu1").stop().slideUp();
});

//상단메뉴에 마우스를 대면 서브메뉴 내려온다.
$(".navia2").mouseenter(function(){
    $(".submenu2").stop().slideDown();
    });

 //상단메뉴에 마우스를 치우면 서브메뉴 올라간다.
 $(".navi").mouseleave(function(){
    $(".submenu2").stop().slideUp();
});

//상단메뉴에 마우스를 대면 서브메뉴 내려온다.
$(".navia3").mouseenter(function(){
    $(".submenu3").stop().slideDown();
    });

 //상단메뉴에 마우스를 치우면 서브메뉴 올라간다.
 $(".navi").mouseleave(function(){
    $(".submenu3").stop().slideUp();
});

//상단메뉴에 마우스를 대면 서브메뉴 내려온다.
$(".navia4").mouseenter(function(){
    $(".submenu4").stop().slideDown();
    });

 //상단메뉴에 마우스를 치우면 서브메뉴 올라간다.
 $(".navi").mouseleave(function(){
    $(".submenu4").stop().slideUp();
});

});