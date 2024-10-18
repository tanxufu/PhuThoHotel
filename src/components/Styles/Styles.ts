import './Styles.scss';

interface StylesProps {
    children: React.ReactElement;
}

function Styles({ children }: StylesProps) {
    return children;
}

export default Styles;
