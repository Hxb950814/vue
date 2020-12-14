/* 浏览器方面 */

/* 是否是微信 */
export function isWeixin(): boolean {
    const ua = window.navigator.userAgent.toLowerCase();
    return !!ua.match(/micromessenger/i);
}

/* 是否是安卓 */
export function isAndroid(): boolean {
    const ua = window.navigator.userAgent.toLowerCase();
    // eslint-disable-next-line no-useless-escape
    return !!ua.match(/(android);?[\s\/]+([\d.]+)?/);
}

/* 是否是IOS */
export function isIOS(): boolean {
    const ua = window.navigator.userAgent.toLowerCase();
    const ipad = !!ua.match(/(ipad).*os\s([\d_]+)/);
    const iphone = !!ua.match(/(iphone\sos)\s([\d_]+)/);
    return ipad || iphone;
}

/* 是否是桌面浏览器 */
export function isDesktop(): boolean {
    return navigator.platform === 'Win32' ||
        navigator.platform === 'X11' ||
        navigator.platform === 'Mac' ||
        navigator.platform === 'Linux';
}

/* 是否是IE(Edge12-17)浏览器 */
export function isIE(): boolean {
    return 'ActiveXObject' in window;
}

export function ieVersion() {
    const userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
    const isIE = userAgent.includes('compatible') && userAgent.includes('MSIE'); // 判断是否IE<11浏览器
    const isEdge = userAgent.includes('Edge') && !isIE; // 判断是否IE的Edge浏览器
    const isIE11 = userAgent.includes('Trident') && userAgent.includes('rv:11.0');
    if (isIE) {
        const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
        reIE.test(userAgent);
        const fIEVersion = parseInt(RegExp.$1);
        if (fIEVersion === 7) {
            return 7;
        } else if (fIEVersion === 8) {
            return 8;
        } else if (fIEVersion === 9) {
            return 9;
        } else if (fIEVersion === 10) {
            return 10;
        } else {
            return 6;// IE版本<=7
        }
    } else if (isEdge) {
        return 'edge';// edge
    } else if (isIE11) {
        return 11; // IE11
    } else {
        return -1;// 不是ie浏览器
    }
}
