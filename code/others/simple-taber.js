/**
 * 简易taber模块
 * @author: jinlu_hz@163.com
 * @date: 2012-3-22
 */
define(function() {
    var index = -1;    // 当前tab index

    return {
        // TODO index交给模块自己计算
        /**
         * 设置标签tabs
         * @param list
         * @param options
         */
        refreshTaber: function(list, options) {
            var $list = $(list), // tab列表
                selected = options.selected || 'selected', // tab选中时的样式
                callback = options.callback;    // tab切换后的回调函数
            index = options.index || 0; // 第index个tab

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
