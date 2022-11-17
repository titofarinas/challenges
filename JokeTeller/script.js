const button = document.getElementById('button');
const audioElement = document.getElementById('audio');


const api = '15b64b8304074d6a973483cbb5f65694';

function test() {
    VoiceRSS.speech({
        key: api,
        src: 'Turno 25, ventanilla 1',
        hl: 'es-es',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });  
}

test();