/**
 * @param { String } 日期格式的字符串
 * @returns { String } 距离当前的日期间隔
 * */ 
export function formatDate (date) {
  let targetDate = new Date(date),
    nowDate = new Date()

  let targetYear = targetDate.getFullYear(),
    nowYear = nowDate.getFullYear()

  // 如果年份不相等取年份作为标准
  if (targetYear !== nowYear) {
    return `${nowYear - targetYear}年前`
  }

  let targetMouth = targetDate.getMonth(),
    nowMouth = nowDate.getMonth()

  if (targetMouth !== nowMouth) {
    return `${nowMouth - targetMouth}月前`
  }

  let targetDay = targetDate.getDate(),
    nowDay = nowDate.getDate()

  if (nowDay !== targetDay) {
    return `${nowDay - targetDay}天前`
  }

  return '今天'
}