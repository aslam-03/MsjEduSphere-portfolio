import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Methodology from '@/components/Methodology';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import Admission from '@/components/Admission';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { FadeInSection } from '@/components/FadeInSection';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <FadeInSection>
                <Hero />
            </FadeInSection>
            <FadeInSection>
                <About />
            </FadeInSection>
            <FadeInSection>
                <Courses />
            </FadeInSection>
            <FadeInSection>
                <Methodology />
            </FadeInSection>
            <FadeInSection>
                <Results />
            </FadeInSection>
            <FadeInSection>
                <Testimonials />
            </FadeInSection>
            <FadeInSection>
                <Admission />
            </FadeInSection>
            <FadeInSection>
                <Gallery />
            </FadeInSection>
            <FadeInSection>
                <Contact />
            </FadeInSection>
            <FadeInSection>
                <Footer />
            </FadeInSection>
        </main>
    );
}
