import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 onClick={() => { navigate("/") }}>Some Site</h1>
            <nav>
                <li><button id={"products"} onClick={() => { navigate("/login") }}>Sign In</button></li>
                <li><button id={"products"} onClick={() => { navigate("/products") }}>Products</button></li>
                <li><button>Menu 3</button></li>
                <li><button>Menu 4</button></li>
                <li><button>Menu 5</button></li>
            </nav>
        </>
    );
}

export default Header;