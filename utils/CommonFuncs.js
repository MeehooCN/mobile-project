/**
 * @description 公共方法
 */
/**
 * @description 日期格式化
 * @param {Object} date 日期
 * @param {Object} fmt 格式化字段 yyyy-MM-dd hh:mm:ss
 */
function formatDate(date, fmt) {
	if (/(y+)/.test(fmt)) {
	        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
        }
    }
	return fmt;
};
/**
 * @description 文件 Url 转义
 * @param {String} url 文件地址
 **/
function encodeFileUrl(url) {
  if (url) {
    let transformUrl = url.replace(/%/g, '%25')
      .replace(/\+/g, '%2B')
      .replace(/&/g, '%26')
      .replace(/#/g, '%23')
      .replace(/\(/g,"%28")
      .replace(/\)/g,"%29")
      .replace(/ /g, '%20');
    return transformUrl;
  } else {
    return '';
  }
};
export { formatDate, encodeFileUrl };
