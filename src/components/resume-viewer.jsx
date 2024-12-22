import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import Resume from "../assets/john-park-software-engineering-resume.pdf";
import { useNavigate } from "react-router-dom";
import translations from "../data/translations";
import { useLanguage } from "../languageContext";
import "../styles/resume-viewer.css";

import "@react-pdf-viewer/core/lib/styles/index.css";

export default function ResumeViewer() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [scale, setScale] = useState(0.8);

  useEffect(() => {
    const updateScale = () => {
      if(window.innerWidth <= 768) {
        setScale(0.7);
      } else {
        setScale(0.8);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="resume-viewer-container">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div className="resume-viewer-page">
          <div className="resume-viewer-title">
            <span>{translations[language].homepage_summary_resume}</span>
          </div>
          <Viewer fileUrl={Resume} defaultScale={scale} className="viewer-fullscreen"/>
          <div className="resume-viewer-buttons">
            <div className="resume-viewer-buttons-back">
              <button onClick={handleRedirect}>{translations[language].resume_viewer_back}</button>
            </div>
            <div className="resume-viewer-buttons-download">
              <a
                href={Resume}
                download="john-park-software-engineering-resume.pdf"
              >
                {translations[language].resume_viewer_download}
              </a>
            </div>
          </div>
        </div>
      </Worker>
    </div>
  );
}
