import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import { signup } from "../api/authAPI";
import GetUserData from "../components/getUserData/GetDataUser";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showUserData, setShowUserData] = useState(false);
  const [draft, setDraft] = useState({
    username: "",
    email: "",
    password: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e: React.FormEvent<Element>) => {
    e.preventDefault();

    try {
      const data = await signup(draft.username, draft.email, draft.password);
      localStorage.getItem("token");
      console.log(data.jwt, "jwt");
      setShowUserData(true);
    } catch (error: any) {
      console.log(error);
      console.log("status:", error.response?.status);
      console.log("data:", error.response?.data);
      console.log("message:", error.response?.data?.error?.message);
    }

    // if (draft.username.length < 3) {
    //   alert("نام کاربری خیلی کوتاه است");
    //   return;
    // }
    // if (!draft.email.includes("@")) {
    //   alert("ایمیل معتبر نیست");
    //   return;
    // }

    // const isSuccess = signUp(draft.email, draft.password, draft.username);

    // if (isSuccess) {
    //   navigate("/getdata");
    // } else {
    //   alert("خطا در ثبت‌نام.");
    // }
  };

  return (
    <main className="min-h-screen bg-bg-dark flex items-center justify-center px-4">
      {!showUserData && (
        <div className="w-full max-w-[320px]">
          {/* Title */}
          <h1 className="text-text-primary text-[28px] font-semibold mb-2">
            Sign Up
          </h1>

          {/* Description */}
          <p className="text-text-secondary text-sm mb-6">
            Please enter your details to create an account.
          </p>
          <form onSubmit={handleSignUp}>
            {/* Username */}
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block text-text-primary text-sm font-medium mb-2"
              >
                Username
              </label>

              <div className="relative">
                <FontAwesomeIcon
                  icon={faAt}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-sm"
                />

                <input
                  id="username"
                  name="username"
                  type="text"
                  value={draft.username}
                  onChange={handleChange}
                  placeholder="enter an username"
                  className="
                w-full
                h-[46px]
                rounded-md
                border
                border-border
                bg-input-bg
                pl-10
                pr-3
                text-sm
                text-text-primary
                placeholder:text-text-secondary
                outline-none
                focus:border-border-focus
                transition
              "
                />
              </div>
            </div>
            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-text-primary text-sm font-medium mb-2"
              >
                Email
              </label>

              <div className="relative">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-sm"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={draft.email}
                  onChange={handleChange}
                  placeholder="Please enter your email"
                  className="
                w-full
                h-[46px]
                rounded-md
                border
                border-border
                bg-input-bg
                pl-10
                pr-3
                text-sm
                text-text-primary
                placeholder:text-text-secondary
                outline-none
                focus:border-border-focus
                transition
              "
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-text-primary text-sm font-medium mb-2"
              >
                Password
              </label>

              <div className="relative">
                <FontAwesomeIcon
                  icon={faLock}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-sm"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={draft.password}
                  onChange={handleChange}
                  placeholder="Please enter your password"
                  className="
                w-full
                h-[46px]
                rounded-md
                border
                border-border
                bg-input-bg
                pl-10
                pr-10
                text-sm
                text-text-primary
                placeholder:text-text-secondary
                outline-none
                focus:border-border-focus
                transition
              "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-text-secondary
                hover:text-text-primary
                transition
              "
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="text-sm"
                  />
                </button>
              </div>
            </div>

            {/* Sign up */}
            <button
              type="submit"
              className="
            w-full
            h-[40px]
            rounded-md
            bg-button-primary
            text-text-primary
            text-sm
            font-medium
            hover:bg-button-hover
            transition
          "
            >
              Sign up
            </button>
          </form>

          {/* Login */}
          <p className="text-center text-sm text-text-secondary mt-7">
            Already Have an account?
            <Link to={"/signin"} className="text-link ml-1 hover:underline">
              Login
            </Link>
          </p>
        </div>
      )}
      {showUserData && <GetUserData />}
    </main>
  );
};

export default Signup;
