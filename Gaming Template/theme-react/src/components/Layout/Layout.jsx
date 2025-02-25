import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black dark:bg-black">
            <Sidebar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
