
import ResultBox from './ResultBox.js';
export default function createPollResults(root) {  
    
    // reference DOM

    // event listeners

    // should return its component render function
    // return ({ data }) => {
    return (props) => {
        const poll = props.poll;
        if (!poll) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');
        root.innerHTML = '';
        const resultBox = ResultBox({ poll });
        root.append(resultBox);
    };
}
