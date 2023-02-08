import React from 'react';
import classNames from 'classnames/bind';
import styles from './Article.module.scss';

const cx = classNames.bind(styles);

const Article = ({ imgUrl, data, text }) => {
    return (
        <div className={cx('blog-container_article')}>
            <div className={cx('blog-container_article-image')}>
                <img src={imgUrl} alt="blog_images" />
            </div>
            <div className={cx('blog-container_article-content')}>
                <div>
                    <p>{data}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};

export default Article;
