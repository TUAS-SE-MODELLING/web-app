const Header = (props) => {
    return (
        <header>
            <h1>Question {props.number}</h1>
            <h2>{props.text}</h2>
        </header>
    );
};

export default Header;