<<<<<<< Updated upstream
import Image from 'next/image';
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ShatterDome',
}

export default function Home() {
    return (
        <div>
            <NavBar />
            <div className="flex flex-col min-h-screen p-8 lg:p-28 mt-8">
                <div className="flex items-center justify-center bg-gray-200 rounded-3xl overflow-hidden">
                    <div className="relative w-full h-[150vh]">
                        <Image
                            src="/bot8.png"
                            alt="robot8"
                            fill
                        />
                        <div className="absolute inset-0 p-8 text-white">
                            <div className="absolute top-15 left-10 m-4 bg-black bg-opacity-60 p-4 rounded-lg">
                                <h1>Advanced object recognition</h1>
                                <h1>for a deeper understanding</h1>
                                <h1>of the environment</h1>
                            </div>
                            <div className="absolute top-30 right-10 m-4 bg-black bg-opacity-60 p-4 rounded-lg">
                                <h1>Real-time scene analysis</h1>
                                <h1>for dynamic Control</h1>
                                <h1>Systems</h1>
                            </div>
                            <div className="absolute top-60 left-10 m-4 bg-black bg-opacity-60 p-4 rounded-lg">
                                <h1>Simultaneous localization</h1>
                                <h1>and mapping (SLAM)</h1>
                                <h1>for precise spatial tracking</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center mt-16 space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="flex flex-1 justify-center items-center p-8">
                        <Image src="/bot9.png" alt="robot9" width="500" height="500"/>
                    </div>
                    <div className="flex flex-1 flex-col p-8 shadow rounded-3xl">
                        <span className="font-semibold text-6xl">Handy Robotic Arm</span>
                        <div className="flex justify-between mt-8">
                            <span className="text-2xl">Handy 5 Axis Robotic Arm</span>
                            <span className="text-lg">$1000</span>
                        </div>
                        <div className="flex justify-between mt-8">
                            <span className="text-2xl">Shipping</span>
                            <span className="text-lg">$50</span>
                        </div>
                        <div className="flex justify-between mt-8">
                            <span className="text-2xl">Total</span>
                            <span className="text-lg">$1050</span>
                        </div>
                        <div className="mt-8">
                            *The Shipping will be calculated based on the destination country.
                        </div>
                        <button className="bg-black text-xl text-white py-4 px-8 rounded-lg mt-16">
                            Purchase Now
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
=======
import dynamic from "next/dynamic";

const ClientOnlyComponent1 = dynamic(() => import('../../../components/cart'), {
    ssr: false,
});

export default function Home() {
    return (
        <ClientOnlyComponent1 />
>>>>>>> Stashed changes
    );
}