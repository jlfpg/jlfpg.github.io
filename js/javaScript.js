//Variables globales
var nl00 = 0;
var nl01 = 0;
var nl10 = 0;
var nl11 = 0;
var nRondas = 0;
var dif = 0;
var nrand = 0;
var ul = 2;
var pu = 0;
var pm = 0;
var ulc0 = 2;
var ulc1 = 2;
var myAudio  = new Audio('music/ira.mp3');
var md = new Audio('sounds/derrota.mp3');
var me = new Audio('sounds/empate.mp3');

//Funciones 
function musica() {

}

function comenzar() {
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();
    myAudio.volume = 0.1;

    $("#div1").fadeOut();
    $("#tit").fadeOut();
    $("#titu").fadeIn();
    $("#div2").fadeIn();
    $("#div3").fadeIn();

    nRondas = document.getElementById('nRondas').value;
    dif = document.getElementById("dif").value;
    rand();
}

function rand() {
    nrand = Math.floor(Math.random() * 2);
}

function clickCero() {
    if (dif == 0) {
        if (ul == 2) {
            if (nrand == 0) {
                pm++;
            } else {
                pu++;
            }
        } else {
            if (ul == 0) {
                nl00++;
            } else if (ul == 1) {
                nl01++;
            }
            if (nrand == 0) {
                pm++;
            } else {
                pu++;
            }
        }
    } else {
        if (ul == 2) {
            if (nrand == 0) {
                pm++;
            } else {
                pu++;
            }
        } else {
            if (ul == 0) {
                nl00++;
            } else if (ul == 1) {
                nl01++;
            }
            if (nrand == 0) {
                pm++;
            } else {
                pu++;
            }
        }

    }
    ulc0--;
    nRondas--;
    gameOver();
}

function clickUno() {
    if (dif == 0) {
        if (ul == 2) {
            if (nrand == 1) {
                pm++;
            } else {
                pu++;
            }
        } else {
            if (ul == 0) {
                nl10++;
            } else if (ul == 1) {
                nl11++;
            }
            if (nrand == 1) {
                pm++;
            } else {
                pu++;
            }
        }
    } else {
        if (ul == 2) {
            if (nrand == 1) {
                pm++;
            } else {
                pu++;
            }
        } else {
            if (ul == 0) {
                nl10++;
            } else if (ul == 1) {
                nl11++;
            }
            if (nrand == 1) {
                pm++;
            } else {
                pu++;
            }
        }
    }
    ulc1--;
    nRondas--;
    gameOver();
}

function gameOver() {
    document.getElementById('pj').innerHTML = pu;
    document.getElementById('pm').innerHTML = pm;
    document.getElementById('rr').innerHTML = nRondas;
    $("#res").fadeIn();
    if (pu > pm) {
        $("#vu").fadeIn();
    } else {
        $("#vm").fadeIn();
    }
    $("#titu").fadeOut();
    $("#div2").fadeOut();
    $("#div3").fadeOut();
    $("#result").fadeIn();
    $("#resultR").fadeIn();
    $("#rr").fadeIn();
    if (nRondas == 0) {
        setTimeout(function() {
            $("#result").fadeIn();
            $("#rf").fadeIn();
            if (pu > pm) {
                $("#vm").fadeOut();
                $("#vu").fadeIn();
                mv.play();
            } else if (pu < pm) {
                $("#vu").fadeOut();
                $("#vm").fadeIn();
                md.play();
            } else {
                $("#vm").fadeOut();
                $("#vu").fadeOut();
                $("#em").fadeIn();
                me.play();
            }
            $("#result").fadeIn();
            $("#res").fadeOut();
            $("#resultR").fadeOut();
            $("#rr").fadeIn();
            $("#btnsEnd").fadeIn();

        }, 4000);
    } else {
        decision();
        esperar();
    }
}

function esperar() {
    setTimeout(function() {
        $("#result").fadeOut();
        $("#res").fadeOut();
        $("#vu").fadeOut();
        $("#vm").fadeOut();
        $("#resultR").fadeOut();
        $("#rr").fadeOut();
        $("#titu").fadeIn();
        $("#div2").fadeIn();
        $("#div3").fadeIn();
    }, 5000);
}

function decision() {
    if (dif == 0) {

    } else {
        if (ul == 0) {
            if (nl10 > nl00) {
                nrand = 1;
            } else if (nl10 < nl00) {
                nrand = 0;
            } else {
                rand();
            }
        } else if (ul == 1) {
            if (nl11 > nl01) {
                nrand = 1;
            } else if (nl10 < nl00) {
                nrand = 0;
            } else {
                rand();
            }
        }
    }
    ulcamb();
}

function ulcamb() {
    if (ulc0 == 1) {
        ul = 0;
        ulc0++;

    } else if (ulc1 == 1) {
        ul = 1;
        ulc1++;
    }
    if (dif == 0) {
        rand();
    }
}

function again() {
    window.location.reload();
}

function clos() {
    window.location = "http://www.google.es/";
}