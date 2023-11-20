export function textLength(string,limit){
    if(string.length > limit){
        return string.substring(0, limit) + '...';
    }
}

/**
 * 函数debounce用于延迟函数的执行
 * @param {Function} func - 需要延迟执行的函数
 * @param {number} [wait=3000] - 延迟的时间，单位为毫秒，默认为3000毫秒
 * @returns {Function} - 延迟执行的函数
 */
export function debounce(func, wait=3000) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            func.apply(context, args);
        }, wait);
    };
}
  
// 日期格式化函数
export function formatDate(date, fmt) {
    var o = {
      "M+": date.getMonth() + 1, // month
      "d+": date.getDate(), // day
      "h+": date.getHours(), // hour
      "m+": date.getMinutes(), // minute
      "s+": date.getSeconds(), // second
      "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
      "S": date.getMilliseconds() // millisecond
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  }