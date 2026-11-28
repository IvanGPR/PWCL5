import { useState } from 'react'

export default function BarraNavegador() {

    const [oscuro, setOscuro] = useState(false)

    function toggleTema() {
        document.documentElement.classList.toggle('dark')
        setOscuro(!oscuro)
    }

    return (
        <header className="bg-tarjeta dark:bg-tarjeta-oscura shadow-md">

            <nav className="max-w-7xl mx-auto flex flex-wrap items-center
                            justify-between gap-4 px-4 py-4 md:px-8">

                <a href="#inicio"
                   className="text-2xl font-bold text-marca
                              dark:text-marca-claro">
                    ToyRust
                </a>

                {/* Enlaces visibles desde tablet */}
                <ul className="hidden md:flex items-center gap-6">

                    <li>
                        <a href="#inicio"
                           className="hover:text-marca dark:hover:text-marca-claro">
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a href="#juguetes"
                           className="hover:text-marca dark:hover:text-marca-claro">
                            Juguetes
                        </a>
                    </li>

                    <li>
                        <a href="#nosotros"
                           className="hover:text-marca dark:hover:text-marca-claro">
                            Nosotros
                        </a>
                    </li>

                </ul>

                {/* Botón para cambiar el tema */}
                <button
                    onClick={toggleTema}
                    aria-label="Modo oscuro"
                    aria-pressed={oscuro}
                    className="min-h-11 px-4 py-2 rounded-lg
                               bg-black text-white
                               dark:bg-white dark:text-black
                               cursor-pointer font-semibold
                               hover:opacity-80
                               focus-visible:ring-2
                               focus-visible:ring-marca
                               dark:focus-visible:ring-marca-claro
                               motion-safe:transition-colors"
                >
                    {oscuro ? 'Modo claro' : 'Modo oscuro'}
                </button>

            </nav>

        </header>
    )
}