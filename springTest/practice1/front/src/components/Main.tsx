import { useState } from "react";
import Content from "./Content";

const Main = () => {
    const [mode, setMode] = useState<string>("home");
    return (
        <>
            <h1 onClick={() => { setMode("home") }}>Hello Spring + React</h1>
            <nav>
                <li><button onClick={() => { setMode("join") }}>Sing Up</button></li>
                <li><button onClick={() => { setMode("login") }}>Sign In</button></li>
            </nav>
            <div>
                <Content mode={mode} />
            </div>
        </>
    );
}

export default Main;