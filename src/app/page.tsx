import Navbar from "./components/views/Navbar/Navbar";
import Hero from "./components/views/Hero/Hero";
import Cards from "./components/views/Cards/Cards";
import Store from "./components/views/Store/Store";
import Freedom from "./components/views/Freedom/Freedom";
import Help from "./components/views/Help/Help";
import { Spy } from "./components/views/Spy/Spy";
import Insights from "./components/views/Insights/Insights";
import Footer from "./components/views/Footer/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Cards/>
    <Store/>
    <Freedom/>
    <Help/>
    <Spy/>
    <Insights/>
    <Footer/>
    </>
  );
}
