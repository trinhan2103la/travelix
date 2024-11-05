import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDribbble,
  faFacebookF,
  faGit,
  faLinkedinIn,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUp,
  faBars,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showInputSearch, setShowInputSearch] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [openRightBar, setOpenRightBar] = useState(false);

  const rightBarRef = useRef(null);

  // Scroll to top functionality
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show input search
  const InputSearch = () => {
    if (showInputSearch == false) {
      setShowInputSearch(true);
    } else {
      setShowInputSearch(false);
    }
  };

  // Open Right bar
  const OpenRightBar = () => {
    setOpenRightBar(true);
  };

  // Close Right Bar
  const CloseRightBar = () => {
    setOpenRightBar(false);
  };

  // Toggle scroll button visibility
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else if (window.scrollY > 20) {
      setIsSticky(true);
      setHideTopBar(true);
    } else {
      setShowScroll(false);
      setIsSticky(false);
      setHideTopBar(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rightBarRef.current && !rightBarRef.current.contains(event.target)) {
        CloseRightBar();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'home' },
    { path: '/about', label: 'about' },
    { path: '/offer', label: 'offers' },
    { path: '/new', label: 'news' },
    { path: '/contacts', label: 'contact' },
  ];
  return (
    <div className="header w-[100%] relative">
      <div
        className={`header-topbar w-[100%] h-[36px] absolute ${
          hideTopBar ? 'hide' : ''
        }`}
      >
        <div className="grids wide h-[100%]">
          <div className="header-topbar-container uppercase h-[100%]">
            <div className="row h-[100%]">
              <div className="one-6 num-8 c-8 h-[100%]">
                <div className="header-topbar-container--contacts h-[100%]">
                  <span className="pr-11 cursor-default">+84 889 788 760</span>
                  <a href="https://www.pinterest.com/">
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                  <a href="https://www.facebook.com/trinhan.duong.77">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://github.com/trinhan2103la">
                    <FontAwesomeIcon icon={faGit} />
                  </a>
                  <a href="https://www.linkedin.com/in/duong-tri-nhan-ba8a45227/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faDribbble} />
                  </a>
                </div>
              </div>
              <div className="one-6 num-4 c-4 h-[100%]">
                <ul className="header-topbar-container--register h-[100%]">
                  <a href="">
                    <li>login</li>
                  </a>
                  <a href="">
                    <li>|</li>
                  </a>
                  <a href="">
                    <li>register</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`header-nav absolute ${isSticky ? 'scroll' : ''} `}>
        <div className="header-nav-container uppercase px-0 py-10 pt-[60px]">
          <div className="grids wide">
            <div className="row">
              <div className="one-3 num-6 c-8">
                <a href="#">
                  <div className="header-nav-container--logo">
                    <span className="text-[30px] text-white font-extrabold">
                      travelix
                    </span>
                  </div>
                </a>
              </div>
              <div className="one-6 hide-on-tablet-mobile">
                <ul className="header-nav-container--list text-white">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`a ${
                          location.pathname === link.path ? 'active' : ''
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="one-3 num-6 c-4">
                <FontAwesomeIcon
                  onClick={OpenRightBar}
                  icon={faBars}
                  className="list-tablet-mobile font-black"
                  id="menu-open"
                />
                <div
                  onClick={InputSearch}
                  className="header-nav-container--search"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} id="search" />
                  <br />
                  <input
                    type="text"
                    placeholder="Search...."
                    className={`${showInputSearch ? 'active' : ''}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-menu absolute">
        <div
          className="header-menu-overlay"
          style={{ display: openRightBar ? 'block' : 'none' }}
        ></div>
        <div
          className={`header-menu-body--content ${openRightBar ? 'open' : ''}`}
          ref={rightBarRef}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <FontAwesomeIcon
            onClick={CloseRightBar}
            icon={faXmark}
            className="text-white font-black text-[30px] cursor-pointer"
          />
        </div>
      </div>
      {showScroll && (
        <div onClick={scrollTop} className="scroll-top">
          <FontAwesomeIcon icon={faArrowUp} className="ii" />
        </div>
      )}
    </div>
  );
};

export default Header;
