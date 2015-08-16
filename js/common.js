// JavaScript Document

/**
 * @name     :collectWeb
 * @author   :Nice
 * @dependent:收藏本站
 */
function addFavorite() {

        if (window.sidebar && window.sidebar.addPanel) {
            // Mozilla Firefox Bookmark
            window.sidebar.addPanel(document.title, window.location.href, '');
        } else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorite
            window.external.AddFavorite(location.href, document.title);
        } else if (window.opera && window.print) {
            // Opera Hotlist
            this.title = document.title;
            return true;
        } else {
            // webkit - safari/chrome
            alert('请使用' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D 收藏！');
        }

    }
/* @end **/


/**
 * @name     :scrollImg
 * @author   :Nice
 * @dependent:焦点图轮播
 *   参数 animateTime 过渡动画时间(ms)
 *        time        切换时间(ms)
 */
function scrollImg(time,id) {
    var e= $("#"+id),
        wrapTitle =e.find('.ul_wrap_title'),
        ulTitle = wrapTitle.find('.ul_title'),
        ulTitleItme = ulTitle.find('.itme');

    var wrapImg =e.find('.ul_wrap_img');
    var ulImg  = wrapImg .find('.ul_img');
    var ulImgItme = ulImg.find('.itme');

    
    var ulImgItmeL = ulImgItme.length,
        ulImgItmeW = ulImgItme.width();

    var btnL = e.find('.btn_l');
    var btnR = e.find('.btn_r');

    //初始化
    var i=0;
    var direction;

    ulImg.width(ulImgItmeW*ulImgItmeL);
    ulTitle.width(ulImgItmeW*ulImgItmeL);


    // var obj = {
    //     w: ulImgItmeW,
    //     l: ulImgItmeL,
    //     time: animateTime,
    // }
    
    console.log(ulImgItmeW)

    function btnLR(w,l,time,lr){
        if (lr=="l") {
            i=i+1;

            if(i>l-1){
                i=0
            }else{
                i;
            }
        }
        

        if (lr=="r") {
            i=i-1;

            if(i<0){
                i=l-1;
            }else{
                i;
            }

        };

        ulImg.stop().animate({
            left: -i * 1000
        },time);


        ulTitle.stop().animate({
            left: -i * 1000
        },time);

    }


    btnL.click(function(){btnLR(ulImgItmeW,ulImgItmeL,time,"l")});
    btnR.click(function(){btnLR(ulImgItmeW,ulImgItmeL,time,"r")});

    
   
}
/* @end **/








/**
 * @name		:
 * @author	:Nice
 * @version	:
 * @type		:基类
 * @explain	:
 * @relating	:
 * @dependent:
 */

/* @end **/

