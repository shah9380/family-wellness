import './Main.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';

function Main(){
    return(
        <div class="Main-Box">
            <Header companyName="Family Wellness"></Header>
            <Hero></Hero>
            <Footer year="2018" website="www.healthwellness.com"></Footer>
            <small>Powered by Mastermind</small>
        </div>
        
    )
};

export default Main;