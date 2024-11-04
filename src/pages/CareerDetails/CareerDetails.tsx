import classNames from 'classnames/bind';
import styles from './CareerDetails.module.scss';
import icon from '~/assets/icons';
import Button from '~/components/Button';
import { useFetchCareerByIdQuery } from '~/apis/careers.api';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function CareerDetails() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data: career } = useFetchCareerByIdQuery(id!);

    if (!career) return <div>No career found.</div>;

    console.log(career);

    return (
        <div className={cx('container')}>
            <div className={cx('career')}>
                <div className={cx('career__top')}>
                    <img
                        src={career.image}
                        alt=''
                        className={cx('career__logo')}
                    />

                    <div className={cx('career__title')}>
                        <h1 className={cx('career__heading')}>{career.name}</h1>

                        <p className={cx('career__label')}>{career.position}</p>

                        <div className={cx('career__info')}>
                            <div className={cx('career__info--row')}>
                                <div className={cx('career__data')}>
                                    <img
                                        src={icon.location_grey}
                                        alt=''
                                        className={cx('career__data-icon')}
                                    />
                                    <p className={cx('career__data-label')}>
                                        {career.address}
                                    </p>
                                </div>
                                <div className={cx('career__data')}>
                                    <img
                                        src={icon.clock_grey}
                                        alt=''
                                        className={cx('career__data-icon')}
                                    />
                                    <p className={cx('career__data-label')}>
                                        {career.postedDate}
                                    </p>
                                </div>
                            </div>
                            <div
                                className={cx('career__active', {
                                    'career__active--true': true
                                })}
                            >
                                Đang tuyển
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('career__img-wrap')}>
                    <img
                        src={career.image}
                        alt=''
                        className={cx('career__img')}
                    />
                </div>

                <div className={cx('recruitment')}>
                    <h2 className={cx('recruitment__heading')}>
                        Chi tiết tin tuyển dụng
                    </h2>
                    <div className={cx('recruitment__info')}>
                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Vị trí
                            </h3>
                            <p className={cx('recruitment__desc')}>
                                {career.name}
                            </p>
                        </div>

                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Số lượng
                            </h3>
                            <p className={cx('recruitment__desc')}>
                                {career.number}
                            </p>
                        </div>

                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Nơi làm việc
                            </h3>
                            <p className={cx('recruitment__desc')}>
                                {career.address}
                            </p>
                        </div>

                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Địa chỉ làm việc
                            </h3>
                            <p className={cx('recruitment__desc')}>
                                {career.location}
                            </p>
                        </div>

                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Mô tả công việc
                            </h3>
                            <p className={cx('recruitment__desc')}>
                                <ul>
                                    {career.jobDescription.map(
                                        (item, index) => {
                                            return <li key={index}>{item}</li>;
                                        }
                                    )}
                                </ul>
                            </p>
                        </div>

                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Ngày làm việc
                            </h3>
                            <p className={cx('recruitment__desc')}>...</p>
                        </div>
                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Giờ làm việc
                            </h3>
                            <p className={cx('recruitment__desc')}>
                                Giờ hành chính
                            </p>
                        </div>

                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Quyền lợi
                            </h3>
                            <p className={cx('recruitment__desc')}>
                                <ul>
                                    {career.interest.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ul>
                            </p>
                        </div>

                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Yêu cầu
                            </h3>
                            <p className={cx('recruitment__desc')}>
                                <ul>
                                    {career.nedds.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ul>
                            </p>
                        </div>

                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Độ tuổi
                            </h3>
                            <p className={cx('recruitment__desc')}>...</p>
                        </div>
                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Trình độ
                            </h3>
                            <p className={cx('recruitment__desc')}>
                                {career.level}
                            </p>
                        </div>
                        <div className={cx('recruitment__row')}>
                            <h3 className={cx('recruitment__header')}>
                                Hồ sơ gồm
                            </h3>
                            <p className={cx('recruitment__desc')}>
                                Thông tin ứng tuyển:
                                <ul>
                                    <li>
                                        Ứng viên vui lòng gửi CV đến email:
                                        tuyendung@damsenpark.vn.
                                    </li>
                                    <li>
                                        Hoặc nộp hồ sơ trực tiếp tại Trụ sở Văn
                                        phòng Công ty: 3 Hòa Bình, Phường 3,
                                        Quận 11, TP.HCM.
                                    </li>
                                </ul>
                                (ĐT: 028 38 650 921 - Phòng Nhân sự).
                            </p>
                        </div>
                    </div>
                </div>

                <form className={cx('career-form')}>
                    <h2 className={cx('career-form__heading')}>
                        Ứng tuyển Online
                    </h2>

                    <div className={cx('career-form__row')}>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Họ tên</p>
                                <input
                                    type='text'
                                    className={cx('form__input')}
                                    placeholder='Nguyễn Văn A'
                                />
                            </label>
                        </div>

                        <div className={cx('form__group')}>
                            <p className={cx('form__label')}>Giới tính</p>
                            <div className={cx('form__group--radius')}>
                                <label className={cx('form__group--check')}>
                                    <input
                                        type='radio'
                                        name='gender'
                                        id='male'
                                        className={cx('form__input--radius')}
                                    />
                                    <p className={cx('form__label')}>Nam</p>
                                </label>

                                <label className={cx('form__group--check')}>
                                    <input
                                        type='radio'
                                        name='gender'
                                        id='female'
                                        className={cx('form__input--radius')}
                                    />
                                    <p className={cx('form__label')}>Nữ</p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={cx('career-form__row')}>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Năm sinh</p>
                                <input
                                    type='text'
                                    className={cx('form__input')}
                                    placeholder='12-12-2000'
                                />
                            </label>
                        </div>

                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Nơi sinh</p>
                                <input
                                    type='text'
                                    className={cx('form__input')}
                                    placeholder='Phường 6, Quận Tân Bình, TP HCM'
                                />
                            </label>
                        </div>
                    </div>

                    <div className={cx('career-form__row')}>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>
                                    Nơi ở hiện tại
                                </p>
                                <input
                                    type='text'
                                    className={cx('form__input')}
                                    placeholder='123 Âu Cơ, Phường 9, Tân Bình, TP HCM'
                                />
                            </label>
                        </div>

                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Điện thoại</p>
                                <input
                                    type='text'
                                    className={cx('form__input')}
                                    placeholder='0123456789'
                                />
                            </label>
                        </div>
                    </div>

                    <div className={cx('career-form__row')}>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Email</p>
                                <input
                                    type='text'
                                    className={cx('form__input')}
                                    placeholder='Nguyenvana@gmail.com'
                                />
                            </label>
                        </div>

                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>
                                    Facebook cá nhân{' '}
                                </p>
                                <input
                                    type='text'
                                    className={cx('form__input')}
                                    placeholder='facebook.com.vn'
                                />
                            </label>
                        </div>
                    </div>

                    <div className={cx('career-form__row')}>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Trình độ</p>
                                <input
                                    type='text'
                                    className={cx('form__input')}
                                    placeholder='Đại học'
                                />
                            </label>
                        </div>

                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Đính kèm CV</p>
                                <input
                                    type='text'
                                    className={cx('form__input')}
                                    placeholder='Không có tập tin nào được chọn'
                                />
                            </label>
                        </div>
                    </div>

                    <div className={cx('career-form__row')}>
                        <div className={cx('form__group')}>
                            <p className={cx('form__label')}>
                                Bạn có sẵn sàng đi công tác dài ngày
                            </p>
                            <div className={cx('form__group--radius')}>
                                <label className={cx('form__group--check')}>
                                    <input
                                        type='radio'
                                        name='collaborate'
                                        id='yes'
                                        className={cx('form__input--radius')}
                                    />
                                    <p className={cx('form__label')}>Có</p>
                                </label>

                                <label className={cx('form__group--check')}>
                                    <input
                                        type='radio'
                                        name='collaborate'
                                        id='some-time'
                                        className={cx('form__input--radius')}
                                    />
                                    <p className={cx('form__label')}>
                                        Tuỳ thời điểm
                                    </p>
                                </label>

                                <label className={cx('form__group--check')}>
                                    <input
                                        type='radio'
                                        name='collaborate'
                                        id='no'
                                        className={cx('form__input--radius')}
                                    />
                                    <p className={cx('form__label')}>Không</p>
                                </label>
                            </div>
                        </div>

                        <div className={cx('form__group')}>
                            <p className={cx('form__label')}>
                                Bạn có sẵn sàng làm thêm giờ
                            </p>
                            <div className={cx('form__group--radius')}>
                                <label className={cx('form__group--check')}>
                                    <input
                                        type='radio'
                                        name='overtime'
                                        id='yes'
                                        className={cx('form__input--radius')}
                                    />
                                    <p className={cx('form__label')}>Có</p>
                                </label>

                                <label className={cx('form__group--check')}>
                                    <input
                                        type='radio'
                                        name='overtime'
                                        id='some-time'
                                        className={cx('form__input--radius')}
                                    />
                                    <p className={cx('form__label')}>
                                        Tuỳ thời điểm
                                    </p>
                                </label>

                                <label className={cx('form__group--check')}>
                                    <input
                                        type='radio'
                                        name='overtime'
                                        id='no'
                                        className={cx('form__input--radius')}
                                    />
                                    <p className={cx('form__label')}>Không</p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={cx('career-form__row')}>
                        <label>
                            <p className={cx('form__label')}>
                                Những nơi đã từng làm việc trước đây (ghi rõ vị
                                trí)
                            </p>
                            <textarea
                                name=''
                                id=''
                                className={cx('form__textarea')}
                                placeholder='Những nơi đã từng làm việc trước đây'
                            ></textarea>
                        </label>
                    </div>

                    <div className={cx('career-form__row')}>
                        <label>
                            <p className={cx('form__label')}>
                                Kinh nghiệm bản thân
                            </p>
                            <textarea
                                name=''
                                id=''
                                className={cx('form__textarea')}
                                placeholder='Kinh nghiệm bản thân'
                            ></textarea>
                        </label>
                    </div>

                    <Button
                        className={cx('form__btn')}
                        text='Gửi ngay'
                    ></Button>
                </form>
            </div>
        </div>
    );
}

export default CareerDetails;
