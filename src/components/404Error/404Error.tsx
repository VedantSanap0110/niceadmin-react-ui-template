import React, { FC } from 'react';
import styles from './404Error.module.css';

interface 404ErrorProps {}

const 404Error: FC<404ErrorProps> = () => (
  <div className={styles.404Error}>
    404Error Component
  </div>
);

export default 404Error;
