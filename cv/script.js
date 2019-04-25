(function ($) {

    /**
     * jquery plugin to check el is visible on screen
     */

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };

    $.fn.allowScrollEffect = function() {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top;
        return _top >= viewTop && !$t.visible(true);
    }

})(jQuery);

$(document).ready(function () {
    var elems = $(document).find('[scroll-effect]');
    var toRemoves = [];
    elems.each(function(i, el) {
        $el = $(el);
        if(! $el.allowScrollEffect()) {
            el.scrollEffect = true;         // mask as done
            if($el.attr('scroll-effect') && $el.attr('progress')) {
                $el.addClass($el.attr('scroll-effect'));
                $el.width($el.attr('progress'));
            }
            toRemoves.push(i);
        }
    });
    elems = elems.filter(function(i, el) {
        return toRemoves.indexOf(i) < 0;
    });

    // scroll handle
    $(window).scroll(function(event) {
        toRemoves = [];
        elems.each(function(i, el) {
            var $el = $(el);
            if($el.visible(true)) {
                if(!el.scrollEffect) {
                    $el.addClass($el.attr('scroll-effect'));
                    el.scrollEffect = true;
                    $el.find('[scroll-effect=progress-anim]').each(function(j, cel) {
                        var $cel = $(cel);
                        $cel.addClass($cel.attr('scroll-effect'));
                        $cel.width($cel.attr('progress'));
                        cel.scrollEffect = true;
                    })
                }
                toRemoves.push(i);
            }
        });
        elems = elems.filter(function(i, el) {
            return toRemoves.indexOf(i) < 0;
        });
    });
})
