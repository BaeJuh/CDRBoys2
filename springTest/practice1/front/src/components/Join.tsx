import { useState } from "react";

interface Join {
    setMode: React.Dispatch<React.SetStateAction<string>>;
}

interface UserInfo {
    name: string;
    userId: string;
    userPw: string;
}

const Join: React.FC<Join> = ({ setMode }) => {
    const [userInfo, setUserInfo] = useState<UserInfo>({ "name": "", "userId": "", "userPw": "" });
    const [warning, setWarning] = useState<string>("");

    const joinUs = async (): Promise<void> => {
        try {
            const response = await fetch("http://localhost:8080/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userInfo),
            });

            if (response.ok) {
                alert("가입이 완료되었습니다.");
                setMode("login");
            } else {
                setWarning("이미 있는 ID 입니다.");
            }
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
                    setWarning("");
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