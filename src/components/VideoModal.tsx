/* eslint-disable max-len */
import React from "react";
import { Button } from "antd";
import { X } from "phosphor-react";
import "../styles/DemoModal.css";
import { useAppContext } from "../context/hook";
import YouTube, { YouTubeProps } from "react-youtube";
import tractianLogo from "../images/tractianLogo.png";

function VideoModal(): JSX.Element {
  const { showModal } = useAppContext();

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <section className="video-modal-container">
      <Button
        type="text"
        htmlType="button"
        name="videoModal"
        id="video-x-btn"
        onClick={showModal}
      >
        <X size={22} color="#ffffff" />
      </Button>
      <YouTube
        videoId="P5iOUpfCkLc"
        opts={opts}
        onReady={onPlayerReady}
        className="video"
      />
      <div>
        <img src={tractianLogo} alt="Tractian Logo" />
        <Button
          type="primary"
          htmlType="button"
          id="demo-btn"
          onClick={showModal}
          name="demoModal"
        >
          Demonstração
        </Button>
      </div>
    </section>
  );
}

export default VideoModal;
