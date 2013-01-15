/**
 * 单击表格行任意处选择[取消选择] checkbox[radio]
 */
(function() {
  'use strict';
  var klass = 'row-selected';
  $('body').on('click', 'tbody tr',function(e) {
    var target = e.target,
      $this = $(this),
      $input = $this.find('td > :checkbox,td > :radio');
    if (_.indexOf(['checkbox', 'radio'], target.type) !== -1 ||
      _.indexOf(['select', 'option' , 'input' , 'textarea', 'a'], target.tagName.toLocaleLowerCase()) !== -1) {
      return;
    }
    if ($input.length) {
      var checked = $input.prop('checked');
      if ($input.attr('type') !== 'radio') {
        checked ? $this.removeClass(klass) : $this.addClass(klass);
      }
      $input.prop('checked', !checked).change();
    }
  }).on('change', 'tbody tr :checkbox', function() {
      var $cb = $(this),
        $tr = $cb.closest('tr');
      $cb.is(':checked') ? $tr.addClass(klass) : $tr.removeClass(klass);
    });
})();
