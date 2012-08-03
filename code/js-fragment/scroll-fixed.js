/**
 * @author: jinlu
 * @date: 2012-7-19
 */
define(function() {
  'use strict';

  var fixedStyle = 'position:fixed;top:0;z-index:999;background-color:#fff;border:1px solid #ddd;border-top:0 none;border-left:0 none;',
    $win = $(window),
    ScrollFixed = function(options) {
      this.$target = $(options.target);
      this.targetOffsetTop = this.$target.offset().top;
      this.targetHeight = this.$target.outerHeight();
      this.$placeholder = $('<div style="height:0;"></div>');
      this.$target.after(this.$placeholder);
      fixedStyle += ';width:' + (this.$target.width() - 1) + 'px;';
      $win.scroll(_.throttle($.proxy(this._scroll, this), 30));
    }

  ScrollFixed.prototype = {
    _scroll: function() {
      this._shouldFixed() ? this._fixed() : this._unfixed();
    },

    _shouldFixed: function() {
      return $win.scrollTop() >= this.targetOffsetTop;
    },

    _fixed: function() {
      this.$target.attr('style', fixedStyle);
      this.$placeholder.height(this.targetHeight + 'px');
    },

    _unfixed: function() {
      this.$target.attr('style', 'position:relative');
      this.$placeholder.height(0);
    }
  }

  return {
    init: function(options) {
      return new ScrollFixed(options);
    }
  }
});
