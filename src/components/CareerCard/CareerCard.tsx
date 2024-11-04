import classNames from 'classnames/bind';
import styles from './CareerCard.module.scss';
import icon from '~/assets/icons';
import Button from '../Button';

const cx = classNames.bind(styles);

interface CareerCardProps {
    id: string;
    mini?: boolean;
    active?: boolean;
    name: string;
    position: string;
    address: string;
    jobDescription: string[];
    image: string;
    postedDate: string;
}

function CareerCard({
    id,
    mini = false,
    active = false,
    name,
    position,
    address,
    jobDescription,
    postedDate,
    image
}: CareerCardProps) {
    return (
        <article className={cx('career-card', { 'career-card': mini })}>
            <div className={cx('career-card__top')}>
                <img src={image} alt='' className={cx('career-card__logo')} />

                <div className={cx('career-card__header')}>
                    <h2 className={cx('career-card__title')}>{name}</h2>
                    <p className={cx('career-card__label')}>{position}</p>
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
                            {address}
                        </p>
                    </div>
                    <div className={cx('career-card__data')}>
                        <img
                            src={icon.clock_grey}
                            alt=''
                            className={cx('career-card__data-icon')}
                        />
                        <p className={cx('career-card__data-label')}>
                            {postedDate}
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
                <p className={cx('career-card__desc-info')}>{jobDescription}</p>
            </div>

            <Button
                to={`/career-details?id=${id}`}
                className={cx('career-card__btn')}
                text='Xem chi tiết'
            ></Button>
        </article>
    );
}

export default CareerCard;
