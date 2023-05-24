javascript:var target = parseInt(prompt("Enter your desired score (max 41)"));
if(target > 0){
    for(var i = 1; i <= Math.min(target, 41)-4; i++){
        for(var j = 1; j <= i+3; j++) document.querySelector(`[data-cellnumber='${j}']`).click();
        if(i < 41) document.getElementsByClassName("css-de05nr e19owgy710")[0].click()
    }
}
