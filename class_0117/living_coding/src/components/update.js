import { useState } from "react";

const Update = (props) => {
    const { title, body, onUpdate } = props;

    const [updateTitle, setUpdateTitle] = useState(title);
    const [updateBody, setUpdateBody] = useState(body);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onUpdate(e.target.title.value, e.target.body.value);
        }}>
            <p><input placeholder="title" name="title" value={updateTitle} onChange={(e) => {
                setUpdateTitle(e.target.value);
            }}></input></p>
            <p><textarea placeholder="body" name="body" value={updateBody} onChange={(e) => {
                setUpdateBody(e.target.value);
            }}></textarea></p>
            <p><input type="submit" value="Update"></input></p>
        </form>
    );
}

export default Update;