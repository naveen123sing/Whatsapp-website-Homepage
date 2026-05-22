import Image from "next/image";
import styles from "./trusted-section.module.css";

const trustedBrands = [
  {
    name: "Citm",
    logo: "/Logos/citm.png",
    width: 80,
    height: 80,
  },
  {
    name: "Ranavilas",
    logo: "/Logos/Ranavilas-Logo.svg",
    width: 100,
    height: 100,
  },
  {
    name: "Jantv",
    logo: "/Logos/Jantvlogo3.png",
    width: 120,
    height: 60,
  },
  {
    name: "Compucom",
    logo: "/Logos/csl logo.jpg",
    width: 130,
    height: 50,
  },
 
  {
    name: "Iee",
    logo: "/Logos/Ieelogo.png",
    width: 130,
    height: 70,
  },
  {
    name: "It-neer",
    logo: "/Logos/itneer-logo.png",
    width: 150,
    height: 50,
  },
];

export function TrustedSection() {
  return (
    <section className="container mx-auto px-6 py-16 text-center animate-fade-up">
      <p className="text-gray-400 mb-10 text-lg">
        Trusted by 1200+ Businesses Worldwide
      </p>

      <div className="overflow-hidden relative w-full mt-10
           before:absolute 
           before:left-0 
           before:top-0 
           before:z-10 
           before:h-full 
           before:w-24
           before:bg-linear-to-r 
         before:from-[#070819]/70 
           before:to-transparent

           after:absolute 
           after:right-0 
           after:top-0 
           after:z-10 
           after:h-full 
           after:w-24
           after:bg-linear-to-l 
         after:from-[#070819]/70 
           after:to-transparent 
          ">
        <div className={`${styles.slider} flex items-center gap-8 w-max`}>

          {[...trustedBrands, ...trustedBrands].map((brand, i) => (
            <div
              key={i}
              className="group h-24 w-48 rounded-2xl border border-white/10 bg-white backdrop-blur-xl flex items-center justify-center
               transition-all 
               duration-300
               hover:-translate-y-2
             hover:border-[#25D366]/40
             hover:bg-white
               hover:shadow-[0_0_35px_rgba(37,211,102,0.18)]
               shadow-[0_10px_30px_rgba(0,0,0,0.25)]
               "
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: `${brand.width}px`,
                  height: `${brand.height}px`,
                  objectFit: "contain",
                }}
                className="
            transition-all
            duration-300
            group-hover:scale-110
          "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
