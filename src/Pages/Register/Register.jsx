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
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="flex justify-center">
            <Card className="w-96 my-20">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Register
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Name" variant="standard" size="lg" />
                    <Input label="Email" variant="standard" size="lg" />
                    <Input label="Password" variant="standard" size="lg" />
                    {/* <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div> */}
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth>
                        Sign Up
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Have an account?
                        <Link to="/signup" className="text-blue-500 underline hover:no-underline">Sign In</Link>
                    </Typography>
                </CardFooter>
            </Card>

        </div>
    );
}

export default Register;