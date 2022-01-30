$(document).ready(function () {
    $(document).scroll(function () { 
        let wy = window.scrollY;
        if(wy > 200){
            $("header").addClass("scroll")
        }else{
            $("header").removeClass("scroll")
        }
    });

    $(".right").click(function (e) { 
        anime({
            targets: ".carrusel",
            translateX: -1200
        });

        let x = $(this).parent();
        console.log("CLick carrusel", x);
    });

});