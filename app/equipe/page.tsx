import Image from "next/image";

export default function EquipePage() {
  const equipe = [
    { nom: "Dr Yehia EL BENDARY", specialite: "Medical Director & Neurosurgeon", image: "/habebi.png" },
    { nom: "Dr XXX", specialite: "Anesthésiste - Algologue", image: "/medecin2.png" },
	{ nom: "Dr MMM", specialite: "Radiologue", image: "/medecin3.png" },
    { nom: "YYY", specialite: "Psychologue", image: "/medecin4.png" },
	{ nom: "ZZZ", specialite: "Kinésithérapeute", image: "/medecin5.png" }
	
  ];

  return (
    <main className="pt-24 min-h-screen bg-white text-gray-800 px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#0077B5]">Our team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {equipe.map((membre, idx) => (
          <div key={idx} className="bg-blue-50 rounded shadow p-4 text-center">
            <Image
              src={membre.image}
              alt={membre.nom}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h4 className="font-semibold text-lg">{membre.nom}</h4>
            <p className="text-sm text-gray-600">{membre.specialite}</p>
          </div>
        ))}
      </div>
    </main>
  );
}