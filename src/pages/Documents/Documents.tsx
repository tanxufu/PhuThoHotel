import styles from './Documents.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Documents() {
    return <div className={cx('documents')}>Tài liệu</div>;
}

export default Documents;
