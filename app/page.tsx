import Image from "next/image";

export default function Home() {
  const whatsappLink =
    "https://wa.me/525579261990?text=Hola%20quiero%20información%20sobre%20diseño%20floral";

  const mapsLink =
    "https://www.google.com/maps?q=Tepoztl%C3%A1n%2C%20Morelos";

  const services = [
    "Bodas",
    "Eventos privados",
    "Instalaciones florales",
    "Ramos de novia",
    "Diseño de mesas",
  ];

  const galleryItems = [
    "Ceremonia",
    "Mesa editorial",
    "Ramo nupcial",
    "Instalación floral",
    "Recepción",
    "Detalle botánico",
  ];

  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#181512]">
      <section
        className="relative min-h-screen overflow-hidden bg-[#181512]"
        id="top"
      >
        <div className="absolute inset-0">
          <div className="h-full w-full scale-[1.02] bg-[linear-gradient(180deg,rgba(24,21,18,0.36),rgba(24,21,18,0.18)_42%,rgba(24,21,18,0.5)),url('https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=2400&q=85')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[#181512]/20" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-[92rem] flex-col px-6 py-8 text-white sm:px-10 lg:px-16 xl:px-20">
          <header className="flex items-center justify-between">
            <a className="font-serif text-3xl tracking-wide" href="#top">
              Florita
            </a>
            <a
              className="text-xs uppercase tracking-[0.34em] text-white/72 transition duration-300 hover:translate-x-1 hover:text-white"
              href="#contacto"
            >
              Contacto
            </a>
          </header>

          <div className="flex flex-1 items-center justify-center py-24 text-center">
            <div className="mx-auto max-w-6xl">
              <p className="mb-8 text-xs uppercase tracking-[0.44em] text-white/72">
                Estudio de diseño floral
              </p>
              <h1 className="font-serif text-[clamp(6rem,17vw,16rem)] font-normal leading-[0.78] tracking-normal">
                Florita
              </h1>
              <p className="mx-auto mt-10 max-w-4xl text-balance text-2xl leading-9 text-white/90 sm:text-3xl sm:leading-11 lg:text-4xl lg:leading-[1.15]">
                Diseño floral y ambientación para bodas y eventos en Tepoztlán
              </p>
              <a
                className="mt-12 inline-flex min-h-14 items-center justify-center border border-white bg-white px-9 text-sm uppercase tracking-[0.26em] text-[#181512] transition duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-white"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar propuesta
              </a>
            </div>
          </div>

          <div className="grid gap-6 border-t border-white/16 pt-7 text-xs uppercase leading-6 tracking-[0.22em] text-white/64 sm:grid-cols-3">
            <p>Tepoztlán, Morelos</p>
            <p>Bodas y eventos íntimos</p>
            <p className="sm:text-right">
              Botánica editorial y atmósferas a medida
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[90rem] gap-16 px-6 py-32 sm:px-10 lg:grid-cols-[0.85fr_1.35fr] lg:px-16 lg:py-44 xl:px-20">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#6f7b5d]">
            Acerca de
          </p>
          <h2 className="mt-7 max-w-2xl font-serif text-5xl font-normal leading-[1.02] text-[#181512] sm:text-6xl lg:text-7xl">
            Flores con calma, presencia y una sensibilidad profundamente
            natural.
          </h2>
        </div>
        <div className="max-w-3xl lg:pt-20">
          <p className="text-2xl leading-10 text-[#4d463d]">
            En Florita diseñamos ambientes florales que acompañan la emoción
            de cada celebración sin imponerla. Trabajamos con composiciones
            botánicas de temporada, texturas suaves y una mirada editorial para
            crear bodas y eventos que se sienten íntimos, elevados y
            cuidadosamente vivos.
          </p>
        </div>
      </section>

      <section className="bg-[#fffaf3] px-6 py-32 sm:px-10 lg:px-16 lg:py-40 xl:px-20">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-20 flex flex-col justify-between gap-10 border-b border-[#d9ccbb] pb-12 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#6f7b5d]">
                Servicios
              </p>
              <h2 className="mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.02] sm:text-6xl lg:text-7xl">
                Ambientación floral para momentos memorables.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-[#6b6258]">
              Propuestas integrales para ceremonias, recepciones y encuentros
              privados con una estética serena y sofisticada.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#d9ccbb] bg-[#d9ccbb] md:grid-cols-5">
            {services.map((service) => (
              <article
                className="group flex min-h-64 flex-col justify-between bg-[#fffaf3] p-7 transition duration-300 ease-out hover:scale-105 hover:bg-[#f6eddf] hover:shadow-[0_22px_50px_rgba(24,21,18,0.12)] lg:p-8"
                key={service}
              >
                <span className="text-xs uppercase tracking-[0.26em] text-[#6f7b5d] transition duration-300 group-hover:text-[#181512]">
                  Florita
                </span>
                <h3 className="font-serif text-3xl font-normal leading-tight transition duration-300 group-hover:-translate-y-1">
                  {service}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e8] px-6 py-32 sm:px-10 lg:px-16 lg:py-40 xl:px-20">
        <div className="mx-auto max-w-[90rem] border-t border-[#d9ccbb] pt-20 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-[#6f7b5d]">
            Colaboraciones
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.02] sm:text-6xl lg:text-7xl">
            Espacios donde hemos colaborado
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#4d463d]">
            A lo largo del tiempo hemos participado en montajes y detalles
            florales para distintos espacios y eventos en Morelos.
          </p>

          <div className="mx-auto mt-20 grid max-w-5xl items-center justify-items-center gap-x-16 gap-y-14 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-20">
            <Image
              className="h-auto w-32 opacity-75 grayscale transition duration-500 ease-out hover:scale-105 hover:opacity-100 hover:grayscale-0 sm:w-40 lg:w-44"
              src="/el-ciruelo.webp"
              alt="El Ciruelo Restaurante"
              width={500}
              height={519}
            />
            <Image
              className="h-auto w-32 opacity-75 grayscale transition duration-500 ease-out hover:scale-105 hover:opacity-100 hover:grayscale-0 sm:w-40 lg:w-44"
              src="/gallaecialogo.png"
              alt="Gallaecia"
              width={480}
              height={500}
            />
            <Image
              className="h-auto w-32 opacity-75 grayscale transition duration-500 ease-out hover:scale-105 hover:opacity-100 hover:grayscale-0 sm:w-40 lg:w-44"
              src="/jardinAbundancia.png"
              alt="Jardín de la Abundancia"
              width={2772}
              height={2684}
            />
            <Image
              className="h-auto w-44 opacity-75 grayscale transition duration-500 ease-out hover:scale-105 hover:opacity-100 hover:grayscale-0 sm:w-52 lg:w-56"
              src="/madrigal.png"
              alt="El Madrigal, Cuernavaca"
              width={274}
              height={184}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-6 py-32 sm:px-10 lg:px-16 lg:py-44 xl:px-20">
        <div className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#6f7b5d]">
            Galería
          </p>
          <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.02] sm:text-6xl lg:text-7xl">
            Una mirada a la atmósfera.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {galleryItems.map((item, index) => (
            <figure
              className="group relative aspect-[4/5] overflow-hidden bg-[#d8cbb8] shadow-[0_22px_60px_rgba(24,21,18,0.08)] sm:aspect-[3/4]"
              key={item}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 ease-out group-hover:scale-[1.035] group-hover:brightness-95"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(24,21,18,0.02), rgba(24,21,18,0.34)), url(https://images.unsplash.com/photo-${
                    [
                      "1464983953574-0892a716854b",
                      "1519225421980-715cb0215aed",
                      "1525310072745-f49212b5ac6d",
                      "1519741497674-611481863552",
                      "1507504031003-b417219a0fde",
                      "1520763185298-1b434c919102",
                    ][index]
                  }?auto=format&fit=crop&w=1200&q=80)`,
                }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-sm uppercase tracking-[0.22em] text-white/90 transition duration-300 group-hover:translate-y-[-2px] group-hover:text-white">
                {item}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-6 pb-32 sm:px-10 lg:px-16 lg:pb-44 xl:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl bg-[#d8cbb8] shadow-[0_24px_70px_rgba(24,21,18,0.12)]">
            <iframe
              src="https://www.google.com/maps?q=Tepoztl%C3%A1n%2C%20Morelos&z=13&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          <a
            className="mt-6 inline-flex text-sm uppercase tracking-[0.22em] text-[#4d463d] transition duration-300 hover:text-[#181512]"
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ubicación en Google Maps
          </a>
        </div>
      </section>

      <section
        className="bg-[#1f241a] px-6 py-32 text-[#fffaf3] sm:px-10 lg:px-16 lg:py-44 xl:px-20"
        id="contacto"
      >
        <div className="mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#b8c0a4]">
              Solicitar propuesta
            </p>
            <h2 className="mt-7 max-w-5xl font-serif text-6xl font-normal leading-[0.98] sm:text-7xl lg:text-8xl">
              Diseñemos una celebración floral con intención, belleza y
              pertenencia.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="mb-10 max-w-md text-xl leading-9 text-white/72">
              Comparte la fecha, el lugar y la atmósfera que imaginas. Te
              responderemos con los siguientes pasos para construir una
              propuesta a medida.
            </p>
            <a
              className="inline-flex min-h-14 items-center justify-center bg-[#fffaf3] px-8 text-sm uppercase tracking-[0.24em] text-[#1f241a] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8cbb8]"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <a
        className="whatsapp-float fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_rgba(24,21,18,0.22)] transition duration-300 ease-out hover:scale-105 hover:shadow-[0_20px_42px_rgba(37,211,102,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:right-8 sm:bottom-8 sm:size-16"
        href="https://wa.me/525579261990"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          aria-hidden="true"
          className="size-7 sm:size-8"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M16.02 3.2c-7.02 0-12.73 5.68-12.73 12.66 0 2.24.59 4.42 1.7 6.35L3.2 28.8l6.78-1.77a12.8 12.8 0 0 0 6.04 1.53c7.02 0 12.73-5.68 12.73-12.66S23.04 3.2 16.02 3.2Zm0 23.2c-1.92 0-3.8-.51-5.43-1.49l-.39-.23-4.02 1.05 1.07-3.9-.25-.4a10.43 10.43 0 0 1-1.59-5.53c0-5.78 4.76-10.49 10.61-10.49s10.61 4.7 10.61 10.49-4.76 10.5-10.61 10.5Zm5.82-7.86c-.32-.16-1.88-.92-2.17-1.03-.29-.1-.5-.16-.72.16-.21.31-.82 1.03-1.01 1.24-.18.21-.37.23-.69.08-.32-.16-1.35-.49-2.57-1.57-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.72-1.72-.98-2.35-.26-.62-.52-.53-.72-.54h-.61c-.21 0-.55.08-.85.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.4 5.43 4.77.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </main>
  );
}
