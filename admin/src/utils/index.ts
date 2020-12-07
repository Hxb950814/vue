/* 是否是手机号号 */
export function isMobile(value: string): boolean {
  // eslint-disable-next-line
    return /^[1][2,3,4,5,6,7,8,9,0][0-9]{9}$/.test(value);
}

/* 是否是身份证号 */
export function isIdNumber(value: string): boolean {
  // eslint-disable-next-line
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
}

/* 是否是邮箱 */
export function isEmail(value: string): boolean {
  // eslint-disable-next-line
    return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value);
}

/* 是否是URL */
export function isURL(value: string): boolean {
  // eslint-disable-next-line
    return /^http(s)?:\/\//.test(value);
}

export function sleep(time: number): Promise<any> {
  return new Promise((resolve: Function) => {
    setTimeout(resolve, time);
  });
}

// hbb 公共方法
/* 只能输入正整数 or 保留小数点后2位 or 保留小数点后1位 */
export function integer(value: string, mode: number) {
  // mode:1 只能输入整数 2：保留小数点后面2位 3：保留小数点后面1位
  let v;
  switch (mode) {
    case 1:
      v = value.replace(/[^0-9]/g, "");
      break;
    case 2:
      v = value.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, "$1");
      break;
    case 3:
      v = value.replace(/^\D*(\d*(?:\.\d{0,1})?).*$/g, "$1");
      break;
    default:
      break;
  }
  return v;
}
