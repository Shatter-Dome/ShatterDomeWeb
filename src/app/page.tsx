import Image from 'next/image';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ShatterDome',
}

export default function Home() {
    return (
        <div>
            <NavBar/>
            <div className="pt-4">
                <div className="flex flex-col min-h-screen">
                    <section className="h-screen pl-8 lg:pl-28 flex flex-col justify-center">
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <div>
                                <span className="text-black font-bold text-8xl">ALPHA</span>
                                <div
                                    className="font-bold text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2">
                                    <span className="block">QUADRUPED</span>
                                    <span className="block">ROBOT</span>
                                </div>
                                <div className="text-black pt-4 text-lg">
                                    <span className="block">Comprehensive STEM Kit for Mastering ROS</span>
                                    <span className="block"> and Reinforcement Learning</span>
                                </div>
                                <div className="pt-8">
                                    <button className="bg-black text-white py-4 px-8">
                                        Preorder Now
                                    </button>
                                </div>
                            </div>
                            <div>
                                <Image src="/bot1.png" alt="robot1" width="500" height="500"/>
                            </div>
                        </div>
                    </section>

                    <section className="h-screen p-8 lg:p-28 flex flex-col justify-center bg-black">
                        <h1 className="text-4xl lg:text-5xl font-semibold text-left mb-8 lg:mb-12 text-white">Your
                            Gateway to Robotics</h1>
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <div className="mb-8 lg:mb-0 pr-8 text-white">
                                <p className="text-2xl mt-4">
                                    Unlock the potential of ROS2 and reinforcement learning with our robotics kit.
                                    Designed for undergraduates and researchers, it provides a practical approach
                                    to learning and applying robotics concepts.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center pt-16">
                            <div className="flex-1 lg:w-1/5 flex flex-col items-start mb-4 lg:mb-0">
                                <span className="text-white font-bold text-2xl mb-1">10K+ </span>
                                <span className="text-white text-lg mb-1">students and researchers</span>
                                <span className="text-white font-bold text-xl">Empowered</span>
                            </div>

                            <div className="hidden lg:block lg:w-px lg:bg-white lg:h-1/2 lg:mx-4"></div>

                            <div className="flex-1 lg:w-1/5 flex flex-col items-start mb-4 lg:mb-0">
                                <span className="text-white font-bold text-2xl mb-1">20+ </span>
                                <span className="text-white text-lg mb-1">Academic and</span>
                                <span className="text-white font-bold text-xl">Industry Partnerships</span>
                            </div>

                            <div className="hidden lg:block lg:w-px lg:bg-white lg:h-1/2 lg:mx-4"></div>

                            <div className="flex-1 lg:w-1/5 flex flex-col items-start mb-4 lg:mb-0">
                                <span className="text-white font-bold text-2xl mb-1">4.9</span>
                                <span className="text-white text-lg mb-1">Average</span>
                                <span className="text-white font-bold text-xl"> Product Rating</span>
                            </div>

                            <div className="flex-1 lg:w-2/5 flex flex-col justify-center lg:justify-start">
                                <Image src="/bot2.png" alt="robot2" width="1000" height="1000"/>
                            </div>
                        </div>
                    </section>

                    <section className="h-screen px-8 lg:px-28 flex flex-col justify-center pt-48">
                        <h1 className="text-4xl lg:text-5xl font-semibold text-left mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2">ROBOTICS
                            CAPABILITIES</h1>
                        <div className="flex flex-col">
                            <span
                                className="text-3xl text-black">The 12 Degrees of Freedom allows Precision control and</span>
                            <span className="text-3xl text-black">Inverse kinematics. This creates several advantages over</span>
                            <span className="text-3xl text-black">other Kits.</span>
                        </div>
                        <hr className="border-t-2 border-gray-500 my-8 lg:my-6"/>
                        <div className="flex justify-center gap-8 mt-4">
                            <div className="flex-1 max-w-lg">
                                <Image height="500" width="500" src="/bot3.png" alt="robot3"
                                       className="w-full h-auto object-cover"/>
                            </div>
                            <div className="flex-1 max-w-lg">
                                <Image height="500" width="500" src="/bot4.png" alt="robot4"
                                       className="w-full h-auto object-cover"/>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col justify-center items-center mt-52 mx-28">
                        <div className="relative flex justify-center items-center w-full bg-black h-screen">
                            <Image src="/bot5.png" alt="robot5" height="500" width="500"
                                   className="w-auto h-auto object-cover"/>
                            <div className="absolute flex flex-col bottom-20 left-16 text-white text-3xl font-bold">
                                <span className="block">Alpha Basic</span>
                                <span className="block">version</span>
                            </div>
                        </div>
                    </section>

                    <hr className="border-t-2 border-gray-500 lg:my-16 mx-24"/>

                    <section className="h-screen flex flex-col px-32 pt-6">
                        <h1 className="text-5xl lg:text-8xl font-md text-left mb-8 lg:mb-12 text-black">
                            <span className="block">Embrace the possibilities with</span>
                            <span
                                className="block font-bold bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2 pt-8">Alpha</span>
                        </h1>
                        <p className="text-gray-400 text-3xl">
                            Alpha Quadrupled Robot Platform empowers users with incredible features. Swipe!
                        </p>
                        <div className="flex flex-col items-center justify-center bg-black mt-16">
                            <Image src="/bot6.png" alt="robot6" width="500" height="500"/>
                        </div>
                    </section>

                    <section className="h-screen flex items-center justify-center">
                        <h1 className="text-4xl">About us</h1>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
