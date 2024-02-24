import Image from "next/image";
import MyComponent from "./components/mycomponent";
import NavBar from "./components/demo";
import LandingPage from "./components/landing/page";

export default function Home() {
  return (
    <div className="container mx-auto">
    <MyComponent/>
    <br/>
    <NavBar/>
    <LandingPage/>
    </div>
  );
}
