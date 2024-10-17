import styles from './Careers.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Careers() {
    return <div className={cx('career')}>Tuyển dụng</div>;
}

export default Careers;
