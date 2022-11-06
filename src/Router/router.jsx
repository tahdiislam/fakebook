import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Login/SignIn";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
    {path: "/", element: <Main/>, children: [
        {path: "*", element: <ErrorPage/>},
        {path: "/", element: <Home/>},
        {path: "/signin", element: <SignIn/>},
        { path: "/signup", element: <Register/>},
        { path: "/profile", element: <RequireAuth>
            <Profile />
        </RequireAuth>},
    ]}
])