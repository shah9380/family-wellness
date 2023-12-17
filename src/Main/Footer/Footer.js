import './Footer.css';

const Footer = (props)=>{
    return(
        <footer>
            <div class="CopyRight-Box">
                <small>Copyright {props.year}. {props.website}. All rights reserved</small>
            </div>
        </footer>
    )
};

export default Footer;