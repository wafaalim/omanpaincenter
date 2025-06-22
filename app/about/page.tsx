// app/about/page.tsx

import Image from "next/image";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-12">
      <h1 className="text-4xl font-bold text-[#0077B5] mb-8 text-center">About Us</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>

          <p>
            Oman Pain Center was founded by a passionate couple who envisioned a healthcare hub dedicated to comprehensive pain management. The idea was born out of a shared desire to improve the lives of patients suffering from chronic pain in Oman.
          </p>

          <p>
            With years of experience in medicine and a vision to deliver multidisciplinary, high-quality care, they set out to create a center that offers advanced, integrated, and patient-centered solutions.
          </p>

          <p>
            Dr. Yehia EL BENDARY, a distinguished neurosurgeon and graduate of Sorbonne University in Paris, brings his extensive expertise in the nervous system and interventional techniques.
          </p>

          <p>
            Alongside him, Wafaa LIMOUNA, who holds an MBA from Sorbonne University, brings a strong foundation in project leadership and patient care. Together, they are committed to transforming how pain is treated in the region.
          </p>

          <p>
            Oman Pain Center reflects their core values: excellence, empathy, and innovation. Their journey continues as they collaborate with top specialists to deliver hope and healing to those in pain.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col items-center gap-8">
          <div>
            <Image
              src="/images/Wafaa.PNG"
              alt="CEO Wafaa LIMOUNA"
              width={300}
              height={300}
              className="rounded-xl shadow-md"
            />
            <p className="text-center mt-2 font-medium">CEO Wafaa LIMOUNA</p>
          </div>
          <div>
            <Image
              src="/images/Yehia.PNG"
              alt="Dr. Yehia EL BENDARY, Neurosurgeon"
              width={300}
              height={300}
              className="rounded-xl shadow-md"
            />
            <p className="text-center mt-2 font-medium">Co-founder Dr. Yehia EL BENDARY</p>
          </div>
        </div>
      </div>
    </main>
  );
}
