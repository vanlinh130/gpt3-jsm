import React from 'react';
import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import { Article } from '../../components';
import images from '../../assets';

const cx = classNames.bind(styles);

const Blog = () => {
    return (
        <div className={cx('blog', 'section__padding')} id="blog">
            <div className={cx('blog-heading')}>
                <h1 className={cx('gradient__text')}>
                    A lot is happening, <br /> We are blogging about it.
                </h1>
            </div>
            <div className={cx('blog-container')}>
                <div className={cx('blog-container__groupA')}>
                    <Article
                        imgUrl={images.blog1}
                        date="Dec 28, 2022"
                        text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
                <div className={cx('blog-container__groupB')}>
                    <Article
                        imgUrl={images.blog2}
                        date="Dec 28, 2022"
                        text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        imgUrl={images.blog3}
                        date="Dec 28, 2022"
                        text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        imgUrl={images.blog4}
                        date="Dec 28, 2022"
                        text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        imgUrl={images.blog5}
                        date="Dec 28, 2022"
                        text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        s
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
