import { ReactElement, useEffect, useState } from "react";
import Join from "./Join";
import Login from "./Login";
import User from "./User";
import ChangePw from "./ChangePw";

interface Content {
    mode: string;
    setMode: React.Dispatch<React.SetStateAction<string>>;
}

const Content: React.FC<Content> = ({ mode, setMode }) => {
    const [content, setContent] = useState<ReactElement | null>(null);
    const [userId, setUserId] = useState<string>("");

    useEffect(() => {
        switch (mode) {
            case "home":
                setContent(<h1>Welcome</h1>);
                break;
            case "join":
                setContent(<Join setMode={setMode} />);
                break;
            case "login":
                setContent(<Login setMode={setMode} setUserId={setUserId} />);
                break;
            case "changePw":
                setContent(<ChangePw userId={userId} setMode={setMode} />);
                break;
            default:
                setContent(<User userName={mode} setMode={setMode} />);
                break;
        }
    }, [mode]);

    return (
        <>
            {content}
        </>
    );
}

export default Content;