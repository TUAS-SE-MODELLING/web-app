const options = [
    {
        id:1,
        text: 'Yes'
    },
    {
        id:2,
        text: 'No'
    },
    {
        id:3,
        text: 'I am not sure'
    }
];

const Options = () => {
    return (
        <>
            {options.map((option) => (
            <button>{option.text}</button>
            ))}
        </>
    );
};

export default Options;