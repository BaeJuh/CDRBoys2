import { useEffect, useState, React } from "react";
import axios from "axios";
import "./GuestBook.css";

const GuestBook = () => {
    const [message, setMessage] = useState([]);
    const [postData, setPostData] = useState({ name: "", message: "" });

    const showMessage = async () => {
        try {
            const res = await axios.get("http://localhost:8080/guset");
            const data = res.data;

            setMessage(data);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        showMessage();
    }, []);

    const submitPost = async (e) => {
        e.preventDefault();
        try {
            await axios.get("http://localhost:8080/guset");
            setPostData({ name: "", message: "" });
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div className="guest-outbox">
            <form onSubmit={(e) => { submitPost(e) }}>
                <input type="text" value={postData.name} placeholder="name?"
                    onChange={(e) => setPostData({ ...postData, name: e.target.value })}
                    required />
                <textarea type="text" value={postData.message} placeholder="message?"
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    required />
                <button type="submit">등록</button>
            </form>

            <div className="message">
                {
                    message.map((msg) => (
                        <div key={msg.id} className="message-card">
                            <p>{msg.name}</p>
                            <p><strong>{msg.message}</strong></p>
                            <p>{msg.create_at}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default GuestBook;