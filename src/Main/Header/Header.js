import './Header.css';

const Header = (props)=>{
    return(
        <div className="Header-Box">
            <div>
                <h1>{props.companyName}</h1>
                <small>MASSAGE THERAPY</small>
            </div>
            <nav>
                <ul className="navbar">
                    <li class="active">HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>FAQ</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;