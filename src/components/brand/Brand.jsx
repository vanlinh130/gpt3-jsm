import React from 'react';
import classNames from 'classnames/bind';
import styles from './Brand.module.scss';
import images from '../../assets';

const cx = classNames.bind(styles);

const Brand = () => {
    return (
        <div className={cx('brand')}>
            <div>
                <img src={images.google} alt="google" />
            </div>
            <div>
                <img src={images.slack} alt="slack" />
            </div>
            <div>
                <img src={images.atlassian} alt="atlassian" />
            </div>
            <div>
                <img src={images.dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={images.shopify} alt="shopify" />
            </div>
        </div>
    );
};

export default Brand;
