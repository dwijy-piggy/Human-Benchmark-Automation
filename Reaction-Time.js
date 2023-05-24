javascript:document.getElementsByClassName("css-42wpoy e19owgy79")[0].dispatchEvent(new Event('mousedown', {bubbles:true}));
new MutationObserver((ml) => {
    for (const m of ml) {
        if (m.type === "attributes" && m.attributeName == "class" && m.target.className == "view-go e18o0sx0 css-saet2v e19owgy77") m.target.dispatchEvent(new Event('mousedown', {bubbles:true}));
    }
}).observe(document.getElementsByClassName("view-waiting e18o0sx0 css-saet2v e19owgy77")[0], {attributes: true, subtree: true});
