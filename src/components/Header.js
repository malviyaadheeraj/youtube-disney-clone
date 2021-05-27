import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import "./Header.css";
import imgLogo from "../images/logo.svg";
import imgHomeIcon from "../images/home-icon.svg";
import imgSearchIcon from "../images/search-icon.svg";
import imgWatchlistIcon from "../images/watchlist-icon.svg";
import imgOriginalIcon from "../images/original-icon.svg";
import imgMovieIcon from "../images/movie-icon.svg";
import imgSeriesIcon from "../images/series-icon.svg";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <nav className="header__nav">
      <Link className="header__link">
        <img src={imgLogo} alt="Disney+" />
      </Link>
      {!userName ? (
        <button onClick={handleAuth} className="header__login">
          Login
        </button>
      ) : (
        <>
          <div className="header__navbar">
            <Link href="/home" className="header__navbarLink">
              <img src={imgHomeIcon} alt="HOME" />
              <span>HOME</span>
            </Link>
            <Link className="header__navbarLink">
              <img src={imgSearchIcon} alt="SEARCH" />
              <span>SEARCH</span>
            </Link>
            <Link className="header__navbarLink">
              <img src={imgWatchlistIcon} alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </Link>
            <Link className="header__navbarLink">
              <img src={imgOriginalIcon} alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </Link>
            <Link className="header__navbarLink">
              <img src={imgMovieIcon} alt="MOVIES" />
              <span>MOVIES</span>
            </Link>
            <Link className="header__navbarLink">
              <img src={imgSeriesIcon} alt="SERIES" />
              <span>SERIES</span>
            </Link>
          </div>
          <div className="header__signOut">
            <img src={userPhoto} alt={userName} className="header__userImage" />
            <div className="Header__dropdown">
              <span onClick={handleAuth}>Sign out</span>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
