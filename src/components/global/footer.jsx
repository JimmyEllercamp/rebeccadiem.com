/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CtaV3 from "../ctav3";
import data from "../../data/footer.json";
import { Link } from "react-scroll";
import { siteLogo, socialLink } from "../../global";

const Footer = ({ menu, isBg }) => {
  const { footer } = data;

  return (
    <>
      {/* <CtaV3 /> */}
      <footer
        className={`footer overflow-hidden ${isBg === "yes" ? "bg-one" : ""}`}
      >
        <div className="container">
          <div className="footer__top m-50px-t m-50px-b">
            <div className="row">
              <div className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-start">
                <a href="/">
                  {/* <!-- <h1 className="m-0">WONTED</h1> --> */}
                  <img src={siteLogo.logo} alt={siteLogo.alt} />
                </a>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-lg-0">
                <ul className="footer__menu">
                  {menu?.map((data, i) => (
                    <li key={i}>
                      <Link
                        activeClass="active"
                        className="benefits"
                        to={`${data.link}`}
                        spy={true}
                        smooth={true}
                        duration={500}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        offset={-60}
                      >
                        {data.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
    // <!-- ========== Footer section End ========== -->
  );
};

export default Footer;
