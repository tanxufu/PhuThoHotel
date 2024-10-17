import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import icon from '~/assets/icon';

const cx = classNames.bind(styles);

function Footer() {
    const affiliateCompany = [
        {
            id: 1,
            name: 'Công viên Văn hóa Đầm Sen'
        },
        {
            id: 1,
            name: 'Khu du lịch sinh thái Vàm Sát'
        },
        {
            id: 1,
            name: 'Khách sạn Ngọc Lan (Quận 1)'
        },
        {
            id: 1,
            name: 'Khách sạn Phú Thọ (Quận 11)'
        },
        {
            id: 1,
            name: 'Trung tâm Du lịch Đầm Sen'
        }
    ];

    const companyInfo = {
        address: '15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM',
        phone: '02838650921',
        email: 'vanphong@damsenpark.vn',
        face: 'Phuthotourist'
    };

    return (
        <footer className={cx('footer')}>
            <div className={cx('container')}>
                <div className={cx('footer__inner')}>
                    <div className={cx('row gx-5 gy-xxl-4 gy-lg-4 gy-md-3')}>
                        <div className={cx('col-4 col-xxl-6 col-lg-12')}>
                            <div className={cx('footer__company')}>
                                <div className={cx('footer__top')}>
                                    <Link to='/'>
                                        <img
                                            className={cx('footer__top--logo')}
                                            src={icon.logo}
                                            alt='Phu Tho Hotel'
                                        />
                                    </Link>
                                    <div className={cx('footer__top--group')}>
                                        <h3
                                            className={cx('footer__top--label')}
                                        >
                                            CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ
                                            THỌ
                                        </h3>
                                        <h2 className={cx('footer__top--name')}>
                                            PHUTHOTOURIST
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-3 col-xxl-6 col-lg-12')}>
                            <div className={cx('footer__contact')}>
                                <h3 className={cx('footer__heading')}>
                                    LIÊN HỆ
                                </h3>
                                <ul className={cx('footer__contact--list')}>
                                    <li className={cx('footer__contact--item')}>
                                        <img src={icon.point} alt='address' />
                                        <p
                                            className={cx(
                                                'footer__contact--name'
                                            )}
                                        >
                                            {companyInfo.address}
                                        </p>
                                    </li>

                                    <li className={cx('footer__contact--item')}>
                                        <img src={icon.phone} alt='address' />
                                        <p
                                            className={cx(
                                                'footer__contact--name'
                                            )}
                                        >
                                            {companyInfo.phone}
                                        </p>
                                    </li>

                                    <li className={cx('footer__contact--item')}>
                                        <img src={icon.mail} alt='address' />
                                        <p
                                            className={cx(
                                                'footer__contact--name'
                                            )}
                                        >
                                            {companyInfo.email}
                                        </p>
                                    </li>

                                    <li className={cx('footer__contact--item')}>
                                        <img
                                            src={icon.facebook}
                                            alt='address'
                                        />
                                        <p
                                            className={cx(
                                                'footer__contact--name'
                                            )}
                                        >
                                            {companyInfo.face}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('col-5 col-xxl-12 col-lg-12')}>
                            <div className={cx('footer__affiliate')}>
                                <h3 className={cx('footer__heading')}>
                                    CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST
                                </h3>
                                <ul className={cx('footer__affiliate--list')}>
                                    {affiliateCompany.map((company) => {
                                        return (
                                            <li
                                                key={company.id}
                                                className={cx(
                                                    'footer__affiliate--item'
                                                )}
                                            >
                                                <p
                                                    className={cx(
                                                        'footer__affiliate--name'
                                                    )}
                                                >
                                                    {company.name}
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer__copyright')}>
                        Copyright ⓒ Công ty Cổ phần Dịch vụ Du lịch Phú Thọ
                        (Phuthotourist)
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
