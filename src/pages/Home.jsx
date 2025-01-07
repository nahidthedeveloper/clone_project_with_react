import Hero from "../components/Home/Hero.jsx";
import ImageCard from "../components/Home/ImageCard.jsx";
import MainLayout from "../Layout/MainLayout.jsx";

const Home = () => {
    return (
        <MainLayout>
            <Hero/>
            <ImageCard/>
        </MainLayout>
    );
};

export default Home;