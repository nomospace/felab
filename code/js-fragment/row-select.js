/**
 * 单击表格行任意处选中单选、复选
 * @author: jinlu_hz@163.com
 * @date: 2012-3-1
 */
(function() {
    $('body').on('click', 'tbody tr', function(e) {
        var target = e.target,
            type = target.type,
            tagName = target.tagName.toLocaleLowerCase(),
            $input;

        if (type == 'checkbox' || type == 'radio' ||
            tagName == 'select' || tagName == 'option' ||
            tagName == 'input' || tagName == 'textarea') return;

        $input = $(this).find(':checkbox,:radio');
        $input.prop('checked', !$input.prop('checked'));
    });
})();
