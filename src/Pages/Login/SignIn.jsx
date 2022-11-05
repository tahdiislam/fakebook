import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";

function SignIn() {
    const { loginWithEmailAndPass } = useContext(UserContext)

    // form submit handler
    const handleFormSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(password, email);

        // log in user with email and password
        loginWithEmailAndPass(email, password)
        .then(res => {
            toast.success("User login successfully.")
            form.reset()
        })
        .catch(err => {
            toast.error(err.message.split("Firebase:").join("").split("(").join("").split("-").join(" ").split("auth/").join("").split(")").join(""))
        })
    }
    return (
        <div className="flex justify-center">
            <Card className="w-96 my-20">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody >
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                        <Input name="email" type="email" label="Email" variant="standard" size="lg" required />
                        <Input name="password" type="password" label="Password" variant="standard" size="lg" required />
                        {/* <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div> */}
                        <Button type="submit" className="mt-6" variant="gradient" fullWidth>
                            Sign In
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="pt-0">
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don't have an account?
                        <Link to="/signup" className="text-blue-500 underline hover:no-underline">Sign Up</Link>
                    </Typography>
                </CardFooter>
            </Card>

        </div>
    );
}

export default SignIn;