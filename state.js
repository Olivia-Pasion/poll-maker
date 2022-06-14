// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    state.poll =
    
    {
       
        pollPrompt: 'prompt',
        optionA: { name:'option a', tally: 0 },
        optionB: { name:'option b', tally: 0 },
    
    };

    state.pastPolls = [];
    

}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state

