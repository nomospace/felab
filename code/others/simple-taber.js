/**
 * 简易 taber 模块
 */
define(function() {
  'use strict';
  var index = -1;    // 当前 tab index
  /**
   * 设置标签 tabs
   * @param list
   * @param options
   */
  return {
    // TODO index 交给模块自己计算
    refreshTaber: function(list, options) {
      var $list = $(list), // tab 列表
        selected = options.selected || 'selected', // tab 选中时的样式
        callback = options.callback;    // tab 切换后的回调函数
      index = options.index || 0; // 第 index 个 tab
      $.each($list, function(i, item) {
        item = $(item);
        if (i !== index) {
          item.removeClass(selected);
        }
        else {
          item.addClass(selected);
        }
      });
      $.isFunction(callback) && callback();
    },

    /**
     * 获取当前tab index
     */
    getIndex: function() {
      return index;
    }
  }
});
