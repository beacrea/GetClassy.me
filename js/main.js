/*
 * -------------------------------------------
 *	$_AUDIO LAYER CONTROL
 * -------------------------------------------
 */
var audioLayerToggle = function(audioSource) {
    $('.wrapper_' + audioSource).click(function() {
        if ($(this).hasClass('active')) {
            document.getElementById('audio_' + audioSource).play();
        } else {
            document.getElementById('audio_' + audioSource).pause();
        }
    });
};

$('.wrapper_rain, .wrapper_fire').click(function() {
    $(this).toggleClass('active');
});

audioLayerToggle('rain');
audioLayerToggle('fire');