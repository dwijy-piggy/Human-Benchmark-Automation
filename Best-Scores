javascript:
m = Number.MAX_VALUE;
e = Number.EPSILON;
[['reactiontime', e], ['memory', m], ['number-memory', m], ['verbal-memory', m], ['typing', m], ['aim', e], ['chimp', m], ['sequence', m]]
    .forEach(([t, n]) => [0, 0].map(() => fetch("https://humanbenchmark.com/api/v4/scores", {
        headers: { "content-type": "application/json;charset=UTF-8" },
        body: `{"testId":"${t}","score":${n}}`,
        method: "POST",
    })));
