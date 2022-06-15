export default function ResultBox(props) {

    const poll = props.poll;

    const div = document.createElement('div');
    div.classList.add('result-box');

    const span1 = document.createElement('span');
    span1.classList.value = 'prompt';
    span1.textContent = poll.prompt;
    
    const span2 = document.createElement('span');
    span2.classList.value = 'option a';
    span2.textContent = poll.optionA.name;

    const span3 = document.createElement('span');
    span3.classList.value = 'tally a';
    span3.textContent = poll.optionA.tally;

    const span4 = document.createElement('span');
    span4.classList.value = 'option b';
    span4.textContent = poll.optionB.name;

    const span5 = document.createElement('span');
    span5.classList.value = 'tally b';
    span5.textContent = poll.optionB.tally;
    

    div.append(span1, span2, span3, span4, span5);

    return div;
}