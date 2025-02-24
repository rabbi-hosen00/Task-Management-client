import { useContext, } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const { userLogin, setUser, gooleLoagin } = useContext(AuthContext)


    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({ email, password })

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                
                Swal.fire({
                    title: "User login successfully !",
                    icon: "success",
                    draggable: true
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(() => {
                
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    }


    const handleGoogleLogin = () => {
        gooleLoagin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                // alert("User login successfully login")
                Swal.fire({
                    title: "User login successfully !",
                    icon: "success",
                    draggable: true
                });
                navigate(location?.state ? location.state : "/"); // Redirect to previous page or home
            })
            .catch(() => {
                // alert(error.code);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full mt-16 max-w-md bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Login Now!</h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-800 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-800 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {/* {error && <p className="text-red-500 mt-2">{error}</p>} */}
                    </div>
                    <div className="form-control">

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Login
                        </button>

                    </div>
                </form>
                <div className="mt-6 text-center">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300 mb-4"
                    >
                        Sign in with Google
                    </button>
                    <p className="text-gray-600">
                        Donot  have an account?{" "}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;

