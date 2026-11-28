import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalogo from './components/Catalogo'
import Nosotros from './components/Nosotros'
import Footer from './components/Footer'

export default function App() {

    return (
        <div className="min-h-screen flex flex-col
                        bg-fondo dark:bg-fondo-oscuro
                        text-texto dark:text-texto-oscuro
                        font-display">

            <Navbar />

            <main className="grow">
                <Hero />
                <Catalogo />
                <Nosotros />
            </main>

            <Footer />

        </div>
    )
}