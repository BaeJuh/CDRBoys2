import React, { useState } from "react";

interface UserInfo {
    userId: string;
    userPw: string;
}

const Login = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>({ userId: "", userPw: "" });

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    }

    const onLoginClick = async () => {
        const response = await fetch("http://localhost:8080/join", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        });
        console.log(response);
    }

    return (
        <>
            <p>
                <label>ID : <input name="userId" type="text" value={userInfo.userId} onChange={(e) => { inputHandler(e) }}></input></label>
            </p>
            <p>
                <label>PW : <input name="userPw" type="password" value={userInfo.userPw} onChange={(e) => { inputHandler(e) }}></input></label>
            </p>
            <button onClick={() => {
                onLoginClick();
            }} disabled={Object.entries(userInfo).some(([, value]) => value === "")}>Login</button>
        </>
    );
}

export default Login;