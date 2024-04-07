import React, { FC } from 'react';
import styles from './AddProductStore.module.css';

interface AddProductStoreProps {}

const AddProductStore: FC<AddProductStoreProps> = () => (
  <div className={styles.AddProductStore}>
    AddProductStore Component
  </div>
);

export default AddProductStore;
