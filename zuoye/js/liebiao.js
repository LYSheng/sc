$(function () {
$('.fdj').on("click",function () {
    $('a:not(".logo")','.dh').addClass("active");
    // $('.btn').css({display:'block'})
    $('.btn').show(0);
    $('.searchbox').show(0);
    $('.search').addClass("scale");
    $('li','.search-xia').each(function (i,obj) {
        $(obj).addClass('dong').css({transitionDelay:i*.5+'s'});
    });

});
    $('.btn').on('click',function () {
        $('a:not(".logo")','.dh').removeClass("active");
        $('.searchbox').toggle();
        $('.btn').toggle(0);
        $('.search').removeClass("scale");
        $('li','.search-xia').removeClass('dong')
    });
var navMin=$('.nav-min');
var dhH=$('.dh',navMin).height();
var gwd=$('.gwd',navMin);
var dhxiaL=$('.dhxiaL',navMin);
var lis=$('li',navMin);
var hbb=$('.hbb',navMin);
var ch=$(window).height();
var XW=ch-dhH;
var flag=true;
hbb.click(function () {
    if(flag) {
        flag = false;
        hbb.addClass('active');
        dhxiaL.addClass('opc').css({height: ch + 'px'});
        gwd.addClass('late');
        lis.each(function (i, k) {
            $(k).addClass('hei').css({transformDelay: i * .6 + 's'});
        })
    }else{
        flag=true;
        hbb.removeClass('active');
        dhxiaL.removeClass('opc');
        gwd.removeClass('late');
        lis.removeClass('hei')
    }

});
//    轮播图
var banner=$('.banner');
var outs=$('.outs',banner);
var leftJ=$('.leftJ',banner);
var rightJ=$('.rightJ',banner);
var LBbox=$('.LBbox',banner);
var flagss=true;
outs.css({left:100+'%'});
    var index=0;
    var next=0;
    $(outs).eq(index).css({left:0});
    var t=setInterval(aa,2000);

    function  aa() {
        next++;
        if(next==outs.length){
            next=0;
        }
        outs.each(function (i,g) {
            if (i==index){
                $(g).css({
                    transition:"left "+600+"ms",
                    left:-300+"px",
                    zIndex:1
                });
                $('.rogw',g).css({
                    transition:"transform "+600+"ms "+100+"ms",
                    transform:"scale("+0.6+","+0.6+") ",
                    zIndex:1
                })
            }else if(i==next){
                $(g).css({
                    transition:"left "+800+"ms ",
                    left:0,
                    zIndex:2
                })
            }else{
                $(g).css({
                    transition:"left "+800+"ms",
                    left:100+"%",
                    zIndex:0
                });
                $('.rogw',g).css({
                    transition:"transform "+800+"ms",
                    transform:"scale("+1+")",
                    zIndex:0
                })
            }
        });
        $('div',LBbox).eq(index).removeClass('hot');
        $('div',LBbox).eq(next).addClass('hot');
        index=next;
    }

    banner.hover(
        function () {
        clearInterval(t)
    },function () {
            t=setInterval(aa,2000);
    }
    );

    $('a',rightJ).click(function () {
        aa()
    });
    $('a',leftJ).click(function () {
        bb()
    });
function bb() {
    // var xian=0;
    // var xia=0;
    // outs.css({left:-100+'%',zIndex:1});
    // outs.eq(index).css({left:0,zIndex:2})
    next--;
    if (next<0) {
        next=outs.length-1;
    }
    // ban[next].style.left=-widths+'px';
    outs.eq(next).css({left:100+"%"})
    outs.each(function (i,m) {
        if(i==index){
            $(m).css({left:100+"%",
                zIndex:1

            })
        }else if(i==next){
            $(m).css({
                left:0,
                zIndex:2
            });
            $('.rogw',m).css({
                transform:"scale("+0.6+","+0.6+")",
                zIndex:2
            })
        }else{
            $(m).css({left:-100+"%"})
            $('.rogw',m).css({
                transform:"scale("+1+")",
                zIndex:0
            })
        }

        index=next;

    })

}
    var djj=$('.dijia');
    var lbbox=$(".lbbox");
    var ull=$('ul',lbbox);
    var fag=true;
    djj.eq(3).css({top:'60px'});
    djj.eq(5).css({top:'60px'});
djj.each(function (i,c) {
    console.log(i)
    console.log(c)
    $(c).click(function () {
        if (fag){
            fag=false;
            $(c).addClass('active');
            ull.eq(i).addClass('bchng')
        }else{
            fag=true;
            $(c).removeClass('active');
            ull.eq(i).removeClass('bchng').css({transformDelay: i * .6 + 's'});
        }


    })
})

});












