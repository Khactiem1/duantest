/* $(document).ready(
    function(){
        alert('Hello chào người anh em');
        $('h1').css('color','red');
        $('h1').click(
            function(){
                $(this).css('color','blue');
            }
        )
    }
) */
$(document).ready(
    function(){
        /* sticky nav */
        $('.about_section').waypoint(
            function(direction){
                if(direction == 'down'){
                    $('nav').addClass('sticky');
                }
                else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset: '800px'
            }
        )
        /* scroll */
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            event.preventDefault();
        });
        /* F5 go to top */
        history.scrollRestoration = "manual";
        $(window).on('beforeunload', function(){
            $(window).scrollTop(0);
        });
        /* mobile navigation */
        $('.mobile_nav_icon').click(function(){
            if($('.mobile_nav_icon').hasClass('fa-bars')){
                $('.mobile_nav_icon').addClass('fa-times');
                $('.mobile_nav_icon').removeClass('fa-bars');
                $('ul').addClass('menu');
            }
            else{
                $('.mobile_nav_icon').addClass('fa-bars');
                $('.mobile_nav_icon').removeClass('fa-times');
                $('ul').removeClass('menu');
            }
        })
    }
)