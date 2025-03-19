import { useState } from "react";

interface Login {
    setMode: React.Dispatch<React.SetStateAction<string>>;
}

interface LoginInfo {
    "userId": string;
    "userPw": string;
}

const Login: React.FC<Login> = ({ setMode }) => {
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({ "userId": "", "userPw": "" });

    const login = async (): Promise<void> => {
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginInfo),
            });

            const userName = await response.text();
            if (userName) {
                setMode(userName);
            } else {
                setLoginInfo((prev) => { return { ...prev, userPw: "" } });
            }

        } catch (err) {
            console.log(err);
        }
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLoginInfo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    }
    return (
        <>
            <label>ID : <input type="text" name="userId" value={loginInfo["userId"]} onChange={(e) => { changeHandler(e) }}></input></label>
            <label>PW : <input type="password" name="userPw" value={loginInfo["userPw"]} onChange={(e) => { changeHandler(e) }}></input></label>
            <br></br>
            <button onClick={() => {
                login();
            }} disabled={Object.entries(loginInfo).some(([, info]) => info === "")}>Log in</button>
        </>
    );
}

export default Login;