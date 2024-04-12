import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
    
    return (
        <>
            <nav>
                <Link to="/">HOME</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:product_id" element={<Product />} />
            </Routes>
        </>
    )
}
export default App;
