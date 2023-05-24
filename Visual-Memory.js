javascript: document.getElementsByClassName("css-de05nr e19owgy710")[0].dispatchEvent(new Event('mousedown', {bubbles:true}));;
target = parseInt(prompt("Enter your desired score: "));
if(target > 0){
    var x = new MutationObserver((ml) => {
        for (const m of ml) {
            if(m.target == document.getElementsByClassName("css-dd6wi1")[0].childNodes[1].childNodes[0]){
                if(parseInt(m.target.data) == target) x.disconnect();
            }
            if (m.type === "attributes" && m.attributeName == "class" && m.target.className != "active css-lxtdud eut2yre1") m.target.dispatchEvent(new Event('mousedown', {bubbles:true}));
        }
    });
    x.observe(document.getElementsByClassName("css-hvbk5q eut2yre0")[0], {attributes: true, subtree: true});
    x.observe(document.getElementsByClassName("css-dd6wi1")[0].childNodes[1].childNodes[0], {characterData:true});
}
