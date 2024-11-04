import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './BlogDetails.module.scss';
import { useFetchBlogByIdQuery } from '~/apis/blogs.api';

// import PostCard from '~/components/PostCard';

const cx = classNames.bind(styles);

function BlogDetails() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useFetchBlogByIdQuery(id!);

    if (error) console.log(error);

    if (!data) return <div>No blog found.</div>;
    // console.log(data);

    return (
        <div className={cx('container')}>
            <article className={cx('post')}>
                <h1 className={cx('post__heading')}>{data?.title}</h1>
                <p className={cx('post__author')}>
                    by {data?.author} in on {data?.postedDate}
                </p>
                <div className={cx('post__img-wrap')}>
                    <img src={data?.image} alt='' className={cx('post__img')} />
                </div>

                {/* post-content */}
                <div className={cx('post-content')}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data?.content || ''
                        }}
                    />
                </div>

                <section className={cx('post-relate')}>
                    <h2 className={cx('post-relate__heading')}>
                        Bài viết liên quan
                    </h2>
                    <div className={cx('post-relate__list')}>
                        <div className={cx('row gx-2 gx-xl-1 gy-xl-2 gy-md-1')}>
                            {/* <div className={cx('col-3 col-xl-6 col-md-12')}>
                                <PostCard
                                    mini={true}
                                    host='Admin'
                                    title='Thông báo: đấu giá giữ xe tại CVHH Đầm Sen'
                                    tags={[]}
                                    // tags={[
                                    //     { name: 'Sự kiện' },
                                    //     { name: 'Thông báo' },
                                    //     { name: 'Tin tức' }
                                    // ]}
                                    view='10N'
                                    postDate='20/02/2022'
                                    image={image.blog_img_2}
                                />
                            </div> */}

                            {/* <div className={cx('col-3 col-xl-6 col-md-12')}>
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

                            <div className={cx('col-3 col-xl-6 col-md-12')}>
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

                            <div className={cx('col-3 col-xl-6 col-md-12')}>
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
                            </div> */}
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
}

export default BlogDetails;
