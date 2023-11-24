"use client";

import Footer from "@/shared/Footer";
import Header from "@/shared/header/Header";

const ClientLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen max-w-7xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default ClientLayout;
