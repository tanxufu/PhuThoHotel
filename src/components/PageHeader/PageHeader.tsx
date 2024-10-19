import styles from './PageHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface PageHeaderProps {
    text: string;
}

function PageHeader({ text }: PageHeaderProps) {
    return (
        <h1 className={cx('page-header')}>
            <span className={cx('page-header__custom')}>{text}</span>
        </h1>
    );
}

export default PageHeader;
