/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import GLightbox from "glightbox";
import React, { useEffect } from "react";
import { FiPlay } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import data from "../data/about.json";
import { socialLink } from "../global";

const Authorv4 = ({ isBg }) => {
  const { aboutv4 } = data;
  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);

  return (
    // <!-- ========== Author section start ========== -->
    <section
      id="author"
      className={`section-padding authorv2 ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center aboutTitle">
              <span>{aboutv4.subtitle}</span>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row gx-5 about-container">
          {/* <!-- author content area start --> */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p>{aboutv4.description}</p>
            <p>{aboutv4.description2}</p>
            <p>{aboutv4.description3}</p>
            <div className="authorv2__content">
              <ul className="social-icon mt-5">
                {socialLink.instagram === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.instagram}>
                      <img
                        className="img-fluid instagram-icon"
                        src="assets/icons/instagram.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
                {socialLink.instagram === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.email}>
                      <MdEmail className={'img-fluid'} />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {/* <!-- author content area end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Author section end ========== -->
  );
};

export default Authorv4;
