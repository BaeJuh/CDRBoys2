import { ReactElement, useEffect, useState } from "react";

interface Content {
    content: string;
}

const Content: React.FC<Content> = ({ content }) => {
    const [contentComponent, setContentComponent] = useState<ReactElement | null>(null);

    useEffect(() => {
        switch (content) {
            case "":
                setContentComponent(<h1>Greeting</h1>);
                break;
            case "products":
                // 
                break;
        }
    }, [content]);

    return (
        <>
            {contentComponent}
        </>
    );
}

export default Content;