import { LayoutProps } from '@/types';
import Menu from '@/components/Container/Menu';
import Header from '@/components/Container/Header';

import styles from './layout.module.scss';

export default function AdminLayout({ children }: LayoutProps) {
  // return <section>{children}</section>;
  return (
    <>
      <Menu />
      <Header />
      <section className={styles.container}>{children}</section>
    </>
  );
}
