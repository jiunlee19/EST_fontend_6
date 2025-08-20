import Shop from "./pages/Shop.jsx";

const initialState = {
    items: [], // {id, name, price}
};

const PRODUCTS = [
    { id: 1, name: "Keyboard", price: 49000 },
    { id: 2, name: "Mouse", price: 29000 },
    { id: 3, name: "Monitor", price: 199000 },
];

function App() {
    return (
        <>
            <ul>
                <li>
                    <a href="/shop">Shop</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>
            </ul>
            <Shop />
        </>
    );
}

export default App;
