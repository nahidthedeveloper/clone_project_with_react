import ProjectHero from "../../components/ProjectHero.jsx";

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


        </div>
    )
}
