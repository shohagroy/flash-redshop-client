"use client";

import Banar from "@/components/ui/Banar";
import Footer from "@/shared/Footer";
import Header from "@/shared/header/Header";

const ClientLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <Banar />
      <div className="min-h-[93vh] max-w-5xl mx-auto">{children}</div>
      <Footer />
    </main>
  );
};

export default ClientLayout;
