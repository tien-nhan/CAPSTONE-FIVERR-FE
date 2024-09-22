import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer_row">
          <div className="footer_top">
            <FooterItem
              title="Categories"
              links={[
                "Graphics & Design",
                "Digital Marketing",
                "Writing & Translation",
                "Video & Animation",
                "Music & Audio",
                "Programming & Tech",
                "Data",
                "Business",
                "Lifestyle",
                "Sitemap",
              ]}
            />
            <FooterItem
              title="About"
              links={[
                "Careers",
                "Press & News",
                "Partnerships",
                "Privacy Policy",
                "Terms of Service",
                "Intellectual Property Claims",
                "Investor Relations",
              ]}
            />
            <FooterItem
              title="Support"
              links={[
                "Help & Support",
                "Trust & Safety",
                "Selling on Fiverr",
                "Buying on Fiverr",
              ]}
            />
            <FooterItem
              title="Community"
              links={[
                "Events",
                "Blog",
                "Forum",
                "Community Standards",
                "Podcast",
                "Affiliates",
                "Invite a Friend",
                "Become a Seller",
              ]}
            />
            <FooterItem
              title="More From Fiverr"
              links={[
                "Fiverr Business",
                "Fiverr Pro",
                "Fiverr Studios",
                "Fiverr Logo Maker",
                "Fiverr Guides",
                "Get Inspired",
                "Fiverr Select",
                "ClearVoice",
                "Fiverr Workspace",
                "Learn",
                "Working Not Working",
              ]}
              isMore
            />
          </div>
          <div className="footer_bottom">
            <div className="left">
              <span className="logo_footer">
                {/* SVG logo can go here */}
                <svg
                  width="91"
                  height="27"
                  viewBox="0 0 91 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG path data */}
                </svg>
              </span>
              <span className="copyright text-trunc">
                © Fiverr International Ltd. 2022
              </span>
            </div>
            <div className="right">
              <ul className="social">
                {["twitter", "facebook", "linkedin", "instagram"].map(
                  (platform) => (
                    <li key={platform}>
                      <a href="#">
                        <span className="icon">
                          <i className={`fab fa-${platform}`}></i>
                        </span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterItem = ({ title, links, isMore }) => {
  return (
    <div className="item">
      <article className="article">
        <div className="title">
          <h6>{title}</h6>
        </div>
        <div className="content">
          <ul className={isMore ? "ul_5" : ""}>
            {links.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Footer;
