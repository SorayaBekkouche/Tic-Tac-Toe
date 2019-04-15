
// afficher une croix au click
// document.getElementsByClassName('testMyDiv')[0]
// .addEventListener('click', function (event) {
// do something
// });


let player = 1;



function switchSign(line){
    player = player + 1
    if(player % 2 === 0){
        let sign = "X"
        placeSign(sign, line)
    }
    else{
        let sign = "O"
        placeSign(sign, line)
    }
}

function placeSign(sign, line) {
    let allCases = document.querySelectorAll(".square")
    let cases = allCases[line]
    cases.innerHTML = sign
    win(allCases)
}

function win(allCases){
    test(allCases[0], allCases[1], allCases[2])
    test(allCases[3], allCases[4], allCases[5])
    test(allCases[6], allCases[7], allCases[8])
    test(allCases[0], allCases[3], allCases[6])
    test(allCases[1], allCases[4], allCases[7])
    test(allCases[2], allCases[5], allCases[8])
    test(allCases[0], allCases[4], allCases[8])
    test(allCases[2], allCases[4], allCases[6])
    equality(allCases)
}

function test(a,b,c){
    if(a.innerHTML === "X" && b.innerHTML === "X" && c.innerHTML === "X"){
        alert("bien ouej")
        resetGame()
    }
    else if(a.innerHTML === "O" && b.innerHTML === "O" && c.innerHTML === "O"){
        alert("bien ouej")
        resetGame()
    }
}

function equality(allCases) {
    if(allCases[0].innerHTML !== "" && allCases[1].innerHTML !=="" && allCases[2].innerHTML !=="" && allCases[3].innerHTML !=="" && allCases[4].innerHTML !=="" && allCases[5].innerHTML !=="" && allCases[6].innerHTML !=="" && allCases[7].innerHTML !=="" && allCases[8].innerHTML !==""){
        alert("égalité poto")
        resetGame()
    }
}


function resetGame(){
    let allCases = document.querySelectorAll(".square")
    for (let i = 0; i <=8 ; i++){
        allCases[i].innerHTML = ""
    }
}
