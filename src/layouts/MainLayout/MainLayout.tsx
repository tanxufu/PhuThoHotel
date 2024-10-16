import { Header } from '~/components';
import Footer from '~/components/Footer';

type MainLayoutProps = {
    children: React.ReactElement;
};

function MainLayout({ children }: MainLayoutProps) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
}

export default MainLayout;
