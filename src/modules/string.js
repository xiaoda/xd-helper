/**
 * 字符串模块
 *
 * @flow
 */

const xdType = require('./type')

const xdString = {

  getStrLen (str: string): number {
    return str.length
  },

  capitalize (str: string): string {
    return str.toLowerCase().replace(/\b[a-z]/g, (s: string): string => s.toUpperCase())
  },

  capitalCamelCase (strs: array): string {
    return strs.map((str: string): string => this.capitalize(str)).join('')
  },

  camelCase (strs: array): string {
    return strs.map((str: string, index: number): string => index ? this.capitalize(str) : str).join('')
  },

  kebabCase (strs: array): string {
    return strs.map((str: string): string => str.toLowerCase()).join('-')
  },

  fillZero (num: number | string, width: number, direction: string = 'left'): string {
    let numText = xdType.toStr(num)
    let len = numText.length
    let result

    if (len >= width) {
      result = numText
    } else {
      let zeros = '0'.repeat(width - len)

      if (direction === 'left') {
        result = `${zeros}${numText}`
      } else {
        result = `${numText}${zeros}`
      }
    }

    return result
  }

}

module.exports = xdString
