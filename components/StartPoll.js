
export default function createStartPoll(root, handlers) {
    
    const handleStartPoll = handlers.handleStartPoll;
    // reference DOM
    const form = root.querySelector('form');
    // event listeners
    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const formData = new FormData(form);
        handleStartPoll(formData.get('prompt'), formData.get('optionA'), formData.get('optionB'));
        

    });

    // should return its component render function
    // return ({ data }) => {
    return (props) => {
        const poll = props.poll;

        if (poll) {
            root.classList.add('hidden');
            return;
        }
        
        root.classList.remove('hidden');
    };
}