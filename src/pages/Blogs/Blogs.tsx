import styles from './Blogs.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Blogs() {
    return <div className={cx('blog')}>Bài viết</div>;
}

export default Blogs;
