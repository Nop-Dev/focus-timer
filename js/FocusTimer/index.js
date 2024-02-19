import state from './state.js'

console.log(state);

export function start(seconds, minutes) {
    state.minutes = minutes;
    state.seconds = seconds;
};