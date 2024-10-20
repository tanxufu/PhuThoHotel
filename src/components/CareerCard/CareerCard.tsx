import classNames from 'classnames/bind';
import styles from './CareerCard.module.scss';
import icon from '~/assets/icons';
import Button from '../Button';

const cx = classNames.bind(styles);

interface CareerCardProps {
    mini?: boolean;
    active?: boolean;
}

function CareerCard({ mini = false, active = false }: CareerCardProps) {
    return (
        <article className={cx('career-card', { 'career-card': mini })}>
            <div className={cx('career-card__top')}>
                <img
                    src={icon.damsen_logo}
                    alt=''
                    className={cx('career-card__logo')}
                />

                <div className={cx('career-card__header')}>
                    <h2 className={cx('career-card__title')}>
                        Nhân viên thiết kế đồ hoạ
                    </h2>
                    <p className={cx('career-card__label')}>
                        Nhân viên chính thức
                    </p>
                </div>
            </div>

            <div className={cx('career-card__info')}>
                <div>
                    <div className={cx('career-card__data')}>
                        <img
                            src={icon.location_grey}
                            alt=''
                            className={cx('career-card__data-icon')}
                        />
                        <p className={cx('career-card__data-label')}>
                            CVVH Đầm Sen
                        </p>
                    </div>
                    <div className={cx('career-card__data')}>
                        <img
                            src={icon.clock_grey}
                            alt=''
                            className={cx('career-card__data-icon')}
                        />
                        <p className={cx('career-card__data-label')}>
                            2 tuần trước
                        </p>
                    </div>
                </div>

                <div
                    className={cx('career-card__active', {
                        'career-card__active--true': active
                    })}
                >
                    Đang tuyển
                </div>
            </div>

            <div className={cx('career-card__desc')}>
                <p className={cx('career-card__desc-title')}>
                    Mô tả công việc:
                </p>
                <p className={cx('career-card__desc-info')}>
                    Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh
                    doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du
                    lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...
                </p>
            </div>

            <Button
                className={cx('career-card__btn')}
                text='Xem chi tiết'
            ></Button>
        </article>
    );
}

export default CareerCard;
