



export default function createPollTracker(root, dispatch) {  
    const handleUpVote = dispatch.handleUpVote;
    const handleDownVote = dispatch.handleDownVote;

    // reference DOM
    const [optionADisplay, optionBDisplay] = root.querySelectorAll('span');
    const [upVoteA, downVoteA, upVoteB, downVoteB, closePoll] = root.querySelectorAll('button');
    // event listeners

    upVoteA.addEventListener('click', () => {
        handleUpVote('A');
    });

    downVoteA.addEventListener('click', () =>{
        handleDownVote('A');
    });

    upVoteB.addEventListener('click', () => {
        handleUpVote('B');
    });

    downVoteB.addEventListener('click', () => {
        handleDownVote('B');
    });

    // closePoll.addEventListner('click', () = {
    //     handle
    // })
    

    // should return its component render function
    // return ({ data }) => {
    return (props) => {
        const poll = props.poll;
        if (!poll) {
            root.classList.add('hidden');
            
        } else {

            root.classList.remove('hidden');
        }

        optionADisplay.textContent = poll.optionA.name;
        optionBDisplay.textContent = poll.optionB.name;
        
    };
}