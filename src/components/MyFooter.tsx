/* eslint-disable max-len */
import React from "react";
import { Footer } from "antd/es/layout/layout";
import "../styles/Footer.css";
import tractianLogo from "../images/tractianLogo.png";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  YoutubeLogo,
} from "phosphor-react";
import { Divider } from "antd";

function MyFooter(): JSX.Element {
  return (
    <Footer id="footer-container">
      <div className="footer-logos-container">
        <img src={tractianLogo} alt="Tractian Logo" />
        <div className="social-midia-container">
          <a
            href="https://www.linkedin.com/company/tractian/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinLogo size={44} color="#ffffff" />
          </a>

          <a
            href="https://www.facebook.com/tractian"
            rel="noreferrer"
            target="_blank"
          >
            <FacebookLogo size={44} color="#ffffff" />
          </a>

          <a
            href="https://www.instagram.com/tractian/"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramLogo size={44} color="#ffffff" />
          </a>

          <a
            href="https://www.youtube.com/c/TRACTIAN"
            rel="noreferrer"
            target="_blank"
          >
            <YoutubeLogo size={44} color="#ffffff" />
          </a>

          <a
            href="https://www.tiktok.com/@tractian"
            rel="noreferrer"
            target="_blank"
          >
            <TiktokLogo size={44} color="#ffffff" />
          </a>
        </div>
      </div>

      <Divider className="footer-divider" />

      <div className="reconhecimentos-container">
        <h1>Reconhecimento</h1>
        <div className="reconhecimentos-logos">
          <img
            src="https://imgix.tractian.com/website/components/footer/general/logo-gptw.png?auto=format&fit=max&w=96"
            alt="Great Place to Work Logo"
          />
          <img
            src="https://imgix.tractian.com/website/components/footer/general/capterra-badge-2022.png?auto=format&fit=max&w=96"
            alt="Capterra Logo"
          />
          <img
            src="https://imgix.tractian.com/website/components/footer/general/getAppWhite.png?auto=format&fit=max&w=96"
            alt="GetApp Logo"
          />
          <img
            src="https://imgix.tractian.com/website/components/footer/general/logo-front-runners-2022.png?auto=format&fit=max&w=96"
            alt="Front Runners Logo"
          />
          <img
            src="https://imgix.tractian.com/website/components/footer/general/logo-sup-endeavor.png?auto=format&fit=max&w=128"
            alt="Startup Endeavor Logo"
          />
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
