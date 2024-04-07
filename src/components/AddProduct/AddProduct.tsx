import React, { FC } from 'react';
import styles from './AddProduct.module.css';

interface AddProductProps {}

const AddProduct: FC<AddProductProps> = () => (
  <div className={styles.AddProduct}>
    AddProduct Component
  </div>
);

export default AddProduct;
