import dynamic from 'next/dynamic';
import React from 'react';
import RoboticsLoader from '../../../components/RoboticsLoader';


const ClientOnlyComponent1 = dynamic(() => import('../../../components/cart'), {
    ssr: false,
    loading: () => <RoboticsLoader/>,
});

export default function Home() {
    return (
        <React.Fragment>
            <ClientOnlyComponent1 />
        </React.Fragment>
    );
}
