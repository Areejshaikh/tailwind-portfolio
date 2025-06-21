import About from './about/page';
import Blog from './blog/page';
import Hero from './hero/page';
import Services from './services/page';
import Portfolio from './portfolio/page';
import Projects from './projects/page';


const Home = () => {
    return (
        <div>

            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Projects />
            <Blog />

        </div>
    );
};

export default Home;

