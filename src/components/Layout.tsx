import React, { type PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
