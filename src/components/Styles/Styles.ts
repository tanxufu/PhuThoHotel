import './Styles.scss';
import './base';
import './abstracts';

type StylesProps = {
    children: React.ReactNode;
};

function Styles({ children }: StylesProps) {
    return children;
}

export default Styles;
