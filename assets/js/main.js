let a
let b
let c
let d
let e
let f
let g
let h
let i
let j
let k
let l

function playerOne() {
    console.log("working1")
    a = document.getElementById("age1").value
    console.log(a)
    console.log("working2")
    b = document.getElementById("height1").value
    console.log(b)
    console.log(typeof (a))
    console.log(typeof (b))
    a = Number(a)
    b=Number(b)
    c = a * 5 + b
    console.log(c)
    return c
}
function playerTwo() {
    console.log("working1")
    d = document.getElementById("age2").value
    console.log(d)
    console.log("working2")
    e = document.getElementById("height2").value
    console.log(e)
    e = Number(e)
    d = Number(d)
    f = d * 5 + e
    return f
}
function playerThree() {
    console.log("working1")
    g = document.getElementById("age3").value
    console.log(g)
    console.log("working2")
    h = document.getElementById("height3").value
    console.log(h)
    g = Number(g)
    h= Number(h)
    i = g * 5 + h
    return i
}
function playerFour() {
    console.log("working1")
    j = document.getElementById("age4").value
    console.log(j)
    console.log("working2")
    k = document.getElementById("height4").value
    console.log(k)
    j = Number(j)
    k=Number(k)
    l = j * 5 + k
    return l
}
function compare() {
    console.log("ok")
    if ((c > f) && (c > i) && (c > l)) {
        console.log(c)
        document.getElementById("points").innerHTML = c
        document.getElementById("winner").innerHTML = "The winner is Player 1"
    }
    else if 
        ((f > c) && (f > i) && (f > l))
        {
        document.getElementById("points").innerHTML = f
        document.getElementById("winner").innerHTML = "The winner is Player 2"
    } else if 
        ((i > c) && (i > f) && (i > l)) {
        document.getElementById("points").innerHTML = i
        document.getElementById("winner").innerHTML = "The winner is Player 3"
        
    } else if 
        ((l > c) && (l > f) && (l > i)) 
        {
        document.getElementById("points").innerHTML = l
        document.getElementById("winner").innerHTML = "The winner is Player 4"
    } else {
        document.getElementById("winner").innerHTML = "draw"
    }
    
    
}
