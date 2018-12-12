/**
 * *
 * */
'use strict';
/**
 * 帧动画库类
 * 
* */
function Animation() {
	
}

/**
 * 添加一个同步任务，去预加载图片
* * @param {Object} imgList 图片数组
 */
Animation.prototype.loadImage = function(imgList) {
	
}

/**
 * 添加一个异步定时任务，通过定时改变图片背景位置，实现帧动画
 * @param {Object} ele dom对象
 * @param {Object} positions 背景位置数组
 * @param {Object} imageUrl 图片地址
 */
Animation.prototype.changePosition = function(ele, positions, imageUrl) {
	
}

/**
 * 添加一个异步定时任务，通过定时改变image标签的src属性，实现帧动画
 * @param {Object} ele
 * @param {Object} imgList
 */
Animation.prototype.changeSrc = function(ele,imgList) {
	
}

/**
 * 高级用法，添加一个异步定时执行的任务
 * 该任务自定义每帧动画执行的任务函数
 * @param {Object} taskFn
 */
Animation.prototype.enterFrame = function(taskFn) {
	
}

/**
 * 添加一个同步任务，可以在上一个任务完成后执行回掉函数
 * @param {Object} callback
 */
Animation.prototype.then = function(callback) {
	
}

/**
 * 开始执行任务 异步定义执行的间隔
 * @param {Object} interval
 */
Animation.prototype.start = function(interval) {
	
}

/**
 * 添加一个同步任务，该任务就回退到上一个任务
 * 实现重复上一个任务的效果，可以定义重复的次数
 * @param {Object} times 重复次数
 */
Animation.prototype.repeat = function(times) {
	
}