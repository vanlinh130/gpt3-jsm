import React from 'react';
import classNames from 'classnames/bind';
import styles from './Feature.module.scss';

const cx = classNames.bind(styles);

const Feature = ({ title, text }) => (
    <div className={cx('features-container__feature')}>
        <div className={cx('features-container__feature-title')}>
            <div />
            <h1>{title}</h1>
        </div>
        <div className={cx('features-container_feature-text')}>
            <p>{text}</p>
        </div>
    </div>
);

export default Feature;
