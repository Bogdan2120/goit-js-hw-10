var t;(t="USA",fetch(`https://restcountries.com/v3.1/name/${t}`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))).then((t=>{console.log(t)})).catch((t=>{}));
//# sourceMappingURL=index.69513f64.js.map
