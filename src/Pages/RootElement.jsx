import React from "react";
import MainNavigation from "../Components/MainNavigation";
import { Outlet } from "react-router-dom";

const RootElement = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootElement;
