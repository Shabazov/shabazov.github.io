$(document).ready(function(){
        $('#my-slide').DrSlider({
            width: 300,
            height: 240,
            showNavigation: false,
            showProgress: false,
            transition: 'door',
        });

        $('#my-slide2').DrSlider({
            width: 300,
            height: 240,
            showNavigation: false,
            showProgress: false,
            transition: 'wave',
        });

        $('#my-slide3').DrSlider({
            width: 300,
            height: 240,
            showNavigation: false,
            showProgress: false,
            transition: 'split3d',
        });
    });
