var Webflow = Webflow || [];

Webflow.push(function () {
    
    jQuery().ready(function ($) {

        var list = $('div[clb="list"] div[role="listitem"]');

        var content = $('div[clb="content"]');

        var wrap = $('div[clb="wrap"]');

        var lightbox = $('div[clb="lightbox"]');

        // Create a variable named button and set it to true / false based on whether lightbox has an attribute called "clb-button"

        var button_disabled = lightbox.attr('clb-button') === 'false';

        if(!button_disabled) {
            lightbox.css('position', 'relative');
        }
        
        list.each(function () {
        
            $(this).find('a').first().on('click', function (e) {
                
                let href = $(this).attr('href');
                let copy = content.find('a[href="' + href + '"]').parents('div[role="listitem"]').clone();
                
                lightbox.empty();
                lightbox.append(copy);
                if(!button_disabled) {
                    let button = $('<button aria-label="Close" style="position:absolute; top: 0; right: 0;" class="clb-button"><span aria-hidden="true">&times;</span></button>');
                    button.on('click', function () {
                        wrap.css('display', 'none');
                        lightbox.empty();
                        return false;
                    });
                    lightbox.append(button);
                }
                wrap.css('display', 'flex');
                return false;

            });

        });

    }(jQuery));
    
});
