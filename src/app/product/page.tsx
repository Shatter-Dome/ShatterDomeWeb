import dynamic from 'next/dynamic';
import React from 'react';

const ClientOnlyComponent1 = dynamic(() => import('../../../components/product'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

export default function Home() {
    return (
        <React.Fragment>
            <ClientOnlyComponent1 />
        </React.Fragment>
    );
}
