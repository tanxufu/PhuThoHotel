import classNames from 'classnames/bind';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

import image from '~/assets/images';
import styles from './Documents.module.scss';
import PageHeader from '~/components/PageHeader';
import icon from '~/assets/icons';

const cx = classNames.bind(styles);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function Documents() {
    return (
        <div className={cx('documents')}>
            <div className={cx('documents__intro')}>
                <PageHeader text='TÀI LIỆU' />
                <div className={cx('documents__show')}>
                    <div
                        className={cx(
                            'row row-cols-4 row-cols-lg-3 gx-2  gy-2'
                        )}
                    >
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_1}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_2}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_3}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_4}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_5}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_6}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col d-lg-none')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_7}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col d-lg-none')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_8}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('container')}>
                <section className={cx('documents__main')}>
                    <div className={cx('documents__top')}>
                        <div className={cx('documents-act')}>
                            <p
                                className={cx(
                                    'documents-act__name',
                                    'd-md-none'
                                )}
                            >
                                Ngày tạo
                            </p>
                            <div
                                className={cx(
                                    'documents-datepicker',
                                    'd-md-none'
                                )}
                            >
                                <Space direction='vertical'>
                                    <DatePicker
                                        className={cx(
                                            'documents-datepicker__select'
                                        )}
                                        onChange={onChange}
                                    />
                                </Space>
                                <img
                                    src={icon.arrow_right}
                                    alt=''
                                    className={cx('documents-datepicker--to')}
                                />
                                <Space direction='vertical'>
                                    <DatePicker
                                        className={cx(
                                            'documents-datepicker__select'
                                        )}
                                        onChange={onChange}
                                    />
                                </Space>
                            </div>
                        </div>

                        <div className={cx('documents-act')}>
                            <p
                                className={cx(
                                    'documents-act__name',
                                    'd-md-none'
                                )}
                            >
                                Từ khoá
                            </p>
                            <div className={cx('documents-search')}>
                                <img
                                    src={icon.search}
                                    alt=''
                                    className={cx('documents-search__icon')}
                                />

                                <input
                                    type='text'
                                    className={cx('documents-search__input')}
                                    placeholder='Tìm kiếm'
                                />

                                <img
                                    src={icon.time}
                                    alt=''
                                    className={cx('documents-search__time')}
                                />
                            </div>
                        </div>

                        <div
                            className={cx(
                                'documents-filter',
                                'd-none',
                                'd-md-flex'
                            )}
                        >
                            <img
                                src={icon.filter}
                                alt=''
                                className={cx('documents-filter__icon')}
                            />
                        </div>
                    </div>

                    <ul className={cx('documents__list')}>
                        {/* header */}
                        <li
                            className={cx(
                                'documents-item',
                                'documents-item--header',
                                'd-lg-none'
                            )}
                        >
                            <div className={cx('row')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span
                                        className={cx(
                                            'documents-item__header',
                                            'documents-item__stt'
                                        )}
                                    >
                                        STT
                                    </span>
                                </div>

                                <div className={cx('col-6')}>
                                    <span
                                        className={cx(
                                            'documents-item__header',
                                            'documents-item__name'
                                        )}
                                    >
                                        Tên tài liệu
                                    </span>
                                </div>

                                <div className={cx('col-3')}>
                                    <span
                                        className={cx(
                                            'documents-item__header',
                                            'documents-item__name'
                                        )}
                                    >
                                        Ngày tạo
                                    </span>
                                </div>

                                <div className={cx('col-2')}>
                                    <span
                                        className={cx(
                                            'documents-item__header',
                                            'documents-item__name'
                                        )}
                                    >
                                        Tải tài liệu
                                    </span>
                                </div>
                            </div>
                        </li>

                        {/* data */}

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        1
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Khám phá Hội An - Việt Nam
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        2
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Hải Phòng yêu cầu người dân không ra
                                        khỏi nhà sau 22h
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        3
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Chuẩn bị gì sau khi tiêm vaccin Covid
                                        -19?
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        4
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        SNOW CHANNEL 1
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        5
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Chuẩn bị gì sau khi tiêm vaccin Covid
                                        -19?
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        6
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Hải Phòng yêu cầu người dân không ra
                                        khỏi nhà sau 22h
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        7
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Chuẩn bị gì sau khi tiêm vaccin Covid
                                        -19?
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        8
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Du lịch ở Tp.HCM đang như thế nào? 101
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        9
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        SNOW CHANNEL 1
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        10
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Hải Phòng yêu cầu người dân không ra
                                        khỏi nhà sau 22h
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className={cx('documents__bottom')}>
                        <div
                            className={cx('documents__page-show', 'd-lg-none')}
                        >
                            Hiển thị{' '}
                            <input
                                type='text'
                                value='10'
                                className={cx('documents__page-show--input')}
                            />{' '}
                            câu trả lời trong mỗi trang
                        </div>

                        <div className={cx('paginate')}>
                            <button
                                className={cx(
                                    'paginate__btn',
                                    'paginate__btn--disable'
                                )}
                            >
                                <img src={icon.paginate_prev_disable} alt='' />
                            </button>

                            <button
                                className={cx(
                                    'paginate__page',
                                    'paginate__page--active'
                                )}
                            >
                                1
                            </button>

                            <button className={cx('paginate__page')}>2</button>

                            <button className={cx('paginate__page')}>3</button>

                            <button className={cx('paginate__page')}>
                                ...
                            </button>

                            <button className={cx('paginate__page')}>10</button>

                            <button className={cx('paginate__btn')}>
                                <img src={icon.paginate_next} alt='' />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Documents;
