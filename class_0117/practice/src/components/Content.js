const Content = (props) => {
    const {content} = props; 
    return (
        <>
            <p>{content ? content["body"] : "Hello 👍"}</p>
        </>
    );
}

export default Content;