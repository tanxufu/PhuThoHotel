import { Link } from 'react-router-dom';
import styles from './PostCard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface PostCardProps {
    id: string;
    host: string;
    title: string;
    desc?: string;
    tags: string[];
    view: string;
    postDate: string;
    image: string;
    mini?: boolean;
}

function PostCard({
    id,
    host,
    title,
    desc,
    tags,
    view,
    postDate,
    image,
    mini = false
}: PostCardProps) {
    return (
        <article className={cx('postcard', { 'postcard--mini': mini })}>
            <Link to={`/blog-details?id=${id}`}>
                <div
                    className={cx('postcard__img-wrap', {
                        'postcard--mini__img-wrap': mini
                    })}
                >
                    <img
                        src={image}
                        alt=''
                        className={cx('postcard__img', {
                            'postcard--mini__img': mini
                        })}
                    />
                </div>
            </Link>
            <div
                className={cx('postcard__info', {
                    'postcard--mini__info': mini
                })}
            >
                <div
                    className={cx('postcard__label', {
                        'postcard--mini__label': mini
                    })}
                >
                    <p
                        className={cx('postcard__host', {
                            'postcard--mini__host': mini
                        })}
                    >
                        {host}
                    </p>
                    <div
                        className={cx('postcard__active', {
                            'postcard--mini__active': mini
                        })}
                    ></div>
                </div>

                <Link to={`/blog-details?id=${id}`}>
                    <h3
                        className={cx('postcard__title', {
                            'postcard--mini__title': mini
                        })}
                    >
                        {title}
                    </h3>
                </Link>

                {desc && (
                    <p
                        className={cx('postcard__desc', {
                            'postcard--mini__desc': mini
                        })}
                    >
                        {desc}
                    </p>
                )}

                <div
                    className={cx('postcard__tags', {
                        'postcard--mini__tags': mini
                    })}
                >
                    {tags.map((tag, index) => {
                        return (
                            <div
                                key={index}
                                className={cx('postcard__tag', {
                                    'postcard--mini__tag': mini
                                })}
                            >
                                {tag}
                            </div>
                        );
                    })}

                    {/* <div className={cx('postcard__tag')}>Sự kiện</div>
                    <div className={cx('postcard__tag')}>Thông báo</div>
                    <div className={cx('postcard__tag')}>Tin tức</div> */}
                </div>

                <div
                    className={cx('postcard__data', {
                        'postcard--mini__data': mini
                    })}
                >
                    <p
                        className={cx('postcard__view', {
                            'postcard--mini__view': mini
                        })}
                    >
                        {view} lượt xem
                    </p>
                    <div
                        className={cx('postcard__dot', {
                            'postcard--mini__dot': mini
                        })}
                    ></div>
                    <p
                        className={cx('postcard__view', {
                            'postcard--mini__view': mini
                        })}
                    >
                        {postDate}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default PostCard;
