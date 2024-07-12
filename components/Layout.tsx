import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="p-4">{children}</main>
        </div>
    );
};

export default Layout;
