import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Image from "./components/Image";
import ContactUs from "./components/ContactUs";
import Engage from "./components/Engage";
import CTA from "./components/CTA";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Image />
          <ContactUs />
          <Engage />
          <CTA />
        </>
      )}
    </div>
  );
}
