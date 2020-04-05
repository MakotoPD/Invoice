const { tween, styler, delay, chain} = require('popmotion');

const hellow = document.querySelector('#hellow');
const program_name = document.querySelector('#program_name');
const btn_valuation = document.querySelector('#btn_valuation');

const anim_hellow = styler(hellow);
const anim_program_name = styler(program_name);
const anim_vauation = styler(btn_valuation);

chain(
    chain (
        tween({
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            },
            duration: 1000,
        }),
        tween({
            from: {
                top: '50%'
            },
            to: {
                top: '38%'
            },
            duration: 1000
        })
    ).start(anim_hellow.set),
    chain(
        delay(2000),
        tween({
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            },
            duration: 1000,
        })
    ).start(anim_program_name.set),
    chain(
        delay(3000),
        tween({
            from:{
                top: '40%',
            },
            to: {
                top: '3px',
            },
            duration: 1000,
        })
    ).start(anim_hellow.set),
    chain(
        delay(3050),
        tween({
            from: {
                top: '50%',
            },
            to: {
                top: '16px',
            },
            duration: 1000,
        })
    ).start(anim_program_name.set),
    chain (
        delay(4000),
        tween({
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        })
    ).start(anim_vauation.set),
);
