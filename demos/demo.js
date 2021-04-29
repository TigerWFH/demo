function getSearchParamByName(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const res = window.location.search.substr(1).match(reg);
    if (res != null) {
        return unescape(res[2]);
    }
    return null;
}

let url = 'https://www.dev.dc.com/mall-flash/index.html?channel=123&storeId=123&sellerId=123#/health?channel=123&storeId=123&sellerId=123';
console.log("storeId", getSearchParamByName());