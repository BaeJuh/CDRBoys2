interface User {
    userName: string;
    setMode: React.Dispatch<React.SetStateAction<string>>;
}

const User: React.FC<User> = ({ userName, setMode }) => {
    return (
        <>
            <h1>Welcome to {userName}</h1>
            <button onClick={() => {
                setMode("changePw");
            }}>Change Your Information</button>
        </>
    );
}

export default User;