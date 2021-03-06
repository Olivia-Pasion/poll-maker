// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    state.poll = null;

    state.pastPolls = [];
    

}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state

export function startPoll(prompt, optionA, optionB) {
    state.poll = {
        prompt: prompt,
        optionA: { name: optionA, tally: 0 },
        optionB: { name: optionB, tally: 0 },
    };
}

export function upVote(option) {
    if (option === 'A') {
        state.poll.optionA.tally++;
    }
    if (option === 'B') {
        state.poll.optionB.tally++;
    }
}

export function downVote(option) {
    if (option === 'A') {
        state.poll.optionA.tally--;
    }
    if (option === 'B') {
        state.poll.optionB.tally--;
    }
}

export function closePoll() {
    state.pastPolls.push(state.poll);
    state.poll = null;
}