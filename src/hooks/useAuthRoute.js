import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';

const useAuthRoute = () => {
    const authRoutes = ['/sign-in', '/sign-up', '/verification'];
    const location = useLocation();
    const [isAuthRoute, setIsAuthRoute] = useState(false);

    useEffect(() => {
        const isAuthRoute = authRoutes.includes(location.pathname);
        setIsAuthRoute(isAuthRoute);

        return () => {
            setIsAuthRoute(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return isAuthRoute;
}

export default useAuthRoute