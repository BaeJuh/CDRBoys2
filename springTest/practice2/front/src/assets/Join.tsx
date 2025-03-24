import { useState } from "react";

interface UserInfo {
    userId: string;
    userPw: string;
}

const Join = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>({ userId: "", userPw: "" });

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        });
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

            }} disabled={Object.entries(userInfo).some(([, value]) => value === "")}>Join</button>
        </>
    );
}

export default Join;