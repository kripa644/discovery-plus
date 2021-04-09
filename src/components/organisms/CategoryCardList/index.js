import React from 'react';
import CategoryCard from '../../molecules/CategoryCard/index';
import './style.css';
import '../../_settings/_base.css';

const CategoryCardList = ({categoryData, className}) => {
    return (
        <div className={`categoryList ${className}`}>
            {categoryData.map((category, index) => {
                return (
                    <CategoryCard key={index} imageSource={category.image} imageText={category.text}/>
                )
            })}
        </div>
    );
};

export default CategoryCardList;