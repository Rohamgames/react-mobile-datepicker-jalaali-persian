import * as  jalaali from 'jalaali-js';
/**
 * @module time工具
 */
function throwIfInvalidDate(date) {
    if(!date.jy || !date.jm || !date.jd)
        throw new Error('INVALID DATE!');
    // if (Object.prototype.toString.call(date, null) !== '[object Date]') {
    //     throw new Error('参数类型不对');
    // }
}

function daysInMonth(year, month) {
    // new Date(year, month, 0).getDate();
    return jalaali.jalaaliMonthLength(year, month)
}

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * @param  {Date}       日期
 * @return {String}     字符串格式
 */
export function convertDate(date, format) {

    if(format==='D')
        return date.jd;
    else if(format==='M')
        return date.jm;
    else if(format==='YYYY')
        return date.jy;
    else if(format==='YYYY-MM-DD')
        return date.jy+'-'+date.jm+'-'+date.jd;

    // if(format==='D') {
    //     const j=jalaali.toJalaali(date);
    //     return j.jd;
    // }
    // if(format==='M') {
    //     const j=jalaali.toJalaali(
    //         new Date(date.getTime() - date.getDate() * 60 * 60 * 1000)
    //     );
    //     return j.jm;
    // }
    // if(format==='YYYY') {
    //     const j=jalaali.toJalaali(date);
    //     return j.jy;
    // }
    // const o = {
    //     'M+': date.getMonth() + 1,
    //     'D+': date.getDate(),
    //     'h+': date.getHours(),
    //     'm+': date.getMinutes(),
    //     's+': date.getSeconds(),
    // };
    // if (/(Y+)/.test(format)) {
    //     str = str.replace(RegExp.$1, date.getFullYear().toString().substr(4 - RegExp.$1.length));
    // }
    //
    // for (const k in o) {
    //     // eslint-disable-line
    //     if (new RegExp(`(${k})`).test(format)) {
    //         str = str.replace(
    //             RegExp.$1,
    //             RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(o[k].toString().length),
    //         );
    //     }
    // }
    //
    // return str;
}

/**
 * 获取相对日期的偏移日期
 * @param  {Date}       日期
 * @return {number}     相对的天数
 */
export function nextYear(now, index = 0) {
    throwIfInvalidDate(now);
    let ny=now.jy+index;
    return {jy:ny,jd:now.jd,jm:now.jm};
}

export function nextMonth(now, index = 0) {
    throwIfInvalidDate(now);
    let nm=now.jm+index;
    if(nm>12)
        nm-=12;
    if(nm<1)
        nm+=12;
    return {jy:now.jy,jd:now.jd,jm:nm};
}

export function nextDate(now, index = 0) {
    throwIfInvalidDate(now);
    let gDate=jalaali.toGregorian(now.jy, now.jm, now.jd);
    gDate = new Date(gDate.gy,gDate.gm-1,gDate.gd);
    const date = new Date(gDate.getTime() + index * 24 * 60 * 60 * 1000);
    return jalaali.toJalaali(date);
}

export function nextHour(now, index = 0) {
    throwIfInvalidDate(now);
    let gDate=jalaali.toGregorian(now.jy, now.jm, now.jd);
    gDate = new Date(gDate.gy,gDate.gm-1,gDate.gd);
    const date = new Date(gDate.getTime() + index * 60 * 60 * 1000);
    return jalaali.toJalaali(date);
}

export function nextMinute(now, index = 0) {
    throwIfInvalidDate(now);
    let gDate=jalaali.toGregorian(now.jy, now.jm, now.jd);
    gDate = new Date(gDate.gy,gDate.gm-1,gDate.gd);
    const date = new Date(gDate.getTime() + index * 60 * 1000);
    return jalaali.toJalaali(date);
}

export function nextSecond(now, index = 0) {
    throwIfInvalidDate(now);
    const date = new Date(now.getTime() + index * 1000);
    return date;
}
