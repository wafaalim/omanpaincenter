export default function ServicesPage() {
  const services = [
    "Epidural steroids injections",
    "Facet joints injections",
    "Sacroiliac joint injections",
    "Denervation procedures",
    "Peripheral nerve injections",
    "Sympathetic blocks",
    "Joints injections",
    "Trigger points injections",
  ];

  return (
    <main className="bg-white text-gray-800 px-6 py-12 pt-24 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-[#0077B5] text-center mb-6">
        Services
      </h1>

     <p className="text-base text-gray-700 mb-10 max-w-4xl text-left">
  At Oman Pain Center, we offer a range of innovative and effective pain management services,using advanced techniques to ensure each patient receives the highest quality of care:
</p>

      <ul className="space-y-3 text-lg text-[#0077B5] list-disc list-inside">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </main>
  );
}
