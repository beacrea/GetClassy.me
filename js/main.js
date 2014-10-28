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
        $('#ytPlayer').attr('src', '//www.youtube.com/embed/' + videoID + '?list=' + listID + '&autoplay=1&showinfo=1&rel=0&fs=0');
    } else {
        $('#ytPlayer').attr('src', '//www.youtube.com/embed/' + videoID + '&autoplay=1&showinfo=1&rel=0&fs=0');
    }

};

// Load Default Music or Pull From URL Param
$(function() {
    var url = getParameterByName('v');
    if (url !== "" ) {
        ytLoad(url, '');
    } else {
        ytLoad('sCQfTNOC5aE', 'PL-4U2d6ASRHn-h6UdaKkKnaAhg2T2kxAj');
    }
});

/*
 * -------------------------------------------
 *	$_EASTEREGGS
 * -------------------------------------------
 */

// TODO: Set this up as a function with a model
var eastereggs = function() {
    console.log(
        'The following commands will play various songs.\n' +
        '===============================================\n' +
        'ocean() = Frank Ocean\'s "Thinking About You"\n' +
        'shoulda() = Jamie Woon\'s "Shoulda"\n' +
        'sexualheal() = Hot Chip\'s "Sexual Healing"\n' +
        'whisper() = George Michael\'s "Careless Whisper - Remix"'
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
var whisper = function() {
    $('#ytPlayer').attr('src', '//www.youtube.com/embed/Qu2FWrEilWQ?start=123&autoplay=1');
};