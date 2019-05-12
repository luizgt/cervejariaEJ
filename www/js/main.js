$(function () {

	$('#bv').css('opacity','1.0');	

    $('#navbar a').click(function () {
    	$('#bv').css('transition','all .1s');
    	$('#bv').css('opacity','0.0');
        var els = document.querySelectorAll('#navbar a');
        for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('item-active');
        }
        $(this).addClass('item-active');
        $('#produtos, #contato, #galeria').css("opacity", "0.0");
        $('#produtos, #contato, #galeria').css("z-index", "30");
        $('#'+$(this).data("link")).css("z-index", "31");
        $('#'+$(this).data("link")).css("opacity", "1.0");
    });

    $('#div-logo').click(function() {
    	$('#produtos, #contato, #galeria').css("opacity", "0.0");
        $('#produtos, #contato, #galeria').css("z-index", "30");
        $('#bv').css('transition','all 3s');
        $('#bv').css('opacity','1.0');
    });
});