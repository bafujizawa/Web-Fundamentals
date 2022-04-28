var video = document.getElementById("main-video")

function playPause()
{
    if(video.paused)
    {
        video.play();
    }
    else
    {
        video.pause();
    }
}

var i = 0;
function moveScrubber()
{
    if(i == 0)
    {
        i = 1;
        var elem = document.getElementById("scrubber");
        var width = 1;
        var id = setInterval(frame, 12900);
        function frame()
        {
            if(width >= 100)
            {
                clearInterval(id);
                i = 0;
            }
            else
            {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}

function muteAudio()
{
    var audio = document.getElementById('audioPlayer');
    if (audio.mute = false)
    {
        audio.muted = true;
    }
    else
    {
        audio.mute
    }
}

function over(elem)
    {
        elem.play();
    }

function out(elem)
    {
        elem.pause();
    }


