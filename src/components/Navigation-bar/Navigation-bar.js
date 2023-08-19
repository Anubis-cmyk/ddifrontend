import './navigation-bar.css';

const NavigationBar = () =>{
    return(
        <div className="nav-bar">
            <div className="left-Nav">
                <h2 className="logo-banner">
                    Fruity Zoda
                </h2>
            </div>
            <div className="right-nav">
                <ul className="nav-links">
                    <a href='/'><li className="nav-link nav-link-active">Home</li></a>
                    <a href='/flavors'><li className="nav-link">Flavors</li></a>
                    <a href='/about'><li className="nav-link">About</li></a>
                    <a href='/contact'><li className="nav-link">Contact Us</li></a>
                    <a href='/shop'><li className="nav-link">Shop now</li></a>
                </ul>
            </div>
        </div>
    )
} 

export default NavigationBar;