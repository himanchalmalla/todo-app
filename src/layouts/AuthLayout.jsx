import React, { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const AuthLayout = () => {
  const [pathName, setPathName] = React.useState("");
  const location = useLocation();

  useEffect(() => {
    const pageNames = {
      "/signin": "Sign In",
      "/signup": "Sign Up",
      "/forget-password": "Forget Password",
    };

    setPathName(pageNames[location.pathname] || "");
  }, [location.pathname]);


  return (
    <div className="min-h-dvh flex items-center justify-center bg-[#060236] p-4 md:p-0 md:m-2">

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        {/* Breadcrumb */}
        <div className="mb-5 text-sm text-gray-600">
          {
            (pathName === "Sign Up" || pathName === "Forget Password") ? (
              <Link
                to="/signin"
                className="hover:text-[#c20044] hover:underline"
              >
                Sign In
              </Link>
            ) : (
              <Link to="/" className="hover:text-[#c20044] hover:underline">
                Home
              </Link>
            )
          }


          <span className="mx-2">/</span>

          <span className="font-medium text-[#c20044]">
            {pathName}
          </span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-16 h-16"
          />
        </div>

        {/* SignIn / SignUp */}
        <Outlet />

      </div>

    </div>
  );
}

export default AuthLayout
