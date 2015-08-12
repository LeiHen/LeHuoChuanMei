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
 * @name		:
 * @author	:Nice
 * @version	:
 * @type		:基类
 * @explain	:
 * @relating	:
 * @dependent:
 */

/* @end **/

$cfg.invoice_type.type[0];
$cfg.invoice_type.rate[0];



a: 2: {
    s: 4: "type";
    a: 2: {
        i: 0;
        s: 1: "0001";

        i: 1;
        s: 1: "0002";

        i: 2;
        s: 1: "0003";

        i: 3;
        s: 1: "0004";
    }

    s: 4: "rate";
    a: 2: {
        i: 0;
        d: 1;

        i: 1;
        d: 1.5;

        i: 2;
        d: 5;

        i: 3;
        d: 6;
    }

}