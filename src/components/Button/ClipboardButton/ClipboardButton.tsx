'use client';

import React from 'react';
import { FaLink } from 'react-icons/fa';

import withAlerts from '@/hocs/withAlerts';
import IconButton from '../IconButton/IconButton';

import styles from './ClipboardButton.module.scss';

function ClipboardButton({ url, alert }) {
  const copyLinkText = 'Copiar link';
  const urlCopiedText = 'Link copiado a portapapeles!';

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert.success(urlCopiedText);
      })
      .catch(() => {
        alert.error('Error al copiar el link');
      });
  };

  return (
    <div className={styles.wrapper}>
      <IconButton
        icon={FaLink}
        tooltip={copyLinkText}
        tooltipPosition="bottom"
        onClick={copyToClipboard}
      />
    </div>
  );
}

export default withAlerts(ClipboardButton);
