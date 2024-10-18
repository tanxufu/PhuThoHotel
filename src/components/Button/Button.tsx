import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ButtonProps {
    text: string;
    className?: string;
    to?: string;
    maxWidth?: string;
}

function Button({ text, to, className, maxWidth }: ButtonProps) {
    let Comp: any = 'button';

    if (to) {
        Comp = Link;
    }

    return (
        <Comp
            className={cx('primary-btn', className)}
            to={to}
            style={{ width: maxWidth }}
        >
            {text}
        </Comp>
    );
}

export default Button;
