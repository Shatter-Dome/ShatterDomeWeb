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
            <NavBar/>

            <div className="mt-16">
                <div className="flex flex-col min-h-screen">
                    <section className="h-screen pl-8 lg:pl-28 flex flex-col justify-center pt-8 lg:pt-28">
                        <div className="lg:items-center">
                            <div className="flex">
                                <div className="flex flex-col z-10">
                                    <span className="font-Calligraffitti text-5xl">Unlocking the power of</span>
                                    <div className="space-x-2">
                                        <span className="text-8xl font-bold">
                                            Spacial Computing
                                        </span>
                                        <span className="text-5xl">with</span>
                                    </div>
                                    <div
                                        className="font-bold text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2">
                                        <span className="block">RPI Lidar</span>
                                    </div>
                                </div>
                                <div>
                                    <Image src="/bot7.png" alt="robot1" width="700" height="700"/>
                                </div>
                            </div>
                            <div className="text-gray-500 pt-4 text-2xl">
                                <span className="block">Step into the future of technology with advanced SLAM and robotics, a</span>
                                <span className="block">groundbreaking platform that seamlessly integrates Lidar, SLAM algorithms,</span>
                                <span className="block">and ROS2 via our robotics kit. Let&apos;s explore how this technology is</span>
                                <span className="block">revolutionizing our interaction with the world.</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
