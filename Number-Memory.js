javascript:
a = document.querySelector('.number-memory-test');
setInterval(() => {
    if (e = document.querySelector('.big-number'))
        n = e.innerHTML;
    if (o = document.querySelector('input'))
        o.value = n,
        o[Object.keys(o).filter(k => k.startsWith('__reactEventHandlers'))].onChange({target: {value: n}});
    a.querySelector('button')?.click();
}, 10);
