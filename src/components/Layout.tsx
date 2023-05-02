import React, { type PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
