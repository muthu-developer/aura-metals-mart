import "./__header.css";
import Store from "../../assets/images/store.png";

export default function Header(){
    return(
        <div className="header-comp">
            <div className="header-wrapper">
                <div className="header-section">
                    <div className="container">
                        <div className="d-flex position-relative">
                            <div className="logo">
                                <img src={Store} alt="Store" />
                            </div>
                            {/* <form className="search-input">
                                <input type="text" placeholder="Search" />
                            </form> */}
                            <ul className="category-list">
                                <li>
                                    <a href="#">Kitchen, Cookware & Serveware</a>
                                </li>
                                <li>
                                    <a href="#">Tableware & Dinnerware</a>
                                </li>
                                <li>
                                    <a href="#">Kitchen Storage</a>
                                </li>
                                <li>
                                    <a href="#">Cleaning Supplies</a>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        Living Room Furniture
                                    </a>
                                    <div className="sub-list-div">
                                        <ul className="submenu-list">
                                            <li>
                                                <a href="#">Sofa</a>
                                            </li>
                                            <li>
                                                <a href="#">Sofa Beds</a>
                                            </li>
                                            <li>
                                                <a href="#">Dining Tables & Chairs</a>
                                            </li>
                                            <li>
                                                <a href="#">Coffee Tables</a>
                                            </li>
                                            <li>
                                                <a href="#">Shoe Racks</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}