'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () =>{
        const results = 
        ['明るい','ゆうきのある','前むき','元気','たくましい','いじわる','そそっかしい','どりょく家','ちえのある','気が弱い','親切',
            'やさしい','思いやりのある','しっかりもの','しょうじき','がまん強い','こわがり','いじっぱり','おだやか','ひょうきん']

        btn.textContent = results[Math.floor(Math.random() * results.length)];
    });
}
