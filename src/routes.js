import React from 'react';
import TopSection from './containers/Component/TopSection/TopSection';
import CheckVisa from './containers/Component/CheckVisa/CheckVisa';
import NotFound from './containers/Component/NotFound/NotFound';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <TopSection />
    },
    {
        path: '/check-visa',
        exact: false,
        main: () => <CheckVisa />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];
export default routes;
