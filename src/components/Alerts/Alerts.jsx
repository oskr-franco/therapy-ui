'use client'

import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useAlert from '@/hooks/useAlert';

import Alert from './Alert';

import styles from './Alerts.module.scss';

function Alerts() {

  const { alertState: alerts, removeAlert } = useAlert();
  if (!alerts) return null;

  return (
    <div className={styles.alertsContainer}>
      <TransitionGroup>
        {alerts.map((alert) => (
          <CSSTransition
            key={alert.id}
            timeout={500}
            classNames={{
              enter: styles.alertEnter,
              enterActive: styles.alertEnterActive,
              exit: styles.alertExit,
              exitActive: styles.alertExitActive,
            }}>
            <Alert {...alert} removeAlert={removeAlert} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default Alerts;
