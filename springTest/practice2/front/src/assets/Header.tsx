import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Some Site</h1>
            <nav>
                <li><button id={"products"} onClick={() => { navigate("/products") }}>Products</button></li>
                <li><button>Menu 2</button></li>
                <li><button>Menu 3</button></li>
                <li><button>Menu 4</button></li>
                <li><button>Menu 5</button></li>
            </nav>
        </>
    );
}

export default Header;