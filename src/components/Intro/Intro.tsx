import styles from './Intro.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IntroProps {
    children: React.ReactElement;
}

function Intro({ children }: IntroProps) {
    return (
        <div className={cx('intro')}>
            <div className={cx('intro-background')}></div>
            <div className={cx('intro__content')}>{children}</div>
        </div>
    );
}

export default Intro;
