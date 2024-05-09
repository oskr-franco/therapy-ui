import React from 'react';
import cx from 'classnames';
import { MdSportsGymnastics, MdKeyboardArrowRight } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';

import Paths from '@/constants/paths';
import Item from './Item/Item';
import styles from './Menu.module.scss';
import Logout from './Logout/Logout';

const MENU_ITEMS = [
  {
    icon: MdSportsGymnastics,
    href: Paths.Exercises,
    text: 'Ejercicios',
  },
  {
    icon: CgGym,
    href: Paths.Workouts,
    text: 'Rutina',
  },
];

function Menu() {
  return (
    <>
      <input type="checkbox" id="menuToggle" className={styles.menuToggle} />
      <div className={styles.menu}>
        <label
          htmlFor="menuToggle"
          className={cx(styles.menuItem, styles.toggleLabel)}
        >
          <MdKeyboardArrowRight size={30} className={styles.icon} />
        </label>
        <div className={styles.menuContent}>
          <div>
            {MENU_ITEMS.map((item) => (
              <Item
                key={item.text}
                className={styles.menuItem}
                icon={item.icon}
                href={item.href}
              >
                <span className={styles.text}>{item.text}</span>
              </Item>
            ))}
          </div>
          <Logout className={styles.menuItem}>
            <span className={styles.text}>Logout</span>
          </Logout>
        </div>
      </div>
      <label htmlFor="menuToggle" className={styles.menuOverlay}></label>
    </>
  );
}

export default Menu;
