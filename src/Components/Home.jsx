import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Main from "./Main";
import "../App.css"
import Footer from "./Footer";
import Hero from "./Hero";
function Home() {
  const location = useLocation();
  const [isNavbarMobile, setIsNavbarMobile] = useState(false);
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const scrollto = (el) => {
      let header = select("#header");
      let offset = header.offsetHeight;

      if (!header.classList.contains("header-scrolled")) {
        offset -= 16;
      }

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    on("click", ".mobile-nav-toggle", function (e) {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
      console.log("helo");
    });

    // on(
    //   "click",
    //   ".navbar .dropdown > a",
    //   function (e) {
    //     console.log("helo");
    //     if (select("#navbar").classList.contains("navbar-mobile")) {
    //       e.preventDefault();
    //       this.nextElementSibling.classList.toggle("dropdown-active");
    //     }
    //   },
    //   true
    // );

    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();
          let navbar = select("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            let navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }
          scrollto(this.hash);
        }
      },
      true
    );

    // if (window.location.hash) {
    //   console.log("helo");
    //   if (select(window.location.hash)) {
    //     scrollto(window.location.hash);
    //   }
    // }

    // Clean up event listeners on component unmount
    return () => {
      const navbarLinks = select(".scrollto", true);
      const mobileNavToggle = select(".mobile-nav-toggle");
      const dropdownLinks = select(".navbar .dropdown > a", true);

      if (mobileNavToggle) {
        mobileNavToggle.removeEventListener("click", () => {});
      }
      if (dropdownLinks) {
        dropdownLinks.forEach((link) =>
          link.removeEventListener("click", () => {})
        );
      }
      if (navbarLinks) {
        navbarLinks.forEach((link) =>
          link.removeEventListener("click", () => {})
        );
      }
    };
  }, [isNavbarMobile]);
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top bg-dark">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="">
              <img src="./img/myLogo.png" alt="" />
              THE HOMEMAKERS
            </a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              {/* <li>
                <a className="nav-link scrollto" href="#work">
                  Work
                </a>
              </li> */}
              <li>
                <a className="nav-link scrollto" href="#blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={() => setIsNavbarMobile(!isNavbarMobile)}
            />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <Hero />
      {/* End Hero Section */}
      <Main />
      {/* End #main */}
      {/* ======= Footer ======= */}
      <Footer />
    </>
  );
}

export default Home;
