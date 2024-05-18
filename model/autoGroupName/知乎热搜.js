import fetch from 'node-fetch'
export async function NameCardContent() {
  let res = await fetch('https://tenapi.cn/v2/zhihuhot/').catch((err) => logger.error(err))
  if (!res) { return false }
  res = await res.json()
  let result = res.data[0].name
  if (result.length<=8) result = '知乎热搜:' + result
  return result
}
