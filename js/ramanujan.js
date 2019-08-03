$(document).ready(function()
{
    lastScrollTop = 0;
    ramanujaninner = $('.rect-future-inner')
    triggered = false;
    fullcont = $('.full-container');
    childcontparent =  $('#innerchildparent');
    reachus = $('#view-4');
    rocketsvg = $('.rocketsvg');
    a = document.getElementById("alphasvg");

    title_link = $('#title_link');
    about_link = $('#about_link');
    sponsor_link = $('#sponsor18_link');
    contact_link = $('#contact_link');
    faq_link = $('#faq_link');

    rockervanilla = document.getElementsByClassName('rocketsvg')[0]

    svgDoc = a.contentDocument;
    $('.full-container').on('scroll', fullscroll);

    if (typeof svgDoc != 'undefined' && svgDoc!=null){
        fires = svgDoc.getElementsByClassName("fire");
        for(var i = 0; i < fires.length; i++)
        {
            fires[i].style.display = "none";
        }
    }
    // console.log(fires)

});


function fullscroll()
{
        console.log('hiii');
        if(typeof fires == 'undefined') fires=[];

        if (typeof svgDoc != 'undefined' && svgDoc!=null && fires.length<3){
            fires = svgDoc.getElementsByClassName("fire");
        }
        if(scrollHandling.allow) {
            // console.log(fires)
            for(var i = 0; i < fires.length; i++)
            {
                fires[i].style.display = "block";
            }

            var st = $(fullcont).scrollTop();
            var direction =st>lastScrollTop?'down':'up';
            lastScrollTop =st;

            clearTimeout($.data(fullcont, 'scrollTimer'));
            $.data(fullcont, 'scrollTimer', setTimeout(function() {
                // console.log(fires);
                for(var i = 0; i < fires.length; i++)
                {
                    fires[i].style.display = "none";
                }
            }, 250));


            if(direction === 'up')
            {
                rocketsvg.css('transform', 'rotate('+(180)+'deg)')
            }
            else{
                rocketsvg.css('transform', 'rotate('+(0)+'deg)')
            }
            var scrollPercent = 100 * fullcont.scrollTop() / (childcontparent.height()-reachus.height());
            // console.log(scrollPercent)
            // console.log(fullcont.scrollTop()+' '+childcontparent.height()+' '+fullcont.height());
            // console.log(rocketsvg + ' '+rocketsvg.css('transform'));

            // console.log(rocketsvg.css("position"));
            // console.log("translateY("+scrollPercent+"px)")
            $(rocketsvg).css('top',  scrollPercent+ '%');
           // $(rocketsvg).css("-webkit-transform", "translateY(" + scrollPercent + "px)");
            var l = [0, 20, 40, 60, 100];
            var links = [title_link, about_link, sponsor_link, faq_link, contact_link];

            for(var i = 0; i<5; i++)
            {
                console.log(i+' '+(scrollPercent-l[i]));
                if(Math.abs(scrollPercent - l[i])<15)
                {
                    links[i].addClass('highlighted');
                }else{
                    links[i].removeClass('highlighted');
                }
            }



            if($(fullcont).scrollTop()>=$('#ramanujan').position().top && !triggered){
                triggered=true;
                ramanujaninner.each(function() {
                var $this = $(this),
                countTo = $this.attr('data-count');

                $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {

                    duration: 1000,
                    easing:'linear',
                    step: function() {
                    $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                    $this.text(this.countNum+'+');


                    }

                });



                }
                )





            }
            }

}

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
