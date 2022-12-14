import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { RiHome2Fill, RiMessage3Fill, RiUser3Fill } from "react-icons/ri";
import { useContext } from "react";
import { UserContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

function Header() {
    const [openNav, setOpenNav] = useState(false);
    const { logOutUser, setLoading, user } = useContext(UserContext)
    const navigate = useNavigate()

    //log out user 
    const handleLogOutUser = () => {
        logOutUser()
        .then(() => {
            toast.success("Log out successfully.")
            navigate("/signin")
        })
        .catch(err => {
            toast.error(err.message.split("Firebase:").join("").split("(").join("").split("-").join(" ").split("auth/").join("").split(")").join(""))
        })
        .finally(() => {
            setLoading(false)
        })
    }
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">      
            {!user?.uid ? 
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <Link to="/signin" className="flex items-center text-xl font-semibold hover:text-blue-500">
                        <Button variant="gradient" size="sm" className="mx-auto">
                            <span>Sign In</span>
                        </Button>
                    </Link>
                </Typography> : <>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal"
                    >
                        <Link to="/" className="flex items-center text-2xl hover:text-blue-500">
                            <RiHome2Fill />
                        </Link>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal"
                    >
                        <Link to="/profile" className="flex items-center text-2xl hover:text-blue-500">
                            <RiUser3Fill />
                        </Link>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal"
                    >
                        <Link to="/message" className="flex items-center text-2xl hover:text-blue-500">
                            <RiMessage3Fill />
                        </Link>
                    </Typography>

            </>}
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-2xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link
                    to="/"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span className="text-2xl font-semibold">Fa<span className="text">k</span>eBook</span>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                {user?.uid && <Button onClick={handleLogOutUser} variant="gradient" size="sm" className="hidden lg:inline-block">
                    <span>Log out</span>
                </Button>}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                {user?.uid && <Button onClick={handleLogOutUser} variant="gradient" size="sm" fullWidth className="mb-2">
                    <span>Log Out</span>
                </Button>}
            </MobileNav>
        </Navbar>
    );
}

export default Header;