const statistics = [
    { label: 'Shop', value: '01' },
    { label: 'Year Of Experience', value: '02' },
    { label: 'Products', value: '120+' },
    { label: 'Reviews', value: '1507+' },
];

function AboutPage() {
    return (
        <div className="">
            <div className="mx-auto py-32">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-full mx-auto px-5 flex justify-center items-center">
                        <div className="mx-16 text-black text-center">
                            <div className="font-bold text-6xl mb-6">About Us</div>
                            <p className="font-medium text-gray-500  mb-10 leading-7 tracking-tight ">
                                Our website sells eco-friendly products.
                                <br /> We are committed to creating high quality and environmentally friendly products.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[1308px] mx-auto mb-32 bg-opacity-40">
                    <img
                        className="w-full lg:h-[560px] object-cover rounded-xl"
                        src="https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2022/11/169ff58b-san-pham-than-thien-voi-moi-truong.jpg"
                        alt=""
                    />
                </div>

                <div className="py-5 m-auto mb-24 ">
                    <div className="m-auto h-full flex items-center justify-center text-center">
                        {statistics.map((stat) => (
                            <div className="px-16" key={stat.label}>
                                <div className="text-greenColor text-6xl font-bold mb-2">{stat.value}</div>
                                <div className="text-textColor text-lg font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mx-auto mb-32">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 w-[95%] lg:w-[75%] mx-auto">
                        <div className="basis-1/2">
                            <div className="w-full h-full object-cover min-h-[350px]">
                                <img
                                    src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a407810ab48e628b_barista_girl-p-800.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="basis-1/2 text-center lg:text-left lg:pl-6 mb-6">
                            <div className="text-4xl leading-10 mb-6 font-bold">Our Value</div>
                            <div className="text-gray-500 leading-7 mb-6">
                                Website selling environmentally friendly products with economic and social value. The
                                use of environmentally friendly products helps to reduce the impact on the environment
                                and contributes to the protection of human health and living environment.
                            </div>
                            <div className="">
                                <a
                                    href="/"
                                    className="text-coffee-400 hover:text-gray-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400"
                                >
                                    Read the full Story
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 w-[95%] lg:w-[65%] mx-auto mt-3">
                        <div className="basis-1/2 text-center lg:text-left lg:pl-6">
                            <div className="text-4xl leading-10 mb-6 font-bold">Open Everyday</div>
                            <div className="text-gray-500 leading-7 mb-6">
                                Welcome to our website selling environmentally friendly products! We are open every day
                                and ready to serve you, helping you choose the best products for your health and the
                                environment.
                            </div>
                            <div className="">
                                <a
                                    href="/"
                                    alt=" "
                                    className="text-coffee-400 hover:text-gray-600  relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400"
                                >
                                    Read the full Story
                                </a>
                            </div>
                        </div>
                        <div className="basis-1/2">
                            <div className="w-full h-full object-cover min-h-[350px]">
                                <img
                                    className="rounded-3xl"
                                    src="https://btnmt.1cdn.vn/2020/07/16/29173d74f2130e4d5702.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-full mx-auto px-5 flex justify-center items-center">
                        <div className="mx-16 text-black text-center">
                            <div className="font-bold text-6xl mb-6">Meet Our Team</div>
                            <p className="font-medium text-gray-500  mb-10 leading-7 tracking-tight ">
                                Introducing our team at the environmentally friendly online store! We are a group of
                                passionate individuals dedicated to promoting sustainable living and providing <br />
                                you with the best eco-friendly products to support a healthier planet.
                            </p>
                            <h1 className="font-bold text-3xl mb-6">Thanks You Very Much!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
