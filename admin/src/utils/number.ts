/* 数字和金额操作 */

/** number */

/**
 * 加函数
 */
export function add(num1: string | number, num2: string | number) {
  let sq1;
  let sq2;
  try {
    sq1 = num1.toString().split(".")[1].length;
  } catch (e) {
    sq1 = 0;
  }
  try {
    sq2 = num2.toString().split(".")[1].length;
  } catch (e) {
    sq2 = 0;
  }
  const m = 10 ** Math.max(sq1, sq2);
  return (Number(num1) * m + Number(num2) * m) / m;
}

/**
 * 减函数
 */
export function sub(num1: string | number, num2: string | number) {
  let r1;
  let r2;
  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  const m = 10 ** Math.max(r1, r2);
  return (Number(num1) * m - Number(num2) * m) / m;
}

/**
 * 乘函数
 */
export function mul(num1: string | number, num2: string | number) {
  let m = 0;
  let s1;
  let s2;
  try {
    s1 = num1.toString();
    const splits = s1.split(".");
    m += splits[1] ? splits[1].length : 0;
  } catch (e) {
    s1 = "NaN";
  }
  try {
    s2 = num2.toString();
    const splits = s2.split(".");
    m += splits[1] ? splits[1].length : 0;
  } catch (e) {
    s2 = "NaN";
  }
  return (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) / 10 ** m;
}

/**
 * 除函数
 */
export function div(num1: string | number, num2: string | number) {
  let t1 = 0;
  let t2 = 0;
  try {
    t1 = num1.toString().split(".")[1].length;
  } catch (e) {
    // error
  }
  try {
    t2 = num2.toString().split(".")[1].length;
  } catch (e) {
    // error
  }
  const r1 = Number((num1 + "").replace(".", ""));
  const r2 = Number((num2 + "").replace(".", ""));
  return (r1 / r2) * 10 ** (t2 - t1);
}

/**
 * 给数字补n个0
 */
export function padZero(num: string | number, total = 0, atBegin = false) {
  let i = 0;
  let zeros = "";
  while (i < total) {
    i++;
    zeros += "0";
  }
  return atBegin ? zeros + num : num + zeros;
}

/**
 * formatMoney，格式化后的金额字符串
 * formatMoney(102345.332, 2) 返回'102,345.44'
 */
export function formatMoney(numIn: number | string, digitIn = 3, cut = false) {
  let num = Number(numIn);
  let digit = parseInt(String(digitIn));
  if (isNaN(num)) {
    return "0";
  }
  const flag = num < 0 ? "-" : ""; // 负数标志
  num = Math.abs(num);
  digit = digit <= 3 && digit >= 0 ? Math.floor(digit) : 3; // 保留位数  0 - 3 //默认3位
  const powNum = 10 ** digit;

  // console.log(num, powNum)
  num = mul(num, powNum);
  // console.log(num, powNum)

  if (!cut) {
    // 舍弃
    num = Math.floor(num); // 去掉小数点后面的位数
  } else {
    num = Math.floor(Number(num.toFixed(0))); // 四舍五入 再取整
  }

  const numstr = "" + num / powNum;

  const l = numstr
    .split(".")[0]
    .split("")
    .reverse();
  let r = numstr.split(".")[1];
  if (r === undefined) {
    r = "";
  }
  r = (r + "000").substr(0, digit);
  let t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? "," : "");
  }
  return (
    flag +
    t
      .split("")
      .reverse()
      .join("") +
    (r === "" ? "" : "." + r)
  );
}

/**
 * formatMoneyZhCN，格式化为中文金额字符串
 */
export function formatMoneyZhCN(numIn: string | number) {
  const nums = Number(numIn) || 0;
  const y = Math.floor(nums / 1e8);
  const t = Math.floor((nums - y * 1e8) / 1e4);
  const fillNum = padZero(t, 4, true);
  return y + "亿" + fillNum.substr(fillNum.length - 4, 4) + "万";
}
