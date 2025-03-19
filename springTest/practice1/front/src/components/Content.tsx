import { ReactElement, useEffect, useState } from "react";
import Join from "./Join";

interface Content {
    mode: string;
}

const Content: React.FC<Content> = ({ mode }) => {
    const [content, setContent] = useState<ReactElement|null>(null);

    useEffect(() => {
        switch (mode) {
            case "home":
                setContent(<h1>Welcome</h1>);
                break;
            case "join":
                setContent(<Join />);
                break;
            case "login":

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