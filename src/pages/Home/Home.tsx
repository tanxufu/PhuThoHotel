import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { useFetchRecentBlogsQuery } from '~/apis/blogs.api';
import image from '~/assets/images';
import Button from '~/components/Button';
import PostCard from '~/components/PostCard';

const cx = classNames.bind(styles);

function Home() {
    const { data: recentBlogsData } = useFetchRecentBlogsQuery(3);

    return (
        <div className={cx('home')}>
            {/* intro */}

            <section className={cx('home-intro')}>
                {/* info */}
                <div className={cx('home-intro__info')}>
                    <h2 className={cx('home-intro__label')}>
                        CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
                    </h2>
                    <h1 className={cx('home-intro__heading')}>PHUTHOTOURIST</h1>
                    <p className={cx('home-intro__founding-date')}>
                        Ngày thành lập 01/01/2019
                    </p>
                </div>

                {/* banner */}
                <div className={cx('home-banner')}>
                    <div
                        className={cx('home-banner__img-wrap--1', 'd-md-none')}
                    >
                        <img
                            src={image.banner_img_1}
                            alt=''
                            className={cx('home-banner__img--1', 'd-md-none')}
                        />
                    </div>
                    <div className={cx('home-banner__img-wrap--2')}>
                        <img
                            src={image.banner_img_2}
                            alt=''
                            className={cx('home-banner__img--2')}
                        />
                    </div>
                    <div className={cx('home-banner__img-wrap--3')}>
                        <img
                            src={image.banner_img_3}
                            alt=''
                            className={cx('home-banner__img--3')}
                        />
                    </div>
                    <div className={cx('home-banner__img-wrap--4')}>
                        <img
                            src={image.banner_img_4}
                            alt=''
                            className={cx('home-banner__img--4')}
                        />
                    </div>
                    <div
                        className={cx('home-banner__img-wrap--5', 'd-md-none')}
                    >
                        <img
                            src={image.banner_img_5}
                            alt=''
                            className={cx('home-banner__img--5', 'd-md-none')}
                        />
                    </div>{' '}
                </div>
            </section>
            <div className={cx('container')}>
                {/* home-content */}
                <div className={cx('home-content')}>
                    <article className={cx('home-about')}>
                        <div className={cx('row gx-6 gx-md-2')}>
                            <div className={cx('col-7 col-xxl-12')}>
                                <div className={cx('home-about__info')}>
                                    <p className={cx('home-about__label')}>
                                        VỀ CHÚNG TÔI
                                    </p>
                                    <h2 className={cx('home-about__heading')}>
                                        Chúng tôi cung cấp dịch vụ du lịch đáp
                                        ứng mọi nhu cầu của bạn!
                                    </h2>
                                    <div
                                        className={cx('home-about__separate')}
                                    ></div>
                                    <p className={cx('home-about__desc')}>
                                        Công ty Cổ phần Dịch vụ Du lịch Phú Thọ
                                        (Phuthotourist), là một đơn vị thành
                                        viên của Saigontourist. Phuthotourist
                                        được biết đến với các sản phẩm du lịch
                                        nổi tiếng tại TP.HCM (Quận 11) như:
                                        <ul className={cx('home-about__list')}>
                                            <li
                                                className={cx(
                                                    'home-about__item'
                                                )}
                                            >
                                                Công viên Văn hóa Đầm Sen
                                            </li>
                                            <li
                                                className={cx(
                                                    'home-about__item'
                                                )}
                                            >
                                                Khu du lịch sinh thái Vàm Sát
                                            </li>
                                            <li
                                                className={cx(
                                                    'home-about__item'
                                                )}
                                            >
                                                Khách sạn Ngọc Lan
                                            </li>
                                            <li
                                                className={cx(
                                                    'home-about__item'
                                                )}
                                            >
                                                Khách sạn Phú Thọ
                                            </li>
                                            <li
                                                className={cx(
                                                    'home-about__item'
                                                )}
                                            >
                                                Trung tâm chăm sóc sức khỏe &
                                                giải trí Đầm Sen (Damsen Plaza)
                                            </li>
                                            <li
                                                className={cx(
                                                    'home-about__item'
                                                )}
                                            >
                                                Nhà hàng Thủy Tạ Đầm Sen
                                            </li>
                                            <li
                                                className={cx(
                                                    'home-about__item'
                                                )}
                                            >
                                                Cà phê Vườn Đá
                                            </li>
                                            <li
                                                className={cx(
                                                    'home-about__item'
                                                )}
                                            >
                                                Trung tâm Dịch vụ Du lịch Đầm
                                                Sen (Damsen Travel)
                                            </li>
                                            <li
                                                className={cx(
                                                    'home-about__item'
                                                )}
                                            >
                                                Liên kết với Công viên nước Đầm
                                                Sen (Đầm Sen Water Park).
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div className={cx('col-5 col-xxl-12')}>
                                <div className={cx('home-about__media')}>
                                    <div
                                        className={cx('home-about__media-top')}
                                    >
                                        <img
                                            className={cx(
                                                'home-about__media-img-top'
                                            )}
                                            src={image.blog_img_2}
                                            alt='about-media'
                                        />
                                    </div>

                                    <div
                                        className={cx(
                                            'home-about__media-bottom'
                                        )}
                                    >
                                        <img
                                            className={cx(
                                                'home-about__media-img-bottom'
                                            )}
                                            src={image.blog_img_1}
                                            alt='about-media'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button
                            className={cx('home-about__btn')}
                            to='#'
                            text='Xem chi tiết'
                            maxWidth='153px'
                        />
                    </article>

                    <section className={cx('home-post')}>
                        <div className={cx('home-post__info')}>
                            <p className={cx('home-post__label')}>
                                CHIA SẺ THÔNG TIN
                            </p>
                            <h2 className={cx('home-post__heading')}>
                                Bài viết mới
                            </h2>
                            <div className={cx('home-post__separate')}></div>
                            <p className={cx('home-post__desc')}>
                                Hãy cùng chúng tôi chia sẻ những bài viết mới
                                với các thông tin về những sản phẩm du lịch
                            </p>
                        </div>
                        <div className={cx('home-post__list')}>
                            <div
                                className={cx(
                                    'row row-cols-3 row-cols-xl-1 gx-2 gy-xl-3 gy-md-2'
                                )}
                            >
                                {recentBlogsData?.map((blog) => {
                                    return (
                                        <div
                                            key={blog.id}
                                            className={cx('col')}
                                        >
                                            <PostCard
                                                id={blog.id}
                                                host={blog.author}
                                                title={blog.title}
                                                desc='Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...'
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
                        <Button
                            className={cx('home-post__btn')}
                            text='Xem thêm bài viết'
                            to='/blogs'
                            maxWidth='202px'
                        />
                    </section>

                    <section className={cx('home-service')}>
                        <div className={cx('home-service__info')}>
                            <p className={cx('home-service__label')}>
                                LĨNH VỰC HOẠT ĐỘNG
                            </p>
                            <h2 className={cx('home-service__heading')}>
                                Các dịch vụ trọng tâm
                            </h2>
                            <div className={cx('home-service__separate')}></div>
                            <p className={cx('home-service__desc')}>
                                3 dịch vụ trọng tâm của Phuthotourist là vui
                                chơi giải trí, nhà hàng – khách sạn, và dịch vụ
                                lữ hành
                            </p>
                        </div>

                        <div className={cx('home-service__list')}>
                            <div
                                className={cx(
                                    'row row-cols-3 row-cols-xl-1 gx-2 gy-xl-3 gy-lg-2 '
                                )}
                            >
                                <div className={cx('col')}>
                                    <article className={cx('service-card')}>
                                        <div
                                            className={cx(
                                                'service-card__img-wrap'
                                            )}
                                        >
                                            <img
                                                src={image.service_img_1}
                                                alt=''
                                                className={cx(
                                                    'service-card__img'
                                                )}
                                            />
                                        </div>
                                        <div
                                            className={cx('service-card__info')}
                                        >
                                            <h3
                                                className={cx(
                                                    'service-card__title'
                                                )}
                                            >
                                                Vui chơi giải trí
                                            </h3>
                                            <p
                                                className={cx(
                                                    'service-card__desc'
                                                )}
                                            >
                                                Với 2 khu giải trí nổi tiếng
                                                TP.HCM là Công viên văn hóa Đầm
                                                Sen, và khu du lịch sinh thái
                                                Vàm Sát (H.Cần Giờ)...
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className={cx('col')}>
                                    <article className={cx('service-card')}>
                                        <div
                                            className={cx(
                                                'service-card__img-wrap'
                                            )}
                                        >
                                            <img
                                                src={image.service_img_2}
                                                alt=''
                                                className={cx(
                                                    'service-card__img'
                                                )}
                                            />
                                        </div>
                                        <div
                                            className={cx('service-card__info')}
                                        >
                                            <h3
                                                className={cx(
                                                    'service-card__title'
                                                )}
                                            >
                                                Nhà hàng – Khách sạn
                                            </h3>
                                            <p
                                                className={cx(
                                                    'service-card__desc'
                                                )}
                                            >
                                                Với hệ thống khách sạn Phú Thọ
                                                và Ngọc Lan đạt chuẩn 3 sao,
                                                chuyên tiếp đón các đoàn thể
                                                thao....
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className={cx('col')}>
                                    <article className={cx('service-card')}>
                                        <div
                                            className={cx(
                                                'service-card__img-wrap'
                                            )}
                                        >
                                            <img
                                                src={image.service_img_3}
                                                alt=''
                                                className={cx(
                                                    'service-card__img'
                                                )}
                                            />
                                        </div>
                                        <div
                                            className={cx('service-card__info')}
                                        >
                                            <h3
                                                className={cx(
                                                    'service-card__title'
                                                )}
                                            >
                                                Dịch vụ Lữ hành
                                            </h3>
                                            <p
                                                className={cx(
                                                    'service-card__desc'
                                                )}
                                            >
                                                Tổ chức các tour trong và ngoài
                                                nước với Trung tâm Dịch vụ du
                                                lịch Đầm Sen. Ngoài ra Trung tâm
                                                còn thế mạnh là tổ chức...
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;
