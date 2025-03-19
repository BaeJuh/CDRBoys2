import { useState } from "react";

interface UserInfo {
    name: string;
    userId: string;
    userPw: string;
}

const Join = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>({ "name": "", "userId": "", "userPw": "" });
    const [warning, setWarning] = useState<string>("");

    const joinUs = async (): Promise<void> => {
        for (const [, info] of Object.entries(userInfo)) {
            if (info === "") {
                return;
            }
        }

        try {
            const response = await fetch("http://localhost:8080/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userInfo),
            });
            setWarning(response.ok ? "" : "이미 있는 ID 입니다.");
        }
        catch (err) {
            console.log(err);
        }
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserInfo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value.trim(),
            };
        });
    }
    return (
        <>
            <form action="#" method="POST">
                <label>Name : <input type="text" name="name" value={userInfo["name"]} onChange={(e) => {
                    changeHandler(e);
                }}></input></label>
                <br></br>
                <label>ID : <input type="text" name="userId" value={userInfo["userId"]} onChange={(e) => {
                    changeHandler(e);
                }}></input></label>
                <span style={{ color: "tomato" }}>{warning}</span>
                <br></br>
                <label>PW : <input type="password" name="userPw" value={userInfo["userPw"]} onChange={(e) => {
                    changeHandler(e);
                }}></input></label>
                <br></br>
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    joinUs();
                }} disabled={warning !== "" || Object.entries(userInfo).some(([, info]) => info === "")}>JOIN US</button>
            </form>
        </>
    );
}

export default Join;