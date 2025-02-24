


import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createNewUser, setUser, gooleLoagin, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }
        // console.log(name, email, photoURL, password);

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                // alert("user register successfully")

                Swal.fire({
                    title: "user register successfully !",
                    icon: "success",
                    draggable: true
                });
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        navigate("/")
                    })
                    .catch((err) => {
                        alert(err)
                    })
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // alert("user already register")
                Swal.fire({
                    icon: "error",
                    title: "user already register",
                    text: "Something went wrong!",

                });
                console.error(errorCode, errorMessage);
            });
    };

    const handleGoogleRegister = () => {
        gooleLoagin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                // alert("user register successfully")
                Swal.fire({
                    title: "user register successfully !",
                    icon: "success",
                    draggable: true
                });
                navigate(location?.state?.from?.pathname || "/"); // Redirect to previous page or home
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // alert("user already register")
                Swal.fire({
                    icon: "error",
                    title: "user already register",
                    text: "Something went wrong!",
                });
                console.error(errorCode, errorMessage);
            });
    };



    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full mt-16 max-w-md bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Register Now!</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-800 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
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
                            <span className="label-text text-gray-700">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Enter your photo URL"
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
                    </div>
                    <div className="form-control">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Register
                        </button>
                    </div>
                </form>

                {error && <p className="text-red-500 px-2">{error}</p>}
                <div className="mt-6 text-center">
                    <button
                        onClick={handleGoogleRegister}
                        className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300 mb-4"
                    >
                        Sign in with Google
                    </button>
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
