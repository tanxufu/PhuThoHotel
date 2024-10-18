import { Link } from 'react-router-dom';
import styles from './PostCard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface PostCardProps {
    host: string;
    title: string;
    desc: string;
    tags: { name: string }[];
    view: string;
    postDate: string;
    image: string;
}

function PostCard({
    host,
    title,
    desc,
    tags,
    view,
    postDate,
    image
}: PostCardProps) {
    return (
        <article className={cx('postcard')}>
            <Link to='#'>
                <div className={cx('postcard__img-wrap')}>
                    <img src={image} alt='' className={cx('postcard__img')} />
                </div>
            </Link>
            <div className={cx('postcard__info')}>
                <div className={cx('postcard__label')}>
                    <p className={cx('postcard__host')}>{host}</p>
                    <div className={cx('postcard__active')}></div>
                </div>

                <Link to='#'>
                    <h3 className={cx('postcard__title')}>{title}</h3>
                </Link>

                <p className={cx('postcard__desc')}>{desc}</p>

                <div className={cx('postcard__tags')}>
                    {tags.map((tag, index) => {
                        return (
                            <div key={index} className={cx('postcard__tag')}>
                                {tag.name}
                            </div>
                        );
                    })}

                    {/* <div className={cx('postcard__tag')}>Sự kiện</div>
                    <div className={cx('postcard__tag')}>Thông báo</div>
                    <div className={cx('postcard__tag')}>Tin tức</div> */}
                </div>

                <div className={cx('postcard__data')}>
                    <p className={cx('postcard__view')}>{view} lượt xem</p>
                    <div className={cx('postcard__dot')}></div>
                    <p className={cx('postcard__view')}>{postDate}</p>
                </div>
            </div>
        </article>
    );
}

export default PostCard;
