import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from './../../assets/index';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer', 'section__padding')}>
            <div className={cx('footer-heading')}>
                <h1 className={cx('gradient__text')}>Do you want to step in to the future before others</h1>
            </div>

            <div className={cx('footer-btn')}>
                <p>Request Early Access</p>
            </div>

            <div className={cx('footer-links')}>
                <div className={cx('footer-links_logo')}>
                    <img src={images.logo1} alt="" />
                    <p>
                        Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
                    </p>
                </div>
                <div className={cx('footer-links_div')}>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className={cx('footer-links_div')}>
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className={cx('footer-links_div')}>
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkc</p>
                    <p>078 794 5995</p>
                    <p>linhvanle130@gmail.com</p>
                </div>
            </div>

            <div className={cx('footer-copyright')}>
                <p>@2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
