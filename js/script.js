$(document).ready(function() {
    //Recuperation des elements du dom.
    const list = $('.menu'), content = $('.menu-content');

    content.each(function(){
        $(this).not('#content1').hide();
    });

    list.each(function(){
        $(this).on('click', function(e){
            e.preventDefault();
            list.not(this).removeClass('active');
            $(this).addClass('active');

            const link = $(this).find('a');
            const href = $(link).attr('href');
            content.each(function(){
                $(this).not(''+href).hide();
            });
            $(href).fadeIn('slow');
        });
    });
});
