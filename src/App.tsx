import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Image from "./components/Image";
import ContactUs from "./components/ContactUs";

export default function App () {
  return (
    <>
      <div className="relative">
        <Loader />
        <Navbar />
        <Hero />
        <Image />
        <ContactUs />
      </div>
    </>
  )
}