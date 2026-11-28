export default function Juguete({ nombre, descripcion, precio, icono }) {

    return (
        <article className="bg-tarjeta dark:bg-tarjeta-oscura
                            rounded-card shadow-md overflow-hidden
                            border border-gray-200 dark:border-gray-800
                            hover:shadow-xl motion-safe:transition-shadow">

            {/* Representación del juguete */}
            <div className="h-48 flex items-center justify-center
                            bg-violet-100 dark:bg-neutral-800">

                <span className="text-8xl" aria-hidden="true">
                    {icono}
                </span>

            </div>

            {/* Información del juguete */}
            <div className="p-6 flex flex-col gap-3">

                <h3 className="text-xl font-bold">
                    {nombre}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                    {descripcion}
                </p>

                <span className="text-2xl font-bold text-marca
                                 dark:text-marca-claro">
                    {precio.toFixed(2)} €
                </span>

            </div>

        </article>
    )
}