var h = []



for (f = 0; f < 1; f++) {
    const w = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const w1 = Math.floor(Math.random() * w.length);
    const nog = w[w1]
    h.push(nog)

}

for (f1 = 0; f1 < 1; f1++) {
    const w2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const w1 = Math.floor(Math.random() * w2.length);
    const nog1 = w2[w1]
    h.push(nog1)
}

for (f3 = 0; f3 < 1; f3++) {
    const w8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const w33 = Math.floor(Math.random() * w8.length);
    const nog3 = w8[w33]
    h.push(nog3)
}

for (f4 = 0; f4 < 1; f4++) {
    const w5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const w4 = Math.floor(Math.random() * w5.length);
    const nog4 = w5[w4]
    h.push(nog4)
}

console.log(h)
var h2 = h.join("")
document.getElementById("thepassword").innerText = h2




bt.onclick = function main1() {
    var x = document.getElementById("inp").value;

    if (x == 1) {
        main.style.visibility = "hidden";
        pct.style.visibility = "hidden";
        game.style.visibility = "hidden"
        pas.style.visibility = "visible";
    } else if (x == 2) {
        main.style.visibility = "hidden";
        pas.style.visibility = "hidden";
        game.style.visibility = "hidden"
        pct.style.visibility = "visible";

    } else if (x == "game") {
        main.style.visibility = "hidden";
        pas.style.visibility = "hidden";
        game.style.visibility = "visible"
        pct.style.visibility = "hidden";
    }

    else {
        document.getElementById("tex").innerText = "wrong input"
    }
}

let sc = 3;
function ss() {

}
pasbt.onclick = function pas1() {


    var x = document.getElementById("pasinp").value;




    if (x == "main") {
        pas.style.visibility = "hidden";
        pct.style.visibility = "hidden";
        game.style.visibility = "hidden"
        main.style.visibility = "visible";

    } else if (x == h2) {
        document.getElementById("pastex").innerText = "Well Done Hacker"
    } else {
        --sc;
        document.getElementById("thepasswordedit").innerText = ("Type the password you have" + " " + sc + " " + "trys")

        document.getElementById("pastex").innerText = ("wrong password")

    }

    if (sc == 0) {
        pas.style.visibility = "hidden";
        pct.style.visibility = "hidden";
        game.style.visibility = "hidden"
        main.style.visibility = "hidden";
        document.getElementById("ddd").innerHTML = ` <center>

        <h1 style="color: red;"> You faild as a noob hacker </h1>


    </center>`

        setTimeout(function () { history.go(0) }, 2500)
    }


}


pctbt.onclick = function pct1() {

    var x = document.getElementById("pctinp").value;
    var pin1 = document.getElementById("te1").innerText;
    var pin2 = document.getElementById("te2").innerText;
    var pin3 = document.getElementById("te3").innerText;
    var pin4 = document.getElementById("te4").innerText;

    if (x == "main") {
        pas.style.visibility = "hidden";
        pct.style.visibility = "hidden";
        game.style.visibility = "hidden"
        main.style.visibility = "visible";

    } else if (x == h[0] && pin1 == 0 && pin2 == 0 && pin3 == 0 && pin4 == 0) {
        document.getElementById("te1").innerText = x;
        document.getElementById("te0").innerText = "";
    } else if (x > h[0] && pin1 == 0 && pin2 == 0 && pin3 == 0 && pin4 == 0) {
        document.getElementById("te0").innerText = "smaller";
    } else if (x < h[0] && pin1 == 0 && pin2 == 0 && pin3 == 0 && pin4 == 0) {
        document.getElementById("te0").innerText = "bigger";
    }

    if (x == h[1] && pin1 == h[0] && pin2 == 0 && pin3 == 0 && pin4 == 0) {
        document.getElementById("te2").innerText = x;
        document.getElementById("te0").innerText = "";
    } else if (x > h[1] && pin1 == h[0] && pin2 == 0 && pin3 == 0 && pin4 == 0) {
        document.getElementById("te0").innerText = "smaller";
    } else if (x < h[1] && pin1 == h[0] && pin2 == 0 && pin3 == 0 && pin4 == 0) {
        document.getElementById("te0").innerText = "bigger";
    }


    if (x == h[2] && pin1 == h[0] && pin2 == h[1] && pin3 == 0 && pin4 == 0) {
        document.getElementById("te3").innerText = x;
        document.getElementById("te0").innerText = "";
    } else if (x > h[2] && pin1 == h[0] && pin2 == h[1] && pin3 == 0 && pin4 == 0) {
        document.getElementById("te0").innerText = "smaller";
    } else if (x < h[2] && pin1 == h[0] && pin2 == h[1] && pin3 == 0 && pin4 == 0) {
        document.getElementById("te0").innerText = "bigger";
    }


    if (x == h[3] && pin1 == h[0] && pin2 == h[1] && pin3 == h[2] && pin4 == 0) {
        document.getElementById("te4").innerText = x;
        document.getElementById("te0").innerText = "Well done now go type the password!";
    } else if (x > h[3] && pin1 == h[0] && pin2 == h[1] && pin3 == h[2] && pin4 == 0) {
        document.getElementById("te0").innerText = "smaller";
    } else if (x < h[3] && pin1 == h[0] && pin2 == h[1] && pin3 == h[2] && pin4 == 0) {
        document.getElementById("te0").innerText = "bigger";
    }
}



///////////////the scret game 










function if1() {
    const g = [1, 2, 3];
    const random = Math.floor(Math.random() * g.length);
    const rand_g = g[random];

    return rand_g
}

function if3() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var random_a = Math.floor(Math.random() * a.length);
    var rand_a = a[random_a];

    return rand_a
}

function if4() {
    const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var random_b = Math.floor(Math.random() * b.length);
    var rand_b = b[random_b];

    return rand_b
}
if1()
if3()
if4()


gamebt.onclick = function secr() {

    document.getElementById("gamebt").style.marginLeft = "0"
    document.getElementById("gamebt").innerText = "Enter"


    var answer = document.getElementById("answergmae").value;
    var ans = document.getElementById("trueorfalse")
    var ss = document.getElementById("somthing1").innerText;


    var wh1 = document.getElementById("somthing1")



    var rg = if1()
    var ra = if3()
    var rb = if4()





    if (rg == 1) {
        console.log(ra + rb + "im 1")
        wh1.innerText = `${ra + rb}`
    } else if (rg == 2) {
        console.log(ra - rb + "im 2")
        wh1.innerText = `${ra - rb}`
    } else if (rg == 3) {
        console.log(ra * rb + "im 3")
        wh1.innerText = `${ra * rb}`
    } else {
        stop
    }



    if (rg == 1) {
        document.getElementById("somthing").innerText = "+"
    } else if (rg == 2) {
        document.getElementById("somthing").innerText = "-"
    } else if (rg == 3) {
        document.getElementById("somthing").innerText = "x"
    }


    var qu = document.getElementById("gametext")
    var wh = document.getElementById("somthing").innerText


    qu.innerText = `${ra} ${wh} ${rb}`















    if (answer == ss) {
        ans.innerText = "Good"
        setTimeout(function () {
            if1()
            if3()
            if4();
        }, 600)
    } else if (answer == "main") {
        pas.style.visibility = "hidden";
        pct.style.visibility = "hidden";
        game.style.visibility = "hidden"
        main.style.visibility = "visible";
    } else {
        ans.innerText = "Nuu uhh ur badd"
        setTimeout(function () {
            if1()
            if3()
            if4();
        }, 600)

    }





}

