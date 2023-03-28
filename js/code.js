$(function () {

    //nav fixed on scroll

    $(window).scroll(function (){

        let scrTop = $(window).scrollTop();

        console.log(scrTop);

        if (scrTop >= 100) {

            $(".nav_section").addClass("navFixed");

        } else {
            $(".nav_section").removeClass("navFixed");
        }



    });

});