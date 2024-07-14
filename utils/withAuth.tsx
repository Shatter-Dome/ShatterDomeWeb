import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: React.ComponentType) => {
    const ComponentWithAuth = (props: any) => {
        const router = useRouter();

        useEffect(() => {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            if (!isLoggedIn) {
                router.push('/admin');
            }
        }, [router]);

        return <WrappedComponent {...props} />;
    };

    ComponentWithAuth.displayName = 'withAuth';

    return ComponentWithAuth;
};

export default withAuth;