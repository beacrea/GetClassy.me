/*
 * -------------------------------------------
 *	$_DATA MODELS
 * -------------------------------------------
 */
var songModel = [
    {
        list: true,
        code: 'defaultjazz',
        ytID_list: 'PL-4U2d6ASRHn-h6UdaKkKnaAhg2T2kxAj',
        ytID: 'sCQfTNOC5aE'
    },
    {
        list: false,
        code: 'shoulda',
        artist: 'Jamie Woon',
        song: 'Shoulda',
        ytID: 'oUm4MHEeFCY'
    },
    {
        list: false,
        code: 'sexheal',
        artist: 'Hot Chip',
        song: 'Sexual Healing Cover',
        ytID: 'kYt_TDcIPT0'
    },
    {
        list: false,
        code: 'whisper',
        artist: 'George Michael',
        song: 'Careless Whisper',
        ytID: 'Qu2FWrEilWQ',
        start: 123
    }
];

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

$.preloadImages("img/app/rainAnim.gif","img/app/fireAnim.gif");

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

var ytLoad = function(videoID, listID, start) {
    $('#ytPlayer')
        .attr('src', '//www.youtube.com/embed/' + videoID +
            '?autoplay=1&showinfo=1&rel=0&fs=0&start=' + start + '&list=' + listID);
};

// Load Default Music or Pull From URL Param
$(function() {
    var url = getParameterByName('v');
    if (url !== "" ) {
        ytLoad(url, '');
    } else {
        chooseSong('defaultjazz');
    }
});

/*
 * -------------------------------------------
 *	$_SONG CONTROL
 * -------------------------------------------
 */

// Load Preset Songs
function chooseSong(code, start) {
    // Match Code to Model
        // Check If List
            // If List, Pass ID
            // Else, Pass Empty
    // Load Video & Params
    // Update Background
    var listID = '';
    var d = songModel;
    for(var i = 0; i < d.length; i++) {
        if(d[i].code == code)
        {
            if (d[i].list === true) {
                listID = d[i].ytID_list;
            }
            if (d[i].start !== undefined) {
                start = d[i].start;
            }
            ytLoad(d[i].ytID, listID, start);
            console.log('Loaded Song. Starting at ' + start + ' seconds.');
            return true;
        }
    }
}