# xdhelper [![Build Status](https://travis-ci.org/xiaoda/xdhelper.svg?branch=master)](https://travis-ci.org/xiaoda/xdhelper)

Focus on operation & judgement, fundamental functions. Under development. Apis will change.

## modules

### array（数组）

[isArrEmpty](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L13) (arr: array): boolean
> 判断数组是否为空

[addArrUniqItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L17) (array: array, item: mixed): array
> 数组添加唯一元素

[removeArrItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L22) (array: array, item: mixed): array
> 数组安全删除元素

[toggleArrItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L29) (array: array, item: mixed): array
> 数组切换元素

### device（设备）

[getUserAgent](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L11) (): string
> 获取用户代理信息

[isMobile](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L15) (userAgent: string = this.getUserAgent()): boolean
> 判断是否移动设备

[isPhone](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L19) (userAgent: string = this.getUserAgent()): boolean
> 判断是否手机

[isPad](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L23) (userAgent: string = this.getUserAgent()): boolean
> 判断是否平板电脑

[isAndroid](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L27) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 Android 系统

[isiOS](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L31) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iOS 系统

[isiPhone](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L35) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPhone

[isiPad](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L39) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPad

[isiPod](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L43) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPod

### function（函数）

[execFunc](https://github.com/xiaoda/xdhelper/blob/master/src/modules/function.js#L12) (func: mixed, ...args: array): boolean
> 安全执行函数

### mask（模糊格式）

[mobileMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L12) (mobile: string | number): string
> 手机号模糊格式

[emailMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L17) (email: string): string
> 邮箱模糊格式

[idNumMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L24) (id: string | number): string
> 身份证号码模糊格式

### math（算术）

[multiply1k](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L15) (num: number | string, times: number | string = 1): number
> 乘以 1000

[devide1k](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L19) (num: number | string, times: number | string = 1): number
> 除以 1000

[multiply1024](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L23) (num: number | string, times: number | string = 1): number
> 乘以 1024

[devide1024](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L27) (num: number | string, times: number | string = 1): number
> 除以 1024

[fillZero](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L32) (num: number | string, width: number, direction: string = 'left'): string
> 补零

### object（对象）

[isObjEmpty](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L11) (obj: object): boolean
> 判断对象是否为空

[isObjEqual](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L16) (objA: object, objB: object): boolean
> 判断两个对象是否完全相等（包括属性顺序）

[cloneObj](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L20) (obj: object): string
> 复制对象（非引用传值）

[loopObj](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L24) (obj: object, callback: mixed): boolean
> 遍历对象

### string（字符串）

[capitalize](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L11) (str: string): str
> 首字母大写

[camelCase](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L15) (strs: array): str
> 驼峰连接

[kebabCase](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L19) (strs: array): str
> 中划线连接

### support（支持）

[sseSupport](https://github.com/xiaoda/xdhelper/blob/master/src/modules/support.js#L11) (): boolean
> 判断浏览器是否支持服务器推送事件

### type（类型）

[getType](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L12) (obj: mixed): string
> 获取类型

[isStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L21) (obj: mixed): boolean
> 判断是否字符串

[isNum](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L25) (obj: mixed): boolean
> 判断是否数字

[isArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L29) (obj: mixed): boolean
> 判断是否数组

[isObj](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L33) (obj: mixed): boolean
> 判断是否对象

[isFunc](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L37) (obj: mixed): boolean
> 判断是否函数

[isRegExp](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L41) (obj: mixed): boolean
> 判断是否正则表达式

[isBoolean](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L45) (obj: mixed): boolean
> 判断是否布尔型

[isDate](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L49) (obj: mixed): boolean
> 判断是否日期

[isNull](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L53) (obj: mixed): boolean
> 判断是否 null

[isUndefined](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L57) (obj: mixed): boolean
> 判断是否 undefined

[toStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L62) (obj: mixed): string
> 转换为字符串类型

[toNum](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L66) (obj: mixed): number
> 转换为数字类型

[toBoolean](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L70) (obj: mixed): boolean
> 转换为布尔型

[objToArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L74) (obj: object): array
> 对象转换为数组

### url（网址）

[buildQueryStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/url.js#L11) (data: object): string
> 构造 url 参数

[getQueryParams](https://github.com/xiaoda/xdhelper/blob/master/src/modules/url.js#L19) (url: string = window.location.search): object
> 获取 url 参数
