import { useState } from "react";

interface ChangePw {
    setMode: React.Dispatch<React.SetStateAction<string>>;
}

interface ChangingInfo {
    userId: string;
    userPw: string;
    newUserPw: string;
}

const ChangePw: React.FC<ChangePw> = () => {
    const [changingInfo, setChangingInfo] = useState<ChangingInfo>({ "userId": "", "userPw": "", "newUserPw": "" });
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setChangingInfo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    }
    const changePassword = async (): Promise<void> => {
        // fetch
        const response = await fetch("http://localhost:8080/change", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(changingInfo),
        });

        console.log(await response);
    }
    return (
        <>
            <h1>Change Password</h1>
            <div>
                <label>ID : <input type="text" name="userId" value={changingInfo["userId"]} onChange={(e) => { changeHandler(e); }}></input></label>
                <br></br>
                <label>Original Password: <input type="text" name="userPw" value={changingInfo["userPw"]} onChange={(e) => { changeHandler(e); }}></input></label>
                <br></br>
                <label>new Password : <input type="text" name="newUserPw" value={changingInfo["newUserPw"]} onChange={(e) => { changeHandler(e); }}></input></label>
                <br></br>
                <button onClick={() => {
                    changePassword();
                }} disabled={Object.entries(changingInfo).some(([, info]) => info === "")}>Change Password</button>
            </div>
        </>
    );
}

export default ChangePw;