import classNames from 'classnames/bind';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Carousel } from 'antd';

import PageHeader from '~/components/PageHeader';
import styles from './Blogs.module.scss';
import icon from '~/assets/icons';
import PostCard from '~/components/PostCard';
import {
    useFetchBlogsPaginatedQuery,
    useFetchRecentBlogsQuery
} from '~/apis/blogs.api';
import { Blog } from '~/utils/types';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function Blogs() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [tag, setTag] = useState<string | undefined>();
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen((prev) => !prev);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const updateLimit = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setLimit(6);
            } else if (width <= 992) {
                setLimit(9);
            } else {
                setLimit(12);
            }
        };

        updateLimit();
        window.addEventListener('resize', updateLimit);

        return () => window.removeEventListener('resize', updateLimit);
    }, []);

    const { data: blogs } = useFetchBlogsPaginatedQuery({
        page,
        limit,
        tag
    });

    const { data: recentBlogsData } = useFetchRecentBlogsQuery(5);

    if (!blogs) {
        return <div>No data available</div>;
    }

    const totalPages = Math.ceil(blogs.total / limit);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

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
                                <section>
                                    <Carousel
                                        arrows
                                        autoplay
                                        autoplaySpeed={2000}
                                        className='blog-slider'
                                    >
                                        {recentBlogsData?.map((blog) => {
                                            return (
                                                <div key={blog.id}>
                                                    <div
                                                        className={cx(
                                                            'blog-slider__img-wrap'
                                                        )}
                                                    >
                                                        <Link
                                                            to={`/blog-details?id=${blog.id}`}
                                                        >
                                                            <img
                                                                src={blog.image}
                                                                alt=''
                                                                className={cx(
                                                                    'blog-slider__img'
                                                                )}
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div
                                                        className={cx(
                                                            'blog-slider__content'
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'blog-slider__info'
                                                            )}
                                                        >
                                                            <Link
                                                                to={`/blog-details?id=${blog.id}`}
                                                            >
                                                                <h2
                                                                    className={cx(
                                                                        'blog-slider__heading'
                                                                    )}
                                                                >
                                                                    {blog.title}
                                                                </h2>
                                                            </Link>
                                                            <p
                                                                className={cx(
                                                                    'blog-slider__desc',
                                                                    'd-md-none'
                                                                )}
                                                            >
                                                                Lorem ipsum,
                                                                dolor sit amet
                                                                consectetur
                                                                adipisicing
                                                                elit. Sunt
                                                                perspiciatis
                                                                corrupti
                                                                adipisci eaque
                                                                tempore
                                                                temporibus
                                                                assumenda
                                                                laboriosam non
                                                                iusto sequi.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </Carousel>
                                </section>
                            </div>

                            <div className={cx('col-3 col-xxl-4 col-lg-12')}>
                                <section className={cx('new-blog')}>
                                    <h2 className={cx('new-blog__heading')}>
                                        Bài mới nhất
                                    </h2>
                                    <ul className={cx('new-blog__list')}>
                                        {recentBlogsData?.map((blog) => {
                                            return (
                                                <li key={blog.id}>
                                                    <article
                                                        className={cx(
                                                            'new-blog__item'
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'new-blog__img-wrap'
                                                            )}
                                                        >
                                                            <Link
                                                                to={`/blog-details?id=${blog.id}`}
                                                            >
                                                                <img
                                                                    src={
                                                                        blog.image
                                                                    }
                                                                    alt=''
                                                                    className={cx(
                                                                        'new-blog__img'
                                                                    )}
                                                                />
                                                            </Link>
                                                        </div>

                                                        <div
                                                            className={cx(
                                                                'new-blog__info'
                                                            )}
                                                        >
                                                            <Link
                                                                to={`/blog-details?id=${blog.id}`}
                                                            >
                                                                <h3
                                                                    className={cx(
                                                                        'new-blog__title'
                                                                    )}
                                                                >
                                                                    {blog.title}
                                                                </h3>
                                                            </Link>
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
                                                                    {
                                                                        blog.postedDate
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('blog-main')}>
                    <div className={cx('row')}>
                        <div className={cx('col-3')}>
                            <div
                                className={cx('blog-topic', {
                                    'd-xl-none': !isFilterOpen
                                })}
                            >
                                <h2 className={cx('blog-topic__heading')}>
                                    Chủ đề bài viết
                                </h2>
                                <ul className={cx('blog-topic__list')}>
                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Giới thiệu') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Giới thiệu');
                                            }
                                        }}
                                    >
                                        <li
                                            className={cx('blog-topic__item', {
                                                'blog-topic__item--active':
                                                    tag === 'Giới thiệu'
                                            })}
                                            onClick={toggleFilter}
                                        >
                                            <img
                                                src={icon.light}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Giới thiệu'
                                                    }
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

                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Tin tức') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Tin tức');
                                            }
                                        }}
                                    >
                                        <li
                                            className={cx('blog-topic__item', {
                                                'blog-topic__item--active':
                                                    tag === 'Tin tức'
                                            })}
                                            onClick={toggleFilter}
                                        >
                                            <img
                                                src={icon.news}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Tin tức'
                                                    }
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

                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Sự kiện') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Sự kiện');
                                            }
                                        }}
                                    >
                                        <li
                                            className={cx('blog-topic__item', {
                                                'blog-topic__item--active':
                                                    tag === 'Sự kiện'
                                            })}
                                            onClick={toggleFilter}
                                        >
                                            <img
                                                src={icon.event}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Sự kiện'
                                                    }
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

                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Thông báo') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Thông báo');
                                            }
                                        }}
                                    >
                                        <li
                                            className={cx('blog-topic__item', {
                                                'blog-topic__item--active':
                                                    tag === 'Thông báo'
                                            })}
                                            onClick={toggleFilter}
                                        >
                                            <img
                                                src={icon.notification}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Thông báo'
                                                    }
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

                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Tin cổ đông') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Tin cổ đông');
                                            }
                                        }}
                                    >
                                        <li
                                            className={cx('blog-topic__item', {
                                                'blog-topic__item--active':
                                                    tag === 'Tin cổ đông'
                                            })}
                                            onClick={toggleFilter}
                                        >
                                            <img
                                                src={icon.file}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag ===
                                                            'Tin cổ đông'
                                                    }
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

                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Hoạt động đoàn thể') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Hoạt động đoàn thể');
                                            }
                                        }}
                                    >
                                        <li
                                            className={cx('blog-topic__item', {
                                                'blog-topic__item--active':
                                                    tag === 'Hoạt động đoàn thể'
                                            })}
                                            onClick={toggleFilter}
                                        >
                                            <img
                                                src={icon.group}
                                                alt=''
                                                className={cx(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag ===
                                                            'Hoạt động đoàn thể'
                                                    }
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
                                <div
                                    className={cx(
                                        'blog-topic__act',
                                        'd-none',
                                        'd-xl-block'
                                    )}
                                >
                                    <Button
                                        className={cx('blog-topic__btn')}
                                        text='Huỷ'
                                        onClick={toggleFilter}
                                    ></Button>
                                </div>
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
                                    <button onClick={toggleFilter}>
                                        <img
                                            src={icon.filter}
                                            alt=''
                                            className={cx('blog-fil__icon')}
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className={cx('blog-list')}>
                                <div
                                    className={cx(
                                        'row row-cols-4 row-cols-xxl-3 row-cols-lg-2 row-cols-sm-1 gy-2 gx-2'
                                    )}
                                >
                                    {blogs.blogs.map((blog: Blog) => {
                                        return (
                                            <div
                                                key={blog.id}
                                                className={cx('col')}
                                            >
                                                <PostCard
                                                    id={blog.id}
                                                    mini={true}
                                                    host={blog.author}
                                                    title={blog.title}
                                                    tags={blog.tags}
                                                    view='10N'
                                                    postDate={blog.postedDate}
                                                    image={blog.image}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={cx('blog-paginate')}>
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

export default Blogs;
