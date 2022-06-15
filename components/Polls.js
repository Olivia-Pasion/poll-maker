import ResultBox from './ResultBox.js';

export default function createPolls(root) {

    const container = root.querySelector('.polls-container');

    return (props) => {
        const polls = props.polls;

        container.innerHTML = '';

        for (const poll of polls) {
            const resultBox = ResultBox({ poll });
            container.append(resultBox);
        }

    };

}