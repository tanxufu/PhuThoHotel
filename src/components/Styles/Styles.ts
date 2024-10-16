import './Styles.scss';

type StylesProps = {
    children: React.ReactElement;
};

function Styles({ children }: StylesProps) {
    return children;
}

export default Styles;
