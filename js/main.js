/*
 * -------------------------------------------
 *	$_DATA MODELS
 * -------------------------------------------
 */
var songModel = [
    {
        list: true,
        code: 'default',
        ytID_list: 'PL-4U2d6ASRHn-h6UdaKkKnaAhg2T2kxAj',
        ytID: 'j0Jb72PZAls',
        bg: 'defaultjazz2.gif'
    },
    {
        list: false,
        code: 'nosunshine',
        artist: 'Lighthouse Family',
        song: 'Ain\'t No Sunshine',
        ytID: '3PW9kKBQqy4',
        bg: 'sunset.gif'
    },
    {
        list: false,
        code: 'blueeyes',
        artist: 'ZZ Ward',
        song: 'Blue Eyes Blind',
        ytID: 'NQjONsUDCm8',
        bg: 'blueeyes.gif'
    },
    {
        list: false,
        code: 'whisper',
        artist: 'George Michael',
        song: 'Careless Whisper',
        ytID: 'Qu2FWrEilWQ',
        start: 123,
        bg: 'jazz.gif'
    },
    {
        list: false,
        code: 'hattip',
        artist: 'Eric B. & Rakim',
        song: 'Don\'t Sweat The Technique',
        ytID: '6Y1Emb7Jyks',
        bg: 'hattip.gif'
    },
    {
        list: false,
        code: 'nightlight',
        artist: 'Jessie Ware',
        song: 'Night Light',
        ytID: 'YyY5upiRO8Q',
        bg: 'nightlight.gif'
    },
    {
        list: false,
        code: 'sexheal',
        artist: 'Hot Chip',
        song: 'Sexual Healing Cover',
        ytID: 'kYt_TDcIPT0',
        bg: 'sexheal.gif'
    },
    {
        list: false,
        code: 'shoulda',
        artist: 'Jamie Woon',
        song: 'Shoulda',
        ytID: 'oUm4MHEeFCY',
        bg: 'shoulda.gif'
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

$.preloadImages(
    "img/app/rainAnim.gif",
    "img/app/fireAnim.gif",
    "img/app/jazz.gif",
    "img/app/sexualheal.gif",
    "img/app/shoulda.gif",
    "img/app/defaultjazz2.gif",
    "img/app/blueeyes.gif",
    "img/app/sunset.gif",
    "img/app/nightlight.gif",
    "img/app/hattip.gif"
);

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
    var start = getParameterByName('start');
    if (url !== "" ) {
        ytLoad(url, '', start);
    } else {
        chooseSong('default');
    }
});

// Load Presets To Page
$(function() {
    var d = songModel;
    for(var i = 0; i < d.length; i++) {
        if(d[i].list == false)
        {
            $('.presets').append(
                    '<a data-song=' + d[i].code + '>' +
                        '<span class="song_title">' + d[i].song + '</span>' +
                        ' by ' + d[i].artist +
                        '</a>');
        }
    }
    $('.presets a').on('click', function(){
        chooseSong($(this).data('song'));
    });
});

/*
 * -------------------------------------------
 *	$_SONG CONTROL
 * -------------------------------------------
 */

// Load Preset Songs
function chooseSong(code, start) {
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
            if (d[i].bg !== undefined) {
                $('.bgOverlay').css('background-image', 'url(img/app/' + d[i].bg + ')');
            }
            ytLoad(d[i].ytID, listID, start);
            console.log('Loaded Song. Starting at ' + start + ' seconds.');
            return true;
        }
    }
}