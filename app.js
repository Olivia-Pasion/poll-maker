// import utilities

// import component creators
import createStartPoll from './components/StartPoll.js';
import createPollTracker from './components/PollTracker.js';
import createPollResults from './components/PollResults.js';
import createPolls from './components/Polls.js';

// import state and dispatch functions
import state, { closePoll, downVote, startPoll, upVote } from './state.js';

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

const PollResults = createPollResults(document.querySelector('#poll-results'));

const PollTracker = createPollTracker(document.querySelector('#poll-tracker'), {
    handleUpVote: (option) => {
        upVote(option);
        display();
    },
    handleDownVote: (option) => {
        downVote(option);
        display();
    },
    handleClosePoll: () => {
        closePoll();
        display();

    }
});

const StartPoll = createStartPoll(document.querySelector('#new-poll'), {
    handleStartPoll: (prompt, optionA, optionB) => {
        startPoll(prompt, optionA, optionB);
        display();
    }
});

const Polls = createPolls(document.querySelector('#past-polls'));
// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    
    StartPoll({ poll: state.poll });
    PollResults({ poll: state.poll });
    PollTracker({ poll: state.poll });
    Polls({ polls: state.pastPolls });

}

// Call display on page load
display();
