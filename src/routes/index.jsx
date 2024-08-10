



import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Forgetpassword from "../pages/Forgetpassword";
import Signup from "../pages/Signup";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";
import CategoryProduct from "../pages/CategoryProduct";
import ErrorBoundary from '../components/ErrorBoundary';
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
// import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path:"/",
                element: <Home />,
                
            },
            {
                path:"home",
                element: <Home />,
                
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "forget-password",
                element: <Forgetpassword />,
            },
            {
                path: "sign-up",
                element: <Signup />,
            },
            {
                path: "product-category/:categoryName",
                element: <CategoryProduct />,
            },
            {
                path : "product/:_id",
                element : <ProductDetails/>
            },
            {
                path : "cart",
                element : <Cart/>
            },
            {
                path: "admin-panel",
                element: <AdminPanel />,
                children: [
                    {
                        path: "all-users",
                        element: <AllUsers />,
                    },
                    {
                        path: "all-products",
                        element: <AllProducts />,
                    },
                ],
            },
        ],
    },
]);

export default router;

