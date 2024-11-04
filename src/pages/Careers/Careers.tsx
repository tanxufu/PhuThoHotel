import { useEffect, useState } from 'react';

import PageHeader from '~/components/PageHeader';
import styles from './Careers.module.scss';
import classNames from 'classnames/bind';
import icon from '~/assets/icons';
import CareerCard from '~/components/CareerCard';
import { useFetchCareersPaginatedQuery } from '~/apis/careers.api';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Careers() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(9);
    const [name, setName] = useState<string | undefined>();
    const [position, setPosition] = useState<string | undefined>();
    const [address, setAddress] = useState<string | undefined>();

    useEffect(() => {
        window.scrollTo(0, 0);

        const updateLimit = () => {
            const width = window.innerWidth;
            if (width <= 1200) {
                setLimit(6);
            } else {
                setLimit(9);
            }
        };

        updateLimit();
        window.addEventListener('resize', updateLimit);

        return () => window.removeEventListener('resize', updateLimit);
    }, [page]);

    const { data: careers } = useFetchCareersPaginatedQuery({
        page,
        limit,
        name,
        position,
        address
    });

    console.log(careers);
    if (!careers) {
        return <div>No data available</div>;
    }

    const totalPages = Math.ceil(careers.total / limit);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

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
                                    {/* filter  */}
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
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (name === 'bán hàng') {
                                                        setName(undefined);
                                                    } else {
                                                        setName('bán hàng');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                name ===
                                                                'bán hàng'
                                                        }
                                                    )}
                                                >
                                                    Bán hàng
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (name === 'kinh doanh') {
                                                        setName(undefined);
                                                    } else {
                                                        setName('kinh doanh');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                name ===
                                                                'kinh doanh'
                                                        }
                                                    )}
                                                >
                                                    Kinh doanh
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        name ===
                                                        'kỹ sư xây dựng'
                                                    ) {
                                                        setName(undefined);
                                                    } else {
                                                        setName(
                                                            'kỹ sư xây dựng'
                                                        );
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                name ===
                                                                'kỹ sư xây dựng'
                                                        }
                                                    )}
                                                >
                                                    Kỹ sư xây dựng
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (name === 'kế toán') {
                                                        setName(undefined);
                                                    } else {
                                                        setName('kế toán');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                name ===
                                                                'kế toán'
                                                        }
                                                    )}
                                                >
                                                    Nhân viên kế toán
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (name === 'kỹ thuật') {
                                                        setName(undefined);
                                                    } else {
                                                        setName('kỹ thuật');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                name ===
                                                                'kỹ thuật'
                                                        }
                                                    )}
                                                >
                                                    Nhân viên kỹ thuật
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (name === 'phục vụ') {
                                                        setName(undefined);
                                                    } else {
                                                        setName('phục vụ');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                name ===
                                                                'phục vụ'
                                                        }
                                                    )}
                                                >
                                                    Nhân viên phục vụ
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>

                                    {/* filter  */}
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
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        position ===
                                                        'bán thời gian'
                                                    ) {
                                                        setPosition(undefined);
                                                    } else {
                                                        setPosition(
                                                            'bán thời gian'
                                                        );
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                position ===
                                                                'bán thời gian'
                                                        }
                                                    )}
                                                >
                                                    Bán thời gian
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        position ===
                                                        'chính thức'
                                                    ) {
                                                        setPosition(undefined);
                                                    } else {
                                                        setPosition(
                                                            'chính thức'
                                                        );
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                position ===
                                                                'chính thức'
                                                        }
                                                    )}
                                                >
                                                    Nhân viên chính thức
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        position === 'theo ca'
                                                    ) {
                                                        setPosition(undefined);
                                                    } else {
                                                        setPosition('theo ca');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                position ===
                                                                'theo ca'
                                                        }
                                                    )}
                                                >
                                                    Theo ca
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        position === 'thời vụ'
                                                    ) {
                                                        setPosition(undefined);
                                                    } else {
                                                        setPosition('thời vụ');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                position ===
                                                                'thời vụ'
                                                        }
                                                    )}
                                                >
                                                    Thời vụ
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>

                                    {/* filter  */}
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
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (address === 'cà phê') {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('cà phê');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                address ===
                                                                'cà phê'
                                                        }
                                                    )}
                                                >
                                                    Cà Phê Vườn Đá
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        address === 'nhà hàng'
                                                    ) {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('nhà hàng');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                address ===
                                                                'nhà hàng'
                                                        }
                                                    )}
                                                >
                                                    NH Thủy Tạ Đầm Sen
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        address === 'công viên'
                                                    ) {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('công viên');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                address ===
                                                                'công viên'
                                                        }
                                                    )}
                                                >
                                                    CVVH Đầm Sen
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        address === 'ngọc lan'
                                                    ) {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('ngọc lan');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                address ===
                                                                'ngọc lan'
                                                        }
                                                    )}
                                                >
                                                    Khách sạn Ngọc Lan
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (address === 'phú thọ') {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('phú thọ');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                address ===
                                                                'phú thọ'
                                                        }
                                                    )}
                                                >
                                                    Khách sạn Phú Thọ
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (address === 'vàm sát') {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('vàm sát');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                address ===
                                                                'vàm sát'
                                                        }
                                                    )}
                                                >
                                                    K Sinh Thái Vàm Sát
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        address === 'trung tâm'
                                                    ) {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('trung tâm');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                address ===
                                                                'trung tâm'
                                                        }
                                                    )}
                                                >
                                                    Trung tâm DVDL Đầm Sen
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (address === 'tourist') {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('tourist');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={cx(
                                                        'career-category__item',
                                                        {
                                                            'career-category__item--active':
                                                                address ===
                                                                'tourist'
                                                        }
                                                    )}
                                                >
                                                    Phuthotourist
                                                </li>
                                            </Link>
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
                                {careers.careers.map((career) => {
                                    return (
                                        <div
                                            key={career.id}
                                            className={cx('col')}
                                        >
                                            <CareerCard
                                                id={career.id}
                                                active={true}
                                                image={career.image}
                                                name={career.name}
                                                position={career.position}
                                                address={career.address}
                                                postedDate={career.postedDate}
                                                jobDescription={
                                                    career.jobDescription
                                                }
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            <div className={cx('career-paginate')}>
                                <div className={cx('paginate')}>
                                    <button
                                        className={cx('paginate__btn', {
                                            'paginate__btn--disable': page === 1
                                        })}
                                        onClick={() =>
                                            handlePageChange(page - 1)
                                        }
                                        disabled={page === 1}
                                    >
                                        <img
                                            src={icon.paginate_next}
                                            alt=''
                                            style={{ rotate: '180deg' }}
                                        />
                                    </button>

                                    {[...Array(totalPages)].map((_, index) => {
                                        const pageNum = index + 1;
                                        return (
                                            <button
                                                key={pageNum}
                                                className={cx(
                                                    'paginate__page',
                                                    {
                                                        'paginate__page--active':
                                                            pageNum === page
                                                    }
                                                )}
                                                onClick={() =>
                                                    handlePageChange(pageNum)
                                                }
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}

                                    <button
                                        className={cx('paginate__btn', {
                                            'paginate__btn--disable':
                                                page === totalPages
                                        })}
                                        onClick={() =>
                                            handlePageChange(page + 1)
                                        }
                                        disabled={page === totalPages}
                                    >
                                        <img src={icon.paginate_next} alt='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Careers;
