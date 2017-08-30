(function() {

    function getParameterByName(name, url) {
        if (!url) {
          url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    var bpm = getParameterByName("bpm", null);
    
    if (bpm !== 'Null' && bpm !== null && bpm !== "") {
        document.getElementById("bpm-output").innerHTML = bpm;
        document.getElementById("info").innerHTML = "Your heart rate is " + bpm + " beats per minute.";
        var duration = round((60/bpm), 2) + "s";
        document.getElementById("bpm-container").style.WebkitAnimation = "heartbeat " + duration + " infinite";
    }

})();
