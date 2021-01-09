import Parse from 'parse'
import md5 from 'md5'

// 获取Class实例
export const initClass = ClassName => {
  return Parse.Object.extend(ClassName)
}
// 获取Class实例
export const initFile = (fileName, file) => {
  return new Parse.File(md5(fileName), file)
}
// 获取Class Query实例
export const initClassQuery = ClassName => {
  const Table = initClass(ClassName)
  return new Parse.Query(Table)
}
// 获取指针对象
export const initPointer = (ClassName, id) => {
  return initClass(ClassName).createWithoutData(id)
}
// 获取地理坐标
export const initGeoPoint = (latitude, longitude) => {
  return new Parse.GeoPoint({ latitude, longitude })
}
// 分页器
export const pagination = (query, options) => {
  if (options.pageNo !== 0) {
    query.skip(options.pageSize * (options.pageNo - 1))
  }
  query.limit(options.pageSize)
  return query
}
