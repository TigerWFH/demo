// 通过agent识别app渠道以及业务渠道
/*
*   各平台渠道以及对应的标识符，通过UA中字符串识别，
*   还有一部分是通过URL上的app参数识别，例如ZEB、HCZ
1、UA识别(优先级高于url参数app=PAJK)
**********************************************************************************************
*   平台渠道        *   id   *   标识符                     *     备注                  
**********************************************************************************************
*   PAJK           *  001   *   pajkcordova               *    SHOUXIAN中会包含标识符
**********************************************************************************************
*   JSB            *  002   *   pajklitecordova           *
**********************************************************************************************
*   SHOUXINA       *  003   *   shouxian                  *
**********************************************************************************************
*   XNYY           *  004   *   xnyyAppVersion
**********************************************************************************************
*   WEIXINBOWSER   *  005   *   micromessenger
**********************************************************************************************
*   WEIBOBROWSER   *  006   *   weibo
**********************************************************************************************
2、app参数识别
**********************************************************************************************
*   平台渠道        *  007   *   标识符                     *     备注
**********************************************************************************************
*   WAP            *  008   *   WAP
**********************************************************************************************
*/
/**
 * app是指平安金管家，主客，主客极速版，好车主等等，优先级:ua > url param > cookie > 'PAJK'
 * outBizType是指直播、头条、广告、电子处方、购健康(GJK)、生活助手(SHZS)等，当前代码都是从url上获取的
 *       优先级：url-outBizType > url-appChannel > cookie-outBizType > 'PAJK'
 * 
 */ 
class UserAgent {
    constructor() {
        this.userAgent = window && window.navigator.userAgent || '';
        this.query = window && window.location.query || '';
        this.appVersion = 0;/*无法获取版本号*/
        this._setAppName();
        this._setAppVersion();
    }
    getPlatform() {
        const userAgent = this.getUserAgent();
        const u = (userAgent && userAgent.toLocaleUpperCase()) || '';
        return {
            trident: u.indexOf('trident') > -1,/*IE内核*/
            presto: u.indexOf('presto') > -1,/*opera内核*/
            webkit: u.indexOf('applewebkit') > -1, /*苹果、谷歌内核*/
            gecko: u.indexOf('gecko') > -1 && u.indexOf('khtml') == -1,/*火狐内核*/
            mobile: !!u.match(/applewebkit.*mobile.*/),/*是否移动端*/
            ios: !!u.match(/\i[^;]+;(u;)? cpu.+mac os x/),
            android: u.indexOf('android') > -1 || u.indexOf('linux') > -1,
            iPhone: u.indexOf('iphone') > -1 || u.indexOf('mac') > -1,
            iPad: u.indexOf('ipad') > -1
        };
    }

    _setAppName() {
        if (this.isPAJKApp()) {
            this.appName = 'PAJK';
            return;
        }
        if (this.isJSBApp()) {
            this.appName = 'JSB';
            return;
        }
        if (this.isSXApp()) {
            this.appName = 'SHOUXIAN';
            return;
        }
        if (this.isXNYYApp()) {
            this.appName = 'XNYY';
            return;
        }
        if (this.isWeixinBrowser()) {
            this.appName = 'WEIXINBROWSER';
        }
        if (this.isWeiboBrowser()) {
            this.appName = 'WEIBOBROWSER';
            return;
        }

        this.appName = this._parseAppName() || 'PAJK';/*PAJK兜底渠道*/
    }

    _setAppVersion() {
        // 金管家app支持分享的最小内部版本号是3042，对应外部版本4.9，此处获取的是内部版本号 Wang Fanghua
        // 金管家写入到userAgent的字符串特征,对应文档:http://doc.pajk-ent.com/pages/viewpage.action?pageId=40956385
        if (this.isPAJKApp()) {
            return;
        }
        if (this.isJSBApp()) {
            return;
        }
        if (this.isSXApp()) {
            let identifier = 'pajkslaAppVersion';
            if (this.userAgent.search(identifier) !== -1) {
                let appVersion = +this.userAgent.substr(-4, 4);
                if (!isNaN(appVersion)) {
                    this.appVersion = appVersion;
                }
            }
            return;
        }
        if (isXNYYApp()) {
            return;
        }
        if (isWeixinBrowser()) {
            return;
        }
        if (isWeiboBrowser()) {
            return;
        }
    }

    setAppName(appName) {
        this.appName = appName;
    }
    getAppName() {
        return this.appName;
    }

    getAppVersion() {
        return this.appVersion;
    }
    // 通过url参数app=XXX获取app名，UA优先级高于url中的参数app
    _parseAppName() {
        const query = this.query.substr(1, query.length);
        const queryList = query.split('&');
        let queryObj = {};
        queryList.forEach((item) => {
            let itemList = item.split('=');
            queryObj[itemList[0]] = itemList[1];
        });

        return queryObj.app;
    }
    // 从UA判断当前appName 
    isContainIdentifier(identifier) {
        return this.userAgent.toLocaleLowerCase().indexOf(identifier.toLocaleLowerCase()) !== -1;
    }

    isPAJKApp() {
        return this.isContainIdentifier('pajkcordova') && !this.isContainIdentifier('shouxian');
    }

    isJSBApp() {
        return this.isContainIdentifier('pajklitecordova');
    }

    isSXApp() {
        return this.isContainSpecificUA('shouxian');
    }

    isXNYYApp() {
        return this.isContainSpecificUA('xnyyAppVersion');
    }

    isWeixinBrowser() {
        return this.isContainSpecificUA('micromessenger');
    }

    isWeiboBrowser() {
        return this.isContainSpecificUA('weibo');
    }

    //是否可以使用平安健康的cordova或者schema
    canUsePAJKBridge() {
        return (this.isPAJKApp() || this.isJSBApp())
    }

    //极速版用户身份
    isGuestUser() {
        const userAgent = this.userAgent.toLowerCase();
        let uaGuestReg = /guest\/([\w.]+)/;
        let uaGuestArr = userAgent.match(uaGuestReg);

        let uaGuestVal = uaGuestArr && uaGuestArr[1] || 'false';

        if (this.isJSBApp() && uaGuestVal == 'true') {
            return true;
        } else {
            return false;
        }
    }
}

// 为业务提供统一的功能接口，对同一功能封装各平台的不同的schema格式以及参数
class CrossPlatformTools {
    constructor() {
        this.userAgent = new UserAgent();
    }

    share(params) {

    }
    callCamera(params) {

    }

    visit

}