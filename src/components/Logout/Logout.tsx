import React, { FC } from 'react';
import styles from './Logout.module.css';

interface LogoutProps {}

const Logout: FC<LogoutProps> = () => (
  <div className={styles.Logout}>
    Logout Component
  </div>
);

export default Logout;
