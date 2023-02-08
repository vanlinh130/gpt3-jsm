import React from 'react';
import classNames from 'classnames/bind';
import styles from './CTA.module.scss';

const cx = classNames.bind(styles);

const CTA = () => {
    return (
        <div className={cx('cta')}>
            <div className={cx('cta-content')}>
                <p>Request Early Access to Get Started</p>
                <h3>Register Today & start exploring the endless possibilities.</h3>
            </div>
            <div className={cx('cta-btn')}>
                <button type="button">Get Started</button>
            </div>
        </div>
    );
};

export default CTA;
