interface User {
    userName: string;
}

const User: React.FC<User> = ({ userName }) => {
    return (
        <>
            <h1>Welcome to {userName}</h1>
        </>
    );
}

export default User;