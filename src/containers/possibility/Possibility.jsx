import React from 'react';
import classNames from 'classnames/bind';
import styles from './Possibility.module.scss';
import images from './../../assets/index';

const cx = classNames.bind(styles);

const Possibility = () => {
    return (
        <div className={cx('possibility', 'section__padding')} id="possibility">
            <div className={cx('possibility-image')}>
                <img src={images.possibility} alt="possibility" />
            </div>
            <div className={cx('possibility-content')}>
                <h4>Request Early Access to Get Started</h4>
                <h1 className={cx('gradient__text')}>
                    The possibilities are <br /> beyond your imagination
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                    Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow
                    asked of.
                </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
};

export default Possibility;
