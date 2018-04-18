/**
 * 数组模块
 *
 * @flow
 */

const xdType = require('./type')

const xdArray = {

  isArrEmpty (arr: array): boolean {
    return !arr.length
  },

  isArrEqual (arrA: array, arrB: array): boolean {
    return JSON.stringify(arrA) === JSON.stringify(arrB)
  },

  cloneArr (arr: array): array {
    return JSON.parse(JSON.stringify(arr))
  },

  getArrFirstItem (arr: array, num: number = 1): mixed {
    let result = []

    for (let i = 0; i < num; i++) {
      result.push(arr[i])
    }

    return result.length === 1 ? result[0] : result
  },

  getArrLastItem (arr: array, num: number = 1): mixed {
    let result = []

    for (let i = arr.length - num; i < arr.length; i++) {
      result.push(arr[i])
    }

    return result.length === 1 ? result[0] : result
  },

  countArrItem (arr: array, item: mixed): number {
    return arr.filter((i: mixed): array => i === item).length
  },

  addArrUniqItem (arr: array, items: mixed): array {
    if (!xdType.isArr(items)) items = [items]

    items.forEach((item: mixed) => {
      if (!arr.includes(item)) arr.push(item)
    })

    return arr
  },

  removeArrItem (arr: array, items: mixed): array {
    if (!xdType.isArr(items)) items = [items]

    items.forEach((item: mixed) => {
      if (arr.includes(item)) arr.splice(arr.indexOf(item), 1)
    })

    return arr
  },

  toggleArrItem (arr: array, items: mixed): array {
    if (!xdType.isArr(items)) items = [items]

    items.forEach((item: mixed) => {
      if (arr.includes(item)) arr.splice(arr.indexOf(item), 1)
      else arr.push(item)
    })

    return arr
  },

  getArrGreatestItem (arr: array, num: number = 1): mixed {
    let sortedArr = this.sortArr(arr)

    return this.getArrLastItem(sortedArr, num)
  },

  getArrLeastItem (arr: array, num: number = 1): mixed {
    let sortedArr = this.sortArr(arr)

    return this.getArrFirstItem(sortedArr, num)
  },

  getArrGreatestItemBy (arr: array, field: string, num: number = 1): object {
    let sortedArr = this.sortArrBy(arr, field)

    return this.getArrLastItem(sortedArr, num)
  },

  getArrLeastItemBy (arr: array, field: string, num: number = 1): object {
    let sortedArr = this.sortArrBy(arr, field)

    return this.getArrFirstItem(sortedArr, num)
  },

  getArrRepeatedItem (arr: array, times: mixed): array {
    let counter = {}

    arr.forEach((item: mixed) => {
      let key = JSON.stringify(item)

      if (xdType.isUndefined(counter[key])) counter[key] = 1
      else counter[key] ++
    })

    let targetArr = []

    switch (xdType.getType(times)) {
      case 'number':
      case 'string':
        times = xdType.toNum(times)
        Object.keys(counter).forEach((key: string) => {
          if (counter[key] === times) targetArr.push(JSON.parse(key))
        })
        break

      case 'function':
        Object.keys(counter).forEach((key: string) => {
          if (times(counter[key])) targetArr.push(JSON.parse(key))
        })
        break

      default:
        Object.keys(counter).forEach((key: string) => {
          targetArr.push(JSON.parse(key))
        })
    }

    return targetArr
  },

  uniqArr (arr: array): array {
    return this.getArrRepeatedItem(arr)
  },

  unionArr (...arr: mixed): array {
    let tmpArr = []

    arr.forEach((singleArr: array): array => {
      tmpArr = tmpArr.concat(this.uniqArr(singleArr))
    })

    return this.getArrRepeatedItem(tmpArr)
  },

  intersectArr (...arr: mixed): array {
    let tmpArr = []

    arr.forEach((singleArr: array): array => {
      tmpArr = tmpArr.concat(this.uniqArr(singleArr))
    })

    return this.getArrRepeatedItem(tmpArr, arr.length)
  },

  sortArr (arr: array, order: string = 'asc'): array {
    let targetArr
    let isItemsAllNum = arr.every((item: mixed): boolean => xdType.isNum(item))

    if (isItemsAllNum) targetArr = arr.sort((a: number, b: number): boolean => a - b)
    else targetArr = arr.sort()

    if (order === 'desc') targetArr = targetArr.reverse()

    return targetArr
  },

  sortArrBy (arr: array, field: string, order: string = 'asc'): array {
    let targetArr = arr.sort((itemA: object, itemB: object): number => {
      if (itemA[field] > itemB[field]) return 1
      else if (itemA[field] < itemB[field]) return -1
      else return 0
    })

    if (order === 'desc') targetArr = targetArr.reverse()

    return targetArr
  },

  shuffleArr (arr: array): array {
    let indexArr = arr.map((item: mixed, key: number): number => key)
    let targetArr = []

    while (indexArr.length > 0) {
      let randomIndex = Math.floor(Math.random() * indexArr.length)

      targetArr.push(arr[indexArr[randomIndex]])
      indexArr.splice(randomIndex, 1)
    }

    return targetArr
  },

  getArrSample (arr: array, num: number = 1): mixed {
    return this.getArrFirstItem(this.shuffleArr(arr), num)
  }

}

module.exports = xdArray
