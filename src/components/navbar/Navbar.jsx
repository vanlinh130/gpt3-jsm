import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import classNames from 'classnames/bind';
import images from '../../assets';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const Menu = () => (
    <>
        <p>
            <a href="#home">Home</a>
        </p>
        <p>
            <a href="#wgpt3">What is GPT?</a>
        </p>
        <p>
            <a href="#possibility">Open AI</a>
        </p>
        <p>
            <a href="#features">Case Studies</a>
        </p>
        <p>
            <a href="#blog">Library</a>
        </p>
    </>
);

const SignInUp = () => (
    <>
        <p>Sign in</p>
        <button type="button">Sign up</button>
    </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className={cx('navbar')}>
            <div className={cx('navbar-links')}>
                <div className={cx('navbar-links_logo')}>
                    <img src={images.logo1} alt="logo" />
                </div>
                <div className={cx('navbar-links_container')}>
                    <Menu />
                </div>
            </div>
            <div className={cx('navbar-sign')}>
                <SignInUp />
            </div>

            <div className={cx('navbar-menu')}>
                {toggleMenu ? (
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                ) : (
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                )}

                {toggleMenu && (
                    <div className={cx('navbar-menu_container', 'scale-up-center')}>
                        <div className={cx('navbar-menu_container-links')}>
                            <Menu />
                        </div>
                        <div className={cx('navbar-menu_container-links-sign')}>
                            <SignInUp />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
