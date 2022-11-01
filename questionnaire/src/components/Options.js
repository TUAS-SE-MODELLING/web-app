// This whole thing propably needs another solution but now i just did some kind of yeah.. :D 

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

    // so this just returns buttons with those texts^^
    return (
        <>
            {options.map((option) => (
            <button>{option.text}</button>
            ))}
        </>
    );
};

export default Options;