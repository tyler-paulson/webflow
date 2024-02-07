var Webflow = Webflow || [];

Webflow.push(function () {
    
    jQuery().ready(function ($) {

        var list = $('div[clb="list"] div[role="listitem"]');

        var content = $('div[clb="content"]');

        var wrap = $('div[clb="wrap"]');

        var lightbox = $('div[clb="lightbox"]');
        
        list.each(function () {
        
            $(this).find('a').first().on('click', function (e) {
                
                let href = $(this).attr('href');
                let copy = content.find('a[href="' + href + '"]').parents('div[role="listitem"]').clone();
                lightbox.append(copy);
                wrap.css('display', 'flex');
                return false;

            });

        });

    }(jQuery));
    
});
