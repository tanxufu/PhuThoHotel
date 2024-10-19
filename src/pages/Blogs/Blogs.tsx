import classNames from 'classnames/bind';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '~/components/PageHeader';
import styles from './Blogs.module.scss';
import icon from '~/assets/icons';
import image from '~/assets/images';
import PostCard from '~/components/PostCard';

const cx = classNames.bind(styles);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function Blogs() {
    return (
        <div className={cx('blog')}>
            <div className={cx('container')}>
                <div className={cx('blog-intro')}>
                    <div className={cx('blog-intro__heading')}>
                        <PageHeader text='BÀI VIẾT' />
                    </div>

                    <div className={cx('blog-intro__inner')}>
                        <div className={cx('row gy-lg-3')}>
                            <div className={cx('col-9 col-xxl-8 col-lg-12')}>
                                <section className={cx('blog-slider')}>
                                    <div
                                        className={cx('blog-slider__img-wrap')}
                                    >
                                        <img
                                            src={image.post_img_1}
                                            alt=''
                                            className={cx('blog-slider__img')}
                                        />
                                    </div>
                                    <div className={cx('blog-slider__content')}>
                                        <div
                                            className={cx('blog-slider__info')}
                                        >
                                            <h2
                                                className={cx(
                                                    'blog-slider__heading'
                                                )}
                                            >
                                                Thông báo mời chào giá cạnh
                                                tranh cung cấp nước đá chế tác
                                                Băng Đăng
                                            </h2>
                                            <p
                                                className={cx(
                                                    'blog-slider__desc',
                                                    'd-md-none'
                                                )}
                                            >
                                                THÔNG BÁO MỜI CHÀO GIÁ CẠNH
                                                TRANH CÔNG TY CỔ PHẦN DỊCH VỤ DU
                                                LỊCH PHÚ THỌ tổ chức chào giá
                                                cạnh tranh lựa chọn đơn vị Cung
                                                cấp nước đá để chế tác Băng Đăng
                                                tại Công viên Văn hóa Đầm Sen.
                                            </p>
                                        </div>

                                        <div className={cx('blog-slider__act')}>
                                            <div
                                                className={cx(
                                                    'blog-slider__move'
                                                )}
                                            >
                                                <button
                                                    className={cx(
                                                        'blog-slider__btn'
                                                    )}
                                                >
                                                    <img
                                                        src={icon.prev_prev}
                                                        alt=''
                                                        className={cx(
                                                            'blog-slider__btn-prev'
                                                        )}
                                                    />
                                                </button>
                                                <button
                                                    className={cx(
                                                        'blog-slider__btn'
                                                    )}
                                                >
                                                    <img
                                                        src={icon.prev_next}
                                                        alt=''
                                                        className={cx(
                                                            'blog-slider__btn-next'
                                                        )}
                                                    />
                                                </button>
                                            </div>

                                            <div
                                                className={cx(
                                                    'blog-slider__paginate'
                                                )}
                                            >
                                                <div
                                                    className={cx(
                                                        // 'blog-slider__page',
                                                        'blog-slider__page--active'
                                                    )}
                                                ></div>
                                                <div
                                                    className={cx(
                                                        'blog-slider__page'
                                                    )}
                                                ></div>
                                                <div
                                                    className={cx(
                                                        'blog-slider__page'
                                                    )}
                                                ></div>
                                                <div
                                                    className={cx(
                                                        'blog-slider__page'
                                                    )}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className={cx('col-3 col-xxl-4 col-lg-12')}>
                                <section className={cx('new-blog')}>
                                    <h2 className={cx('new-blog__heading')}>
                                        Bài mới nhất
                                    </h2>
                                    <ul className={cx('new-blog__list')}>
                                        <li>
                                            <article
                                                className={cx('new-blog__item')}
                                            >
                                                <div
                                                    className={cx(
                                                        'new-blog__img-wrap'
                                                    )}
                                                >
                                                    <img
                                                        src={image.post_img_1}
                                                        alt=''
                                                        className={cx(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </div>

                                                <div
                                                    className={cx(
                                                        'new-blog__info'
                                                    )}
                                                >
                                                    <h3
                                                        className={cx(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        Thông báo đấu giá giữ xe
                                                        tại CVHH Đầm Sen
                                                    </h3>
                                                    <div
                                                        className={cx(
                                                            'new-blog__data'
                                                        )}
                                                    >
                                                        <p
                                                            className={cx(
                                                                'new-blog__view'
                                                            )}
                                                        >
                                                            10N lượt xem
                                                        </p>
                                                        <div
                                                            className={cx(
                                                                'new-blog__dot'
                                                            )}
                                                        ></div>
                                                        <p
                                                            className={cx(
                                                                'new-blog__view'
                                                            )}
                                                        >
                                                            20/02/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>

                                        <li>
                                            <article
                                                className={cx('new-blog__item')}
                                            >
                                                <div
                                                    className={cx(
                                                        'new-blog__img-wrap'
                                                    )}
                                                >
                                                    <img
                                                        src={image.post_img_2}
                                                        alt=''
                                                        className={cx(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </div>

                                                <div
                                                    className={cx(
                                                        'new-blog__info'
                                                    )}
                                                >
                                                    <h3
                                                        className={cx(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        Thông báo đấu giá giữ xe
                                                        tại CVHH Đầm Sen
                                                    </h3>
                                                    <div
                                                        className={cx(
                                                            'new-blog__data'
                                                        )}
                                                    >
                                                        <p
                                                            className={cx(
                                                                'new-blog__view'
                                                            )}
                                                        >
                                                            10N lượt xem
                                                        </p>
                                                        <div
                                                            className={cx(
                                                                'new-blog__dot'
                                                            )}
                                                        ></div>
                                                        <p
                                                            className={cx(
                                                                'new-blog__view'
                                                            )}
                                                        >
                                                            20/02/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>

                                        <li>
                                            <article
                                                className={cx('new-blog__item')}
                                            >
                                                <div
                                                    className={cx(
                                                        'new-blog__img-wrap'
                                                    )}
                                                >
                                                    <img
                                                        src={image.post_img_1}
                                                        alt=''
                                                        className={cx(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </div>

                                                <div
                                                    className={cx(
                                                        'new-blog__info'
                                                    )}
                                                >
                                                    <h3
                                                        className={cx(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        Thông báo đấu giá giữ xe
                                                        tại CVHH Đầm Sen
                                                    </h3>
                                                    <div
                                                        className={cx(
                                                            'new-blog__data'
                                                        )}
                                                    >
                                                        <p
                                                            className={cx(
                                                                'new-blog__view'
                                                            )}
                                                        >
                                                            10N lượt xem
                                                        </p>
                                                        <div
                                                            className={cx(
                                                                'new-blog__dot'
                                                            )}
                                                        ></div>
                                                        <p
                                                            className={cx(
                                                                'new-blog__view'
                                                            )}
                                                        >
                                                            20/02/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>

                                        <li>
                                            <article
                                                className={cx('new-blog__item')}
                                            >
                                                <div
                                                    className={cx(
                                                        'new-blog__img-wrap'
                                                    )}
                                                >
                                                    <img
                                                        src={image.post_img_2}
                                                        alt=''
                                                        className={cx(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </div>

                                                <div
                                                    className={cx(
                                                        'new-blog__info'
                                                    )}
                                                >
                                                    <h3
                                                        className={cx(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        Thông báo đấu giá giữ xe
                                                        tại CVHH Đầm Sen
                                                    </h3>
                                                    <div
                                                        className={cx(
                                                            'new-blog__data'
                                                        )}
                                                    >
                                                        <p
                                                            className={cx(
                                                                'new-blog__view'
                                                            )}
                                                        >
                                                            10N lượt xem
                                                        </p>
                                                        <div
                                                            className={cx(
                                                                'new-blog__dot'
                                                            )}
                                                        ></div>
                                                        <p
                                                            className={cx(
                                                                'new-blog__view'
                                                            )}
                                                        >
                                                            20/02/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>

                                        <li>
                                            <article
                                                className={cx('new-blog__item')}
                                            >
                                                <div
                                                    className={cx(
                                                        'new-blog__img-wrap'
                                                    )}
                                                >
                                                    <img
                                                        src={image.blog_img_3}
                                                        alt=''
                                                        className={cx(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </div>

                                                <div
                                                    className={cx(
                                                        'new-blog__info'
                                                    )}
                                                >
                                                    <h3
                                                        className={cx(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        Thông báo đấu giá giữ xe
                                                        tại CVHH Đầm Sen
                                                    </h3>
                                                    <div
                                                        className={cx(
                                                            'new-blog__data'
                                                        )}
                                                    >
                                                        <p
                                                            className={cx(
                                                                'new-blog__view'
                                                            )}
                                                        >
                                                            10N lượt xem
                                                        </p>
                                                        <div
                                                            className={cx(
                                                                'new-blog__dot'
                                                            )}
                                                        ></div>
                                                        <p
                                                            className={cx(
                                                                'new-blog__view'
                                                            )}
                                                        >
                                                            20/02/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('blog-main')}>
                    <div className={cx('row')}>
                        <div className={cx('col-3 d-xl-none')}>
                            <div className={cx('blog-topic')}>
                                <h2 className={cx('blog-topic__heading')}>
                                    CHỦ ĐỀ BÀI VIẾT
                                </h2>
                                <ul className={cx('blog-topic__list')}>
                                    <Link to='#'>
                                        <li
                                            className={cx(
                                                'blog-topic__item',
                                                'blog-topic__item--active'
                                            )}
                                        >
                                            <img
                                                src={icon.light}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon',
                                                    'blog-topic__icon--active'
                                                )}
                                            />
                                            <p
                                                className={cx(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Giới Thiệu
                                            </p>
                                        </li>
                                    </Link>

                                    <Link to='#'>
                                        <li className={cx('blog-topic__item')}>
                                            <img
                                                src={icon.news}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon'
                                                )}
                                            />
                                            <p
                                                className={cx(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Tin tức
                                            </p>
                                        </li>
                                    </Link>

                                    <Link to='#'>
                                        <li className={cx('blog-topic__item')}>
                                            <img
                                                src={icon.event}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon'
                                                )}
                                            />
                                            <p
                                                className={cx(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Sự kiện
                                            </p>
                                        </li>
                                    </Link>

                                    <Link to='#'>
                                        <li className={cx('blog-topic__item')}>
                                            <img
                                                src={icon.notification}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon'
                                                )}
                                            />
                                            <p
                                                className={cx(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Thông báo
                                            </p>
                                        </li>
                                    </Link>

                                    <Link to='#'>
                                        <li className={cx('blog-topic__item')}>
                                            <img
                                                src={icon.file}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon'
                                                )}
                                            />
                                            <p
                                                className={cx(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Tin cổ đông
                                            </p>
                                        </li>
                                    </Link>

                                    <Link to='#'>
                                        <li className={cx('blog-topic__item')}>
                                            <img
                                                src={icon.group}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon'
                                                )}
                                            />
                                            <p
                                                className={cx(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Hoạt động đoàn thể
                                            </p>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('col-9 col-xl-12')}>
                            <div className={cx('blog-filter')}>
                                <div className={cx('blog-search')}>
                                    <img
                                        src={icon.search}
                                        alt=''
                                        className={cx('blog-search__icon')}
                                    />

                                    <input
                                        type='text'
                                        className={cx('blog-search__input')}
                                        placeholder='Tìm kiếm'
                                    />

                                    <img
                                        src={icon.time}
                                        alt=''
                                        className={cx(
                                            'blog-search__time',
                                            'd-none'
                                        )}
                                    />
                                </div>

                                <div
                                    className={cx(
                                        'blog-datepicker',
                                        'd-lg-none'
                                    )}
                                >
                                    <Space direction='vertical'>
                                        <DatePicker
                                            className={cx(
                                                'blog-datepicker__select'
                                            )}
                                            onChange={onChange}
                                        />
                                    </Space>
                                    <img
                                        src={icon.arrow_right}
                                        alt=''
                                        className={cx('blog-datepicker--to')}
                                    />
                                    <Space direction='vertical'>
                                        <DatePicker
                                            className={cx(
                                                'blog-datepicker__select'
                                            )}
                                            onChange={onChange}
                                        />
                                    </Space>
                                </div>

                                <div className={cx('blog-sort')}>
                                    <img
                                        src={icon.sort}
                                        alt=''
                                        className={cx('blog-sort__icon')}
                                    />
                                    <span
                                        className={cx(
                                            'blog-sort__title d-md-none'
                                        )}
                                    >
                                        A đến Z
                                    </span>
                                </div>

                                <div
                                    className={cx(
                                        'blog-fil',
                                        'd-none',
                                        'd-xl-flex'
                                    )}
                                >
                                    <img
                                        src={icon.filter}
                                        alt=''
                                        className={cx('blog-fil__icon')}
                                    />
                                </div>
                            </div>

                            <div className={cx('blog-list')}>
                                <div
                                    className={cx(
                                        'row row-cols-4 row-cols-xxl-3 row-cols-lg-2 row-cols-sm-1 gy-2 gx-2'
                                    )}
                                >
                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Thông báo: đấu giá giữ xe tại CVHH Đầm Sen'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_3}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Thông báo: đấu giá giữ xe tại CVHH Đầm Sen'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_1}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Thông báo: đấu giá giữ xe tại CVHH Đầm Sen'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_2}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Thông báo: đấu giá giữ xe tại CVHH Đầm Sen'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_4}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Thông báo: đấu giá giữ xe tại CVHH Đầm Sen'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_5}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Thông báo: đấu giá giữ xe tại CVHH Đầm Sen'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_6}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Thông báo: đấu giá giữ xe tại CVHH Đầm Sen'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_7}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Thông báo: đấu giá giữ xe tại CVHH Đầm Sen'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_8}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_9}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_10}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_11}
                                        />
                                    </div>

                                    <div className={cx('col')}>
                                        <PostCard
                                            mini={true}
                                            host='Admin'
                                            title='Màn hình nước Singapore sẽ có tại Đầm Sen vào 27/4/2019'
                                            tags={[
                                                { name: 'Sự kiện' },
                                                { name: 'Thông báo' },
                                                { name: 'Tin tức' }
                                            ]}
                                            view='10N'
                                            postDate='20/02/2022'
                                            image={image.blog_img_12}
                                        />
                                    </div>
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

export default Blogs;
