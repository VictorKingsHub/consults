"use client";
import Image from "next/image";
import { useEffect } from "react";
import {
    Tab,
    initTWE,
} from "tw-elements";
initTWE({ Tab });
import "./menuSection.css"
import { TbWriting } from "react-icons/tb";
import dynamic from "next/dist/shared/lib/dynamic";

// export async function getClientSideProps() {
//     return {}; // Empty object for full client-side render
//   }

const DynamicTWElements = dynamic(() => import('tw-elements'), {
    ssr: false, // Load only on client-side
});

const MenuSection = () => {


    useEffect(() => {
        const init = async () => {
            const { Tab, initTWE } = await import("tw-elements");
            initTWE({ Tab });
        };
        init();
    }, []);

    return (
        <DynamicTWElements>

            <nav className="mini-nav-wrapper w-full self-center flex-wrap bg-red-500 hover:" >
                <div className="content-wrapper mx-auto text-center items-center ">

                    <ul
                        className="ul min_menu_content text-center mb-5 flex list-none flex-row items-center text-center flex-wrap "
                        role="tablist"
                        data-twe-nav-ref>
                        <li role="presentation" className=" basis-0  text-center ">
                            <a
                                href="#IELTS-EXAMS"
                                className=" text-center  my-2 mx-1 block border-x-0 border-b border-t-0 border-gray-100 px-5 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-gray-200 hover:isolate hover:border-white
                            focus:isolate hover:text-white
                            focus:border-transparent data-[twe-nav-active]:border-white data-[twe-nav-active]:text-white "
                                data-twe-toggle="pill"
                                data-twe-target="#IELTS-EXAMS"
                                data-twe-nav-active
                                role="tab"
                                aria-controls="IELTS-EXAMS"
                                aria-selected="true"
                            >TRAVEL INSURANCE</a>
                        </li>
                        <li role="presentation" className=" basis-0  text-center ">
                            <a
                                href="#tabs-profile02"
                                className=" text-center  my-2 mx-1 block border-x-0 border-b border-t-0 border-gray-100 px-5 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-gray-100 hover:isolate hover:border-white
                            focus:isolate hover:text-white
                            focus:border-transparent data-[twe-nav-active]:border-white data-[twe-nav-active]:text-white "
                                data-twe-toggle="pill"
                                data-twe-target="#tabs-profile02"
                                role="tab"
                                aria-controls="tabs-profile02"
                                aria-selected="false"
                            >EMERGENCY ASSISTANCE</a>
                        </li>
                        <li role="presentation" className=" basis-0  text-center ">
                            <a
                                href="#tabs-messages02"
                                className=" text-center  my-2 mx-1 block border-x-0 border-b border-t-0 border-gray-100 px-5 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-gray-100 hover:isolate hover:border-white
                            focus:isolate hover:text-white
                            focus:border-transparent data-[twe-nav-active]:border-white data-[twe-nav-active]:text-white "
                                data-twe-toggle="pill"
                                data-twe-target="#tabs-messages02"
                                role="tab"
                                aria-controls="tabs-messages02"
                                aria-selected="false"
                            >TRAINED TEACHERS</a>
                        </li>
                        <li role="presentation" className=" basis-0  text-center ">
                            <a
                                href="#tabs-messages02"
                                className=" text-center  my-2 mx-1 block border-x-0 border-b border-t-0 border-gray-100 px-5 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-gray-200 hover:isolate hover:border-white
                            focus:isolate hover:text-white
                            focus:border-transparent data-[twe-nav-active]:border-white data-[twe-nav-active]:text-white "
                                data-twe-toggle="pill"
                                data-twe-target="#tabs-messages02"
                                role="tab"
                                aria-controls="tabs-messages02"
                                aria-selected="false"
                            >CAMBRIDGE CURRICULUM</a>
                        </li>
                        <li role="presentation" className=" basis-0  text-center ">
                            <a
                                href="#tabs-messages02"
                                className=" text-center items-center  my-2 mx-1 block border-x-0 border-b border-t-0 border-gray-200 px-5 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-gray-200 hover:isolate hover:border-white
                            focus:isolate hover:text-white
                            focus:border-transparent data-[twe-nav-active]:border-white data-[twe-nav-active]:text-white "
                                data-twe-toggle="pill"
                                data-twe-target="#tabs-messages02"
                                role="tab"
                                aria-controls="tabs-messages02"
                                aria-selected="false"
                            >SCHOLARSHIP EDUCATION</a>
                        </li>
                    </ul>

                    <div className="mb-6 min_menu_content">
                        <div
                            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                            id="IELTS-EXAMS"
                            role="tabpanel"
                            aria-labelledby="tabs-home-tab02"
                            data-twe-tab-active>
                            <div className="flex flex-row items-center mt-7 space-between ">
                                <div className="image mr-3 p-2" style={{ width: "10rem" }}>
                                    <TbWriting style={{ width: "5rem", height: "5rem", color: "white" }} />
                                </div>
                                <div className="text-left">
                                    <h1 className="text-white font-bold text-xl">IELTS EXAMS </h1>
                                    <p className="text-left mt-3 text-white">
                                        We make the process of obtaining the most applicable visa advisor will be valuable to help you understand the different visas
                                    </p>
                                    <button className="text-black bg-white py-2 mt-3 px-3 text-sm rounded">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                            id="tabs-profile02"
                            role="tabpanel"
                            aria-labelledby="tabs-profile-tab02">
                            <div className="flex flex-row items-center mt-7 space-between ">
                                <div className="image mr-3 p-2" style={{ width: "10rem" }}>
                                    <TbWriting style={{ width: "5rem", height: "5rem", color: "white" }} />
                                </div>
                                <div className="text-left">
                                    <h1 className="text-white font-bold text-xl">VISA PROCESSING </h1>
                                    <p className="text-left mt-3 text-white">
                                        We make the process of obtaining the most applicable visa advisor will be valuable to help you understand the different visas
                                    </p>
                                    <button className="text-black bg-white py-2 mt-3 px-3 text-sm rounded">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                            id="tabs-messages02"
                            role="tabpanel"
                            aria-labelledby="tabs-profile-tab02">
                            <div className="flex flex-row items-center mt-7 space-between ">
                                <div className="image mr-3 p-2" style={{ width: "10rem" }}>
                                    <TbWriting style={{ width: "5rem", height: "5rem", color: "white" }} />
                                </div>
                                <div className="text-left">
                                    <h1 className="text-white font-bold text-xl"> TRAINED TEACHERS </h1>
                                    <p className="text-left mt-3 text-white">
                                        We make the process of obtaining the most applicable visa advisor will be valuable to help you understand the different visas
                                    </p>
                                    <button className="text-black bg-white py-2 mt-3 px-3 text-sm rounded">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                            id="tabs-contact02"
                            role="tabpanel"
                            aria-labelledby="tabs-contact-tab02">
                            <div className="flex flex-row items-center mt-7 space-between ">
                                <div className="image mr-3 p-2" style={{ width: "10rem" }}>
                                    <TbWriting style={{ width: "5rem", height: "5rem", color: "white" }} />
                                </div>
                                <div className="text-left">
                                    <h1 className="text-white font-bold text-xl">CAMBRIDGE CURRICULUM </h1>
                                    <p className="text-left mt-3 text-white">
                                        We make the process of obtaining the most applicable visa advisor will be valuable to help you understand the different visas
                                    </p>
                                    <button className="text-black bg-white py-2 mt-3 px-3 text-sm rounded">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                            id="tabs-contact02"
                            role="tabpanel"
                            aria-labelledby="tabs-contact-tab02">
                            <div className="flex flex-row items-center mt-7 space-between ">
                                <div className="image mr-3 p-2" style={{ width: "10rem" }}>
                                    <TbWriting style={{ width: "5rem", height: "5rem", color: "white" }} />
                                </div>
                                <div className="text-left">
                                    <h1 className="text-white font-bold text-xl">SCHOLARSHIP EDUCATION </h1>
                                    <p className="text-left mt-3 text-white">
                                        We make the process of obtaining the most applicable visa advisor will be valuable to help you understand the different visas
                                    </p>
                                    <button className="text-black bg-white py-2 mt-3 px-3 text-sm rounded">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </DynamicTWElements>
    );
};

export default MenuSection;
