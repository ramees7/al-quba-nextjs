// components/DirectorMessage.jsx

import Image from 'next/image';
import Link from 'next/link';
import khasimEnoli from "../../../public/assets/khasim_enoli.png"; // Ensure your image is in the public folder

export default function DirectorMessage() {
  return (
    <section className="">
      <div className="xl:text-[150px] lg:text-[120px] md:text-[110px] text-[90px] font-ppneuemontrealThin overflow-hidden text-[#CEAB7A]">
        <div className="marquee-container flex gap-20">
          <h1 className="marquee">DIRECTOR’S MESSAGE</h1>
          <h1 className="marquee">DIRECTOR’S MESSAGE</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 relative lg:gap-16 md:gap-6 gap-12 md:min-h-[600px] min-h-fit tall:h-[700px] lg:me-20 md:me-10 me-8 border-b-0">
        <div className="absolute bottom-0 md:w-[90%] w-[88%] border-b border-[#707070] ms-8 md:ms-0"></div>
        <div className="md:col-span-1 col-span-2 h-full flex items-end">
          <Image
            src={khasimEnoli}
            alt="Profile picture of Mr. Khasim Enoli, Founder & Managing Director"
            loading="lazy"
            className="md:h-fit h-[450px] relative xl:-top-44 xl:-mb-44 lg:-top-40 lg:-mb-40 -top-20 -mb-20 xl:w-[610px] lg:w-[500px] md:w-[400px] w-full object-cover"
            width={610} // Add width and height for Next.js Image optimization
            height={450}
          />
        </div>
        <div className="md:col-span-1 col-span-2 h-full flex justify-center lg:px-10 md:ps-5 px-8">
          <article className="lg:space-y-7 space-y-5 h-full !pb-10">
            <header>
              <h1 className="uppercase lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-capsMedium">
                MR. KHASIM ENOLI
              </h1>
              <h3 className="text-[#707070] md:text-lg sm:text-base xs:text-sm font-normalFont">
                Founder & Managing Director
              </h3>
            </header>
            <h2 className="lg:text-5xl md:text-4xl sm:text-4xl xs:text-2xl text-[#CEAB7A] font-capsNormal tracking-[1.2px] xl:pe-32 xl:leading-[53px] lg:leading-[48px]">
              STRATEGIC LEADER IN BUSINESS GROWTH & INNOVATION
            </h2>
            <h4 className="text-[#0E2141] lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-mediumFont">
              Dear Investors,
            </h4>
            <p className="text-[#898989] sm:text-sm xs:text-xs md:text-bas xl:pe-24">
              AI QUBA LLC, a trusted investment firm based in Dubai, offers
              premium investment opportunities that are securely backed by
              official government approvals and legal protections. We are
              committed to providing secure investments that prioritize your
              financial wellbeing.
            </p>
            <div>
              <Link
                href="/"
                className="uppercase underline md:text-lg text-base"
                aria-label="Read more about Mr. Khasim Enoli's message"
              >
                READ MORE
              </Link>
            </div>
          </article>
        </div>
        <div className="absolute bottom-0 right-0 bg-white">
          <Link href="/">
            <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase md:px-7 sm:px-4 xs:px-2 py-1">
              know more
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
