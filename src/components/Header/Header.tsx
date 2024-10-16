import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div>
            <h1 className={cx('header')}>Hello Word</h1>
        </div>
    );
}

export default Header;
