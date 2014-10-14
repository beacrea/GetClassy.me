/*
 * -------------------------------------------
 *	$_PRELOAD IMAGES
 * -------------------------------------------
 */
$.preloadImages = function() {
    for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
    }
};

$.preloadImages("../img/app/rainAnim.gif","../img/app/fireAnim.gif");

/*
 * -------------------------------------------
 *	$_URL PARAM LOADER
 * -------------------------------------------
 */

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


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


/*
 * -------------------------------------------
 *	$_AUDIO LAYER CONTROL
 * -------------------------------------------
 */

var ytLoad = function(videoID, listID) {
    if (typeof listID !== 'undefined' ) {
        $('#ytPlayer').attr('src', '//www.youtube.com/embed/' + videoID + '?list=' + listID + '&autoplay=1');
    } else {
        $('#ytPlayer').attr('src', '//www.youtube.com/embed/' + videoID + '&autoplay=1');
    }

};

// Default Music
ytLoad('sCQfTNOC5aE', 'PL-4U2d6ASRHn-h6UdaKkKnaAhg2T2kxAj');

$(function() {
    var url = getParameterByName('ytID');
    if (typeof listID !== 'undefined' ) {
        ytLoad(getParameterByName('ytID'), '');
    }
});

/*
 * -------------------------------------------
 *	$_EASTEREGGS
 * -------------------------------------------
 */

var eastereggs = function() {
    console.log(
        'The following commands will play various songs.\n' +
        '===============================================\n' +
        'ocean() = Frank Ocean\'s "Thinking About You"\n' +
        'shoulda() = Jamie Woon\'s "Shoulda"\n' +
        'sexualheal() = Hot Chip\'s "Sexual Healing"'
    );
};
var ocean = function() {
    ytLoad('wD8nAt2xJZM', '');
};

var shoulda = function() {
    ytLoad('oUm4MHEeFCY', '');
};

var sexualheal = function() {
    ytLoad('kYt_TDcIPT0', '');
};