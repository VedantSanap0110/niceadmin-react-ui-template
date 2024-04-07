import React, { FC } from 'react';
import styles from './AddProductCategory.module.css';

interface AddProductCategoryProps {}

const AddProductCategory: FC<AddProductCategoryProps> = () => (
  <div className={styles.AddProductCategory}>
    AddProductCategory Component
  </div>
);

export default AddProductCategory;
