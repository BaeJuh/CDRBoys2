const Title = (props) => {
    const { title, reset } = props;
    return (
        <h1 onClick={() => {reset()}}>
            <a href="/" onClick={e => e.preventDefault()}>{title}</a>
        </h1>
    );
}

export default Title;