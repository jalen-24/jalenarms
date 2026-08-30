import Nav from "./components/site/Nav"
import Footer from "./components/site/Footer"
import { Edge } from "./components/site/primitives"
import Hero from "./sections/Hero"
import Stack from "./sections/Stack"
import Work from "./sections/Work"
import Reviews from "./sections/Reviews"
import Contact from "./sections/Contact"

const MainPage = () => (
  <div className="grid-bg relative min-h-screen">
    <Nav />
    <main className="relative z-[1]">
      <Hero />
      <Edge label="what I work with" />
      <Stack />
      <Edge label="where it ran" />
      <Work />
      <Edge label="what clients said" />
      <Reviews />
      <Edge label="get in touch" />
      <Contact />
    </main>
    <Footer />
  </div>
)

export default MainPage
