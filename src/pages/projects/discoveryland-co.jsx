import ProjectHero from "../../components/ProjectHero.jsx";
import CommonLayout from "../../Layout/CommonLayout.jsx";
import ProjectFooter from "../../components/ProjectFooter.jsx";

const data = {
    'image': '/images/index/one.avif',
    'text': ['Discovery', 'land Co'],
    'client': ['ballyclare', 'international'],
    'role': ['strategy', 'art direction', 'design'],
    'credits': ['nick manchant']
}

export default function DiscoverylandCo() {
    return (
        <div>
            <ProjectHero
                image={data.image}
                text={data.text}
                client={data.client}
                role={data.role}
                credits={data.credits}
            />
            <CommonLayout>
                <video autoPlay loop muted
                       className=" h-full w-full object-cover">
                    <source src="/projects/DiscoverylandCo/1919284378.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="grid grid-cols-2 mt-[7vw]">
                    <div className="md:col-span-1"></div>
                    <div className="col-span-2 md:col-span-1">
                        <img src="/projects/DiscoverylandCo/2.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 mt-[4vw]">
                    <div className="col-span-1 md:col-span-3">
                        <img src="/projects/DiscoverylandCo/3.jpg" alt=""/>
                    </div>
                    <div className="col-span-1 md:col-span-2 h-full">
                        <div className="grid grid-cols-3 h-full">
                            <div className="md:col-span-1"></div>
                            <div className="col-span-3 md:col-span-2 h-full md:relative">
                                <img className="md:absolute bottom-[-35%]" src="/projects/DiscoverylandCo/4.jpg"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-5 mt-[30vw] md:mt-[4vw]">
                    <div className="col-span-5 md:col-span-2">
                        <img src="/projects/DiscoverylandCo/5.jpg" alt=""/>
                    </div>
                    <div className="md:col-span-3">
                    </div>
                </div>
                <div className="mt-[4vw]">
                    <img src="/projects/DiscoverylandCo/6.jpg" alt=""/>
                </div>
                <div className="grid grid-cols-2 mt-[4vw]">
                    <div className="md:col-span-1"></div>
                    <div className="col-span-2 md:col-span-1">
                        <img src="/projects/DiscoverylandCo/7.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid grid-cols-5 mt-[4vw]">
                    <div className="col-span-5 md:col-span-2 flex justify-center gap-12">
                        <div className="w-[235px]">
                            <img className="w-full h-full rounded-[30px] border-[6px] border-black"
                                 src="/projects/DiscoverylandCo/8.jpg" alt=""/>
                        </div>
                        <div className="w-[235px]">
                            <img className="w-full h-full rounded-[30px] border-[6px] border-black"
                                 src="/projects/DiscoverylandCo/9.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-3"></div>
                </div>
                <div className="grid grid-cols-5 mt-[4vw]">
                    <div className="col-span-5 md:col-span-3"></div>
                    <div className="col-span-5 md:col-span-2 flex justify-center gap-12">
                        <div className="w-[235px]">
                            <img className="w-full h-full rounded-[30px] border-[6px] border-black"
                                 src="/projects/DiscoverylandCo/10.jpg" alt=""/>
                        </div>
                        <div className="w-[235px]">
                            <img className="w-full h-full rounded-[30px] border-[6px] border-black"
                                 src="/projects/DiscoverylandCo/11.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 mt-[4vw]">
                    <div className="col-span-5 md:col-span-2 flex gap-12">
                        <div className="w-[235px]">
                            <img className="w-full h-full rounded-[30px] border-[6px] border-black"
                                 src="/projects/DiscoverylandCo/12.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-3"></div>
                </div>
                <ProjectFooter name={['JESPER', 'LANDBERG']} image={"/images/index/three.avif"}/>
            </CommonLayout>
        </div>
    )
}
