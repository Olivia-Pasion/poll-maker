import state, {
    downVote,
    initialize,
    // import dispatch functions
    startPoll,
    upVote,
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('start poll creates poll from options', (expect) => {
    // what is the initial expected state?
    expect.equal(state.poll, null);
    // use the action
    startPoll('hi', 'yes', 'no');
    // what should the state be now?
    expect.deepEqual(state.poll, {
        prompt: 'hi',
        optionA: { name:'yes', tally: 0 },
        optionB: { name:'no', tally: 0 },
    });

    // remove this line when starting your test
    
});

test('score tally for option a and/or b', (expect) => {

    startPoll('hi', 'yes', 'no');

    upVote('A');
    upVote('B');

    expect.deepEqual(state.poll, {
        prompt: 'hi',
        optionA: { name:'yes', tally: 1 },
        optionB: { name:'no', tally: 1 },
    });

});

test('down vote removes tally from a and/or b', (expect) =>{
    
    startPoll('hi', 'yes', 'no');

    upVote('A');
    upVote('B');
    downVote('B');

    expect.deepEqual(state.poll, {
        prompt: 'hi',
        optionA: { name:'yes', tally: 1 },
        optionB: { name:'no', tally: 0 },
    });
   
});