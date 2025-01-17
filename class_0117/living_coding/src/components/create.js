const Create = (props) => {
    const {onCreate} = props;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onCreate(e.target.title.value, e.target.body.value);
        }}>
            <p><input placeholder="title" name="title"></input></p>
            <p><textarea placeholder="body" name="body"></textarea></p>
            <p><input type="submit" value="Create"></input></p>
        </form>
    );
}

export default Create;