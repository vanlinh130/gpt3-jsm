import React from 'react';
import styles from './Features.module.scss';
import classNames from 'classnames/bind';
import { Feature } from '../../components';

const cx = classNames.bind(styles);

const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
        title: 'Become the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
        title: 'Improving end distrusts instantlyMessage or am nothing',
        text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
        title: 'Really boy law county',
        text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
];

const Features = () => {
    return (
        <div className={cx('features', 'section__padding')} id="features">
            <div className={cx('features-heading')}>
                <h1 className={cx('gradient__text')}>
                    The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                </h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className={cx('features-container')}>
                {featuresData.map((item, index) => (
                    <Feature key={index} title={item.title} text={item.text} />
                ))}
            </div>
        </div>
    );
};

export default Features;
