import Navbar from './components/Navbar'
import Juguete from './components/Juguete'

const juguetes = [
    {
        id: 1,
        nombre: 'Oso de peluche',
        descripcion: 'Un compañero suave y divertido.',
        precio: 19.99,
        icono: '🧸'
    },
    {
        id: 2,
        nombre: 'Coche de carreras',
        descripcion: 'Perfecto para pequeñas aventuras.',
        precio: 24.99,
        icono: '🏎️'
    },
    {
        id: 3,
        nombre: 'Robot espacial',
        descripcion: 'Explora el universo con tu imaginación.',
        precio: 34.99,
        icono: '🤖'
    },
    {
        id: 4,
        nombre: 'Bloques de construcción',
        descripcion: 'Construye todo lo que puedas imaginar.',
        precio: 29.99,
        icono: '🧱'
    },
    {
        id: 5,
        nombre: 'Dinosaurio',
        descripcion: 'Viaja al mundo de los dinosaurios.',
        precio: 15.99,
        icono: '🦖'
    },
    {
        id: 6,
        nombre: 'Tren de juguete',
        descripcion: 'Comienza una aventura sobre ruedas.',
        precio: 39.99,
        icono: '🚂'
    }
]

export default function App() {

    return (
        <div className="min-h-screen flex flex-col font-display
                        bg-fondo text-texto
                        dark:bg-fondo-oscuro dark:text-texto-oscuro
                        motion-safe:transition-colors duration-300">

            <Navbar />

            <main className="grow">

                {/* Sección principal de bienvenida */}
                <section
                    id="inicio"
                    className="bg-violet-100 dark:bg-tarjeta-oscura"
                >
                    <div className="max-w-7xl mx-auto px-4 py-16
                                    md:px-8 md:py-24
                                    flex flex-col md:flex-row
                                    items-center gap-8">

                        <div className="flex-1 text-center md:text-left">

                            <h1 className="text-3xl md:text-5xl
                                           lg:text-6xl 3xl:text-7xl
                                           font-bold leading-tight">

                                Un mundo lleno de

                                <span className="block text-marca
                                                 dark:text-marca-claro">
                                    diversión
                                </span>

                            </h1>

                            <p className="mt-6 text-lg md:text-xl
                                          text-gray-600 dark:text-gray-300">

                                Descubre nuestros juguetes y deja
                                volar tu imaginación.

                            </p>

                            <a
                                href="#juguetes"
                                className="inline-block mt-8 px-6 py-3
                                           bg-marca text-white rounded-lg
                                           font-semibold
                                           hover:bg-marca-hover
                                           focus-visible:ring-2
                                           focus-visible:ring-marca
                                           dark:focus-visible:ring-marca-claro
                                           motion-safe:transition-colors"
                            >
                                Explorar juguetes
                            </a>

                        </div>

                        <div className="flex-1 flex justify-center">

                            <span className="text-9xl"
                                  aria-hidden="true">
                                🧸
                            </span>

                        </div>

                    </div>
                </section>

                {/* Catálogo de juguetes */}
                <section
                    id="juguetes"
                    className="max-w-7xl mx-auto px-4 py-12 md:px-8"
                >

                    <h2 className="text-3xl md:text-4xl font-bold
                                   text-center mb-4">
                        Nuestros juguetes
                    </h2>

                    <p className="text-center mb-10
                                  text-gray-600 dark:text-gray-300">
                        Encuentra el juguete perfecto para cada aventura.
                    </p>

                    {/* Grid responsive */}
                    <div className="grid grid-cols-1
                                    md:grid-cols-2
                                    lg:grid-cols-3
                                    gap-6">

                        {juguetes.map(juguete => (
                            <Juguete
                                key={juguete.id}
                                nombre={juguete.nombre}
                                descripcion={juguete.descripcion}
                                precio={juguete.precio}
                                icono={juguete.icono}
                            />
                        ))}

                    </div>

                </section>

                {/* Sección sobre nosotros */}
                <section
                    id="nosotros"
                    className="bg-violet-100 dark:bg-tarjeta-oscura
                               px-4 py-16 text-center"
                >

                    <h2 className="text-3xl font-bold mb-4">
                        Sobre nosotros
                    </h2>

                    <p className="max-w-2xl mx-auto
                                  text-gray-600 dark:text-gray-300">

                        En ToyRust creemos que jugar es la mejor
                        forma de aprender, imaginar y descubrir
                        nuevas aventuras. Queremos ofrecer juguetes
                        para todas las edades.

                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3
                                    gap-gutter max-w-5xl mx-auto mt-10">

                        <div className="flex flex-col items-center gap-3">
                            <span className="text-4xl">🚚</span>
                            <h3 className="font-bold">Envíos rápidos</h3>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <span className="text-4xl">⭐</span>
                            <h3 className="font-bold">Calidad garantizada</h3>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <span className="text-4xl">🎁</span>
                            <h3 className="font-bold">Regalos para todos</h3>
                        </div>

                    </div>

                </section>

            </main>

            {/* Pie de página */}
            <footer className="bg-tarjeta dark:bg-tarjeta-oscura
                               border-t border-gray-200
                               dark:border-gray-800 px-4 py-6">

                <div className="max-w-7xl mx-auto flex flex-col
                                md:flex-row items-center
                                justify-between gap-4">

                    <span className="text-xl font-bold text-marca
                                     dark:text-marca-claro">
                         ToyRust
                    </span>

                    <p className="text-sm text-gray-600
                                  dark:text-gray-300">
                        © 2026 ToyRust. Todos los derechos reservados.
                    </p>

                </div>

            </footer>

        </div>
    )
}