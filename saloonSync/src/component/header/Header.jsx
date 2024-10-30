import React, { useContext, useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.jsx";
import userFallbackImage from "../../assets/userImage.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.js";
import SuggestionInput from "./suggestionInput/SuggestionInput.jsx";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [show, setshow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const user = useContext(AuthContext);

  console.log(user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
    setShowSearch(false);
  };

  const handleSearchBar = () => {
    setShowSearch((prev) => !prev);
    setShowMobileMenu(false);
  };

  const handleHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 80) {
      if (currentScrollY > lastScrollY) {
        setshow("hide");
      } else {
        setshow("show");
      }
      setLastScrollY(currentScrollY);
    } else {
      setshow("top");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeader);

    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, [lastScrollY]);

  return (
    <div className={`header ${showMobileMenu ? "showMobileMenu" : ""} ${show}`}>
      <div className="logo" onClick={() => navigate("/")}>
        <span>SaloonSync</span>
      </div>
      <SuggestionInput handleSearchBar={handleSearchBar} />
      <ul className="menuItems">
        <li className="menuItem" onClick={() => navigate("/cart")}>
          Cart
        </li>
        <a
          style={{ color: "inherit", textDecoration: "none" }}
          className="menuItem"
          href="https://eacd6ae1c4367b0861.gradio.live"
        >
          AI Suggestion
        </a>
        {user ? (
          <li
            className="menuItem logDetail"
            onClick={() => {
              signOut(auth);
              navigate("/register");
            }}
          >
            Logout
          </li>
        ) : (
          <li
            className="menuItem logDetail"
            onClick={() => navigate("/register")}
          >
            Login
          </li>
        )}
        {user && (
          <li className="menuItem userImage">
            <img src={user?.photoURL || userFallbackImage} alt="" />
          </li>
        )}
      </ul>
      <div className="mobileMenuItems">
        <IoSearch onClick={handleSearchBar} />
        {showMobileMenu ? (
          <IoClose onClick={handleMobileMenu} />
        ) : (
          <IoMdMenu onClick={handleMobileMenu} />
        )}
        {user && (
          <div className="userImage">
            <img src={user?.photoURL || userFallbackImage} alt="" />
          </div>
        )}
      </div>

      {showSearch && (
        <div className="searchBar">
          <SuggestionInput
            isSmallDevice={true}
            handleSearchBar={handleSearchBar}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
