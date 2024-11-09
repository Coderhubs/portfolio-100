import Image from "next/image";
import Background from "./components/background"
import Body from "./components/body"
import Contact from "./components/contact";
import About from "./components/About"
import Project from  "./components/project"
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (

   <div>
     <Navbar />
    <Background />
    <Body/>
    <About />
    <Project />
    <Contact />
    <Footer />
   
   </div>

  );
}
