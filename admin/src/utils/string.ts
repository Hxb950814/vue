/* string 类的操作 */

/* 首字母大写 */
export function firstLetterUppercase(str: string) {
    if (!str) {
        return str + '';
    }
    return str[0].toUpperCase() + str.slice(1);
}

/* 首字母小写 */
export function firstLetterLowercase(str: string) {
    if (!str) {
        return str + '';
    }
    return str[0].toLowerCase() + str.slice(1);
}

/* 字符串转驼峰命名 */
/*
*  输入 add-bbb-ccc
*  输出 aaaBbbCcc
* */
export function camelCase(strIn: string) {
    const str = String(strIn ?? '');
    const reg = /-(\w)/g;// 子项()表示子项
    return (str[0].toLowerCase() + str.slice(1)).replace(reg, function($0, $1) {
        return $1.toUpperCase();
    });
}

/* json 数据转 url  */
export function json2Url(data: any) {
    if (!data) {
        return '';
    }
    let strData = '';
    Object.keys(data).forEach((item) => {
        strData += item + '=' + data[item] + '&';
    });
    if (strData.length > 0) {
        strData = strData.slice(0, strData.length - 1);
    }
    return strData;
}

/* url 去除收尾空格和多余/符号 */
export function urlTrim(path: string) {
    return path.trim().replace(/(\/){2,}/g, '/');
}
