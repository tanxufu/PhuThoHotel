import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import icon from '~/assets/icon';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className={cx('header')}>
            <nav className={cx('topbar')}>
                {/* lg screen */}
                <Link to='/' className={cx('topbar__link--logo')}>
                    <img
                        className={cx('topbar__logo', 'd-none', 'd-lg-block')}
                        src={icon.logo}
                        alt='Phu Tho Hotel'
                    />
                </Link>

                <ul
                    className={cx('topbar__list', { 'd-lg-none': !isMenuOpen })}
                >
                    <button
                        className={cx('close-btn', 'd-none', 'd-lg-block')}
                        onClick={toggleMenu}
                    >
                        <img
                            src={icon.xmark}
                            alt='x-mark'
                            className={cx('close-btn__icon')}
                        />
                    </button>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                cx('topbar__link', {
                                    'topbar__link--active': isActive
                                })
                            }
                            to='#'
                        >
                            TRANG CHỦ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={cx('topbar__link')} to='#'>
                            BÀI VIẾT
                        </NavLink>
                    </li>
                    <li className={cx('d-lg-none')}>
                        <Link
                            to='/'
                            className={cx('topbar__link--logo', 'd-lg-none')}
                        >
                            <img
                                className={cx('topbar__logo')}
                                src={icon.logo}
                                alt='Phu Tho Hotel'
                            />
                        </Link>
                    </li>
                    <li>
                        <NavLink className={cx('topbar__link')} to='#'>
                            TÀI LIỆU
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={cx('topbar__link')} to='#'>
                            TUYỂN DỤNG
                        </NavLink>
                    </li>
                </ul>

                <button
                    className={cx('topbar__more', 'd-none', 'd-lg-block')}
                    onClick={toggleMenu}
                >
                    <img
                        src={icon.menu}
                        alt='more'
                        className={cx('topbar__more-icon')}
                    />
                </button>
            </nav>
        </header>
    );
}

export default Header;
