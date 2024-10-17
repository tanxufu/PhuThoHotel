import { useRoutes } from 'react-router-dom';
import MainLayout from '~/layouts/MainLayout';
import Home from '~/pages/Home';
import Careers from './pages/Careers';
import Documents from './pages/Documents';
import Blogs from './pages/Blogs';

export default function useRouteElements() {
    const routeElement = useRoutes([
        {
            path: '/',
            element: (
                <MainLayout>
                    <Home />
                </MainLayout>
            )
        },
        {
            path: '/blogs',
            element: (
                <MainLayout>
                    <Blogs />
                </MainLayout>
            )
        },
        {
            path: '/documents',
            element: (
                <MainLayout>
                    <Documents />
                </MainLayout>
            )
        },
        {
            path: '/careers',
            element: (
                <MainLayout>
                    <Careers />
                </MainLayout>
            )
        }
    ]);

    return routeElement;
}
