import React from 'react';
// import CreateAccount from './dashboard/login/CreateAccount';
import Login from './dashboard/login/Login';
import LoginHead from './LoginHead';
import LoginImage from './dashboard/login/LoginImage';

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen">
      <LoginHead />
      <div className="flex flex-col md:flex-row items-center w-full min-h-[80vh] gap-10 md:gap-32 p-5 md:px-32 ">
        {/* <CreateAccount /> */}
        <Login />
        <LoginImage />
      </div>
    </div>
  )
}
