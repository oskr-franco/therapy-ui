import React, { useState, useRef, useEffect } from "react";
import { FaLink } from "react-icons/fa";

import { IconButton } from "@/components/Button";

import styles from "./ClipboardButton.module.scss";

function ClipboardButton({ url }) {
  const urlCopiedText = 'Link copiado a portapapeles!';
  const [showMessage, setShowMessage] = useState(false);
  const timerRef = useRef(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setShowMessage(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {showMessage && (
        <div className={styles.message}>
          {urlCopiedText}
        </div>
      )}
      <IconButton
        icon={FaLink}
        tooltip="Copiar link"
        tooltipPosition="bottom"
        onClick={copyToClipboard}
      />
    </div>
  )
}

export default ClipboardButton;
