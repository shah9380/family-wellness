import Banner from "./Content/Banner/Banner"
import Contact from "./Content/Contact/Contact";
import About from "./Content/About/About";

function Hero(){
    return(
        <div>
            <Banner></Banner>
            <Contact></Contact>
            <About></About>
        </div>
    )
}

export default Hero;