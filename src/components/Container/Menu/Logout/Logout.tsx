'use client';
import React from 'react';
import { MdOutlineExitToApp } from 'react-icons/md';
import Item from '../Item/Item';
import { logout } from '@/actions/auth/actions';
import withModal, { WithModalType } from '@/hocs/withModal';
import styles from './Logout.module.scss';

type LogoutProps = WithModalType & {
  className?: string;
  children?: React.ReactNode;
};

function AreYouSure(): JSX.Element {
  const areYouSureText = '¿Estás seguro?';
  const willMissYou = 'Te extrañaremos';
  return (
    <div className={styles.logout}>
      <h2>{areYouSureText}</h2>
      <div>{willMissYou}</div>
    </div>
  );
}

function Logout({ className, children, modal }: LogoutProps) {
  const acceptHandler = async () => {
    await logout();
    modal.close();
  };
  const logoutHandler = async () => {
    modal.open({
      component: AreYouSure,
      onAccept: acceptHandler,
    });
  };
  return (
    <Item
      className={className}
      icon={MdOutlineExitToApp}
      onClick={logoutHandler}
    >
      {children}
    </Item>
  );
}

export default withModal(Logout);
