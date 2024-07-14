// utils
import {lazy} from 'react';

// components
const ActionsModal = lazy(() => import('@components/ActionsModal'));
const AppInfo = lazy(() => import('@widgets/AppInfo'));
const Account = lazy(() => import('@widgets/Account'));
const Notifications = lazy(() => import('@widgets/Notifications'));
const Chat = lazy(() => import('@widgets/Chat'));

const AppLayout = ({children}) => {
    return (
        <div className="app">
            <div className="app_container">{children}</div>
            <ActionsModal/>
            <AppInfo isSidebarWidget/>
            <Account isSidebarWidget/>
            <Notifications isSidebarWidget/>
            <Chat isSidebarWidget/>
        </div>
    )
}

export default AppLayout