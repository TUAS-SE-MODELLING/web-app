const Button = () => {
    // This component isn't been used yet
    // and maybe never will :D 

    const onClick = () => {
        console.log('click')
    }

    return (
        <button onClick={onClick} className="btn">Option 1</button>
    );
};

export default Button;