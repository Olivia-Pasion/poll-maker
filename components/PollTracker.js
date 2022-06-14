



export default function createPollTracker(root) {  
    
    // reference DOM
    const [optionADisplay, optionBDisplay] = root.querySelectorAll('span')
    // event listeners

    // should return its component render function
    // return ({ data }) => {
    return (props) => {
        const poll = props.poll;
        if (!poll) {
            root.classList.add('hidden');
            //console.log('hello');
        }

        root.classList.remove('hidden');

        optionADisplay.textContent = poll.optionA.name;
        optionBDisplay.textContent = poll.optionB.name;
        
    };
}