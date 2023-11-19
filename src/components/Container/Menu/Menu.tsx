import React from 'react';
import cx from 'classnames';
import { MdSportsGymnastics, MdKeyboardArrowRight } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';

import Paths from '@/constants/paths';
import Item from './Item/Item';
import styles from './Menu.module.scss';

const MENU_ITEMS = [
  {
    icon: MdSportsGymnastics,
    href: Paths.Exercises,
    text: 'Ejercicios',
  },
  {
    icon: CgGym,
    href: Paths.Workouts,
    text: 'Workout',
  },
];

function Menu() {
  return (
    <div className={styles.menu}>
      <input type="checkbox" id="menuToggle" className={styles.menuToggle} />
      <label
        htmlFor="menuToggle"
        className={cx(styles.menuItem, styles.toggleLabel)}
      >
        <span className={styles.icon}></span>
        <MdKeyboardArrowRight size={30} className={styles.icon} />
      </label>
      <div className={styles.menuContent}>
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
    </div>
  );
}

export default Menu;
