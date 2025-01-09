import ProjectHero from "../../components/ProjectHero.jsx";
import CommonLayout from "../../Layout/CommonLayout.jsx";

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
                    className="h-full w-full object-cover"
                >
                    <source src="/projects/DiscoverylandCo/1919284378.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

            </CommonLayout>


        </div>
    )
}
