'use client';
import React from 'react';
import { MdOutlineExitToApp } from 'react-icons/md';
import Item from '../Item/Item';
import { logout } from '@/actions/auth/actions';

type LogoutProps = {
  className?: string;
  children?: React.ReactNode;
};

const logoutHandler = async () => {
  await logout();
};

function Logout({ className, children }: LogoutProps) {
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

export default Logout;
