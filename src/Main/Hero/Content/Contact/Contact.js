import './Contact.css';
import Button from "./Buttons/Button";

const Contact= ()=>{
    return(
        <div className="Contact-Box">
           <div className="Text-Box">
                <h1>Think Health. Think Massage.</h1>
                <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 938-060-4335 today!</p>
           </div>
           <div className="Button-Box">
                <Button value="Learn More About Us"></Button>
                <Button value="Contact Us Today"></Button>
           </div>
        </div>
    )
};

export default Contact;