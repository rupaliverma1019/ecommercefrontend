// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Forgetpassword from "../pages/Forgetpassword";
// import Signup from "../pages/Signup";
// import AdminPanel from "../pages/AdminPanel";
// import AllUsers from "../pages/AllUsers";
// import AllProducts from "../pages/AllProducts";
// import CategoryProduct from "../pages/CategoryProduct";

// const router = createBrowserRouter([
//     {
//         path:"/",
//         element: <App/>,
//         children : [
//             {
//                 path : "/home",
//                 element : <Home/>

//             },
//             {
//                 path : "/login",
//                 element : <Login/>
//             },
//             {
//                 path : "/forget-password",
//                 element : <Forgetpassword/>
//             },
//             {
//                 path : "/sign-up",
//                 element : <Signup/>
//             },
//             {
//                 path: `product-category/:categoryName`,
//                 element : <CategoryProduct/>
//             },
//             {
//                 path : "/admin-panel",
//                 element : <AdminPanel/>,
//                 children : [
//                     {
//                         path : "/admin-panel/all-users",
//                                 element : <AllUsers/>
//                     },
//                     {
//                         path : "/admin-panel/all-products",
//                                 element : <AllProducts/>
//                     },
//                 ]
                     
//             },
           



//         ]
//     }
// ])

// export default router


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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "home",
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
