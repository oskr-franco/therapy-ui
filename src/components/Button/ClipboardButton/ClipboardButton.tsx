'use client';

import React from 'react';
import { FaLink } from 'react-icons/fa';

import withAlerts from '@/hocs/withAlerts';
import WithAlertType from '@/hocs/withAlerts.types';
import IconButton from '../IconButton/IconButton';

import styles from './ClipboardButton.module.scss';

type ClipboardButtonProps = {
  url: string;
} & WithAlertType;

function ClipboardButton({ url, alert }: ClipboardButtonProps) {
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
