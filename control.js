var scores = [];


    $(document).on("keydown", function (e) {
        // use e.which
        sound(e.which);
    });




function sound(key) {
    var audio = new Audio('beat1.wav');
    var audio2 = new Audio('beat2.wav');
    if(key == 70) audio.play();
    if(key == 74) audio2.play();
}

