function timer()
{
    nextJRY = getNextJRYTime().getTime()
    jry = false
    // shamelessly stolen from https://www.w3schools.com/howto/howto_js_countdown.asp
    // ff lasts 37200 seconds
    var x = setInterval(function() {
        var now = Date.now()

        var distance = nextJRY - now
        //console.log(distance / 1000)
        rtc = ((distance / 1000) - 409200)
        //console.log (rtc)
        if ((rtc < 3600) && (rtc > 0))
        {
            jry = true
        }
        else
        {
            jry = false
        }
        if (jry && document.getElementById("qbm").style.backgroundImage != "url(assets/images/bg_jry.png)")
        {
            document.getElementById("qbm").style.backgroundImage = "url(assets/images/bg_jry.png)"
            document.getElementById("is-jry").innerHTML = "💦 Jerrys Workshop is open 💦"
        }
        else
        {
            document.getElementById("qbm").style.backgroundImage = "url(assets/images/bg.png)"
            document.getElementById("is-jry").innerHTML = "Jerrys Workshop will open in"

        }
        
        if (!jry)
        {
            var days =  Math.floor(distance / 86400000);
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),2);
            var seconds = pad(Math.floor((distance % (1000 * 60)) / 1000),2);
            var hts = minutes + "m " + seconds + "s ";
            var tts = minutes + "m " + seconds + "s "
            astr = ""
            if (days != 0)
            {
                astr = astr +  days + "d "
            }
            if (hours != 0)
            {
                astr = astr + hours + "h "
            }
            if (astr != "")
            {
                tts = astr + tts
                hts = astr + hts
            }
            document.getElementById("timer").innerHTML = hts;
            document.title = "JRY: " + tts;
        }
        else
        {
            var rt = distance - (409200 * 1000)
            console.log(rt / 1000)
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((rt % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((rt % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = + hours + "h "  + minutes + "m " + seconds + "s ";
            document.title ="💦 JRY: " + hours + "h " + minutes + "m " + seconds + "s ";
        }


        if (distance <= 0)
        {
            nextjry = getNextjryTime()
        }
    }, 1000)
}

// https://stackoverflow.com/a/10073788
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }