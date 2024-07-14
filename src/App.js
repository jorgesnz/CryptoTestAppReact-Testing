import ReactGA from 'react-ga4';
import { lazy, Suspense } from 'react';
import ThemeStyles from '@styles/theme';
import './style.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-grid-layout/css/styles.css';

import { SidebarProvider } from '@contexts/sidebarContext';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from '@contexts/modalContext';

import { useThemeProvider } from '@contexts/themeContext';
import { useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';

import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from '@components/Loader';
import Sidebar from '@components/Sidebar';
import BottomNav from '@components/BottomNav';
import EditNotificationPage from './pages/CRM/EditNotificationPage';

const Dashboard = lazy(() => import('@pages/Dashboard'));
const Trade = lazy(() => import('@pages/Trade'));
const Actions = lazy(() => import('@pages/Actions'));
const Wallet = lazy(() => import('@pages/Wallet'));
const NFT = lazy(() => import('@pages/NFT'));
const Collections = lazy(() => import('@pages/Collections'));
const SignIn = lazy(() => import('@pages/SignIn'));
const SignUp = lazy(() => import('@pages/SignUp'));
const Verification = lazy(() => import('@pages/Verification'));
const UserData = lazy(() => import('@pages/UserData'));
const AdminPage = lazy(() => import('@pages/AdminPage'));
const CRMPage = lazy(() => import('@pages/CRM/CRMPage'));
const UserDetailPage = lazy(() => import('@pages/CRM/UserDetailPage'));
const AddDepositPage = lazy(() => import('@pages/CRM/AddDepositPage'));
const CreateNotificationPage = lazy(() => import('@pages/CRM/CreateNotificationPage'));


const App = () => {
    const appRef = useRef(null);
    const { theme } = useThemeProvider();
    const { width } = useWindowSize();

    useEffect(() => {
        appRef.current && appRef.current.scrollTo(0, 0);
    }, []);

    const gaKey = process.env.REACT_APP_PUBLIC_GOOGLE_ANALYTICS;
    gaKey && ReactGA.initialize(gaKey);

    return (
        <SidebarProvider>
            <ThemeProvider theme={{ theme: theme }}>
                <ThemeStyles />
                <ToastContainer theme="colored" autoClose={2000} toastStyle={{ borderRadius: 4 }} />
                <ModalProvider>
                    <div ref={appRef}>
                        {width < 768 ? <BottomNav /> : <Sidebar />}
                        <Suspense fallback={<Loader visible />}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/sign-in" />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/trade" element={<Trade />} />
                                <Route path="/actions" element={<Actions />} />
                                <Route path="/wallet" element={<Wallet />} />
                                <Route path="/nft" element={<NFT />} />
                                <Route path="/collections" element={<Collections />} />
                                <Route path="/sign-in" element={<SignIn />} />
                                <Route path="/sign-up" element={<SignUp />} />
                                <Route path="/verification" element={<Verification />} />
                                <Route path="/user-data" element={<UserData />} />
                                <Route path="/admin" element={<AdminPage />} />
                                <Route path="/crm" element={<CRMPage />} />
                                <Route path="/crm/user/:id" element={<UserDetailPage />} />
                                <Route path="/crm/user/:id/add-deposit" element={<AddDepositPage />} />
                                <Route path="/crm/user/:id/create-notification" element={<CreateNotificationPage />} />
                                <Route path="/crm/notification/:id/edit" element={<EditNotificationPage />} />
                                <Route path="/crm/user/:id/add-deposit" element={<AddDepositPage />} />
                            </Routes>
                        </Suspense>
                    </div>
                </ModalProvider>
            </ThemeProvider>
        </SidebarProvider>
    );
}

export default App;
