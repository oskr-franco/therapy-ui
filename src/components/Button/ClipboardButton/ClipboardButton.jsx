import React, { useState, useRef, useEffect } from "react";
import { FaLink } from "react-icons/fa";

import withAlerts from '@/hocs/withAlerts';
import { IconButton } from "@/components/Button";

import styles from "./ClipboardButton.module.scss";

function ClipboardButton({ url, alert }) {
  const urlCopiedText = 'Link copiado a portapapeles!';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
      alert.success(urlCopiedText);
  };

  return (
    <div className={styles.wrapper}>
      <IconButton
        icon={FaLink}
        tooltip="Copiar link"
        tooltipPosition="bottom"
        onClick={copyToClipboard}
      />
    </div>
  )
}

export default withAlerts(ClipboardButton);
