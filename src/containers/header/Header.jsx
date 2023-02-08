import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../assets';

const cx = classNames.bind(styles);

const header = () => {
    return (
        <div className={cx('header', 'section__padding')} id="home">
            <div className={cx('header-content')}>
                <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                <p>
                    Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                    Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow
                    asked of.
                </p>

                <div className={cx('header-content__input')}>
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>

                <div className={cx('header-content__people')}>
                    <img src={images.people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className={cx('header-image')}>
                <img src={images.ai} alt="ai" />
            </div>
        </div>
    );
};

export default header;
