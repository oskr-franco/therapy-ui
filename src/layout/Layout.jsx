import React from 'react'
import cx from 'classnames';

import styles from './Layout.module.scss'

function Layout({ className, children }) {
  return (
    <div className={cx(styles.layout, className)}>
      <header>Logo</header>
      <nav>This is another layout header</nav>
      <main className={styles.main}>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export default Layout