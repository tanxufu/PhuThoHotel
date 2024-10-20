import PageHeader from '~/components/PageHeader';
import styles from './Careers.module.scss';
import classNames from 'classnames/bind';
import icon from '~/assets/icons';
import CareerCard from '~/components/CareerCard';

const cx = classNames.bind(styles);

function Careers() {
    return (
        <div className={cx('career')}>
            <div className={cx('container')}>
                <div className={cx('career__heading')}>
                    <PageHeader text='TUYỂN DỤNG' />
                </div>

                <div className={cx('career__main')}>
                    <div className={cx('row gy-lg-2')}>
                        <div className={cx('col-3 col-lg-12')}>
                            <div className={cx('career-filter')}>
                                <div className={cx('career-search')}>
                                    <img
                                        src={icon.search}
                                        alt=''
                                        className={cx('career-search__icon')}
                                    />

                                    <input
                                        type='text'
                                        className={cx('career-search__input')}
                                        placeholder='Tìm kiếm'
                                    />

                                    <img
                                        src={icon.time}
                                        alt=''
                                        className={cx(
                                            'career-search__time',
                                            'd-none'
                                        )}
                                    />
                                </div>

                                <div
                                    className={cx(
                                        'career-filter__separate',
                                        'd-lg-none'
                                    )}
                                ></div>

                                <div
                                    className={cx(
                                        'career-filter__info',
                                        'd-lg-none'
                                    )}
                                >
                                    <div className={cx('career-category')}>
                                        <div
                                            className={cx(
                                                'career-category__heading'
                                            )}
                                        >
                                            <img
                                                src={icon.bag}
                                                alt=''
                                                className={cx(
                                                    'career-category__icon'
                                                )}
                                            />
                                            <h2
                                                className={cx(
                                                    'career-category__title'
                                                )}
                                            >
                                                Lĩnh vực
                                            </h2>
                                        </div>

                                        <ul
                                            className={cx(
                                                'career-category__list'
                                            )}
                                        >
                                            <li
                                                className={cx(
                                                    'career-category__item',
                                                    'career-category__item--active'
                                                )}
                                            >
                                                Hướng dẫn viên
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Kinh doanh
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Kỹ sư xây dựng
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Nhân viên kế toán
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Nhân viên kỹ thuật
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Nhân viên phục vụ
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={cx('career-category')}>
                                        <div
                                            className={cx(
                                                'career-category__heading'
                                            )}
                                        >
                                            <img
                                                src={icon.card}
                                                alt=''
                                                className={cx(
                                                    'career-category__icon'
                                                )}
                                            />
                                            <h2
                                                className={cx(
                                                    'career-category__title'
                                                )}
                                            >
                                                Hình thức làm việc
                                            </h2>
                                        </div>

                                        <ul
                                            className={cx(
                                                'career-category__list'
                                            )}
                                        >
                                            <li
                                                className={cx(
                                                    'career-category__item',
                                                    'career-category__item--active'
                                                )}
                                            >
                                                Bán thời gian
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Nhân viên chính thức
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Theo ca
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Thực tập
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={cx('career-category')}>
                                        <div
                                            className={cx(
                                                'career-category__heading'
                                            )}
                                        >
                                            <img
                                                src={icon.location}
                                                alt=''
                                                className={cx(
                                                    'career-category__icon'
                                                )}
                                            />
                                            <h2
                                                className={cx(
                                                    'career-category__title'
                                                )}
                                            >
                                                Nơi làm việc
                                            </h2>
                                        </div>

                                        <ul
                                            className={cx(
                                                'career-category__list'
                                            )}
                                        >
                                            <li
                                                className={cx(
                                                    'career-category__item',
                                                    'career-category__item--active'
                                                )}
                                            >
                                                Cà Phê Vườn Đá
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                NH Thủy Tạ Đầm Sen
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                CVVH Đầm Sen
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Khách sạn Ngọc Lan
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Khách sạn Phú Thọ
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                K Sinh Thái Vàm Sát
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Trung tâm DVDL Đầm Sen
                                            </li>
                                            <li
                                                className={cx(
                                                    'career-category__item'
                                                )}
                                            >
                                                Phuthotourist
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div
                                    className={cx(
                                        'career-fil',
                                        'd-none',
                                        'd-lg-flex'
                                    )}
                                >
                                    <img
                                        src={icon.filter}
                                        alt=''
                                        className={cx('career-fil__icon')}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={cx('col-9 col-lg-12')}>
                            <div
                                className={cx(
                                    'row row-cols-3 row-cols-xl-2 row-cols-md-1 gy-2 gx-2'
                                )}
                            >
                                <div className={cx('col')}>
                                    <CareerCard active={true} />
                                </div>

                                <div className={cx('col')}>
                                    <CareerCard />
                                </div>

                                <div className={cx('col')}>
                                    <CareerCard active={true} />
                                </div>

                                <div className={cx('col')}>
                                    <CareerCard active={true} />
                                </div>

                                <div className={cx('col')}>
                                    <CareerCard active={true} />
                                </div>

                                <div className={cx('col')}>
                                    <CareerCard />
                                </div>

                                <div className={cx('col')}>
                                    <CareerCard />
                                </div>

                                <div className={cx('col')}>
                                    <CareerCard active={true} />
                                </div>

                                <div className={cx('col d-xl-none')}>
                                    <CareerCard />
                                </div>
                            </div>

                            <div className={cx('paginate')}>
                                <button
                                    className={cx(
                                        'paginate__btn',
                                        'paginate__btn--disable'
                                    )}
                                >
                                    <img
                                        src={icon.paginate_prev_disable}
                                        alt=''
                                    />
                                </button>

                                <button
                                    className={cx(
                                        'paginate__page',
                                        'paginate__page--active'
                                    )}
                                >
                                    1
                                </button>

                                <button className={cx('paginate__page')}>
                                    2
                                </button>

                                <button className={cx('paginate__page')}>
                                    3
                                </button>

                                <button className={cx('paginate__page')}>
                                    ...
                                </button>

                                <button className={cx('paginate__page')}>
                                    10
                                </button>

                                <button className={cx('paginate__btn')}>
                                    <img src={icon.paginate_next} alt='' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Careers;
