export const metadata = {
  title: "Contatti | Studio di Funzione",
  description:
    "Contatti del progetto Studio di Funzione.",
};

export default function Contatti() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">
          Contatti
        </h1>

        <div className="space-y-6">
         <p>
  E-mail:{" "}
  <a
    href="mailto:008alemoro@gmail.com"
    className="font-semibold underline"
  >
    008alemoro@gmail.com
  </a>
</p>

          <p>
            Il progetto è dedicato allo studio della matematica e
            accoglie volentieri segnalazioni riguardanti eventuali
            problemi negli strumenti di calcolo o suggerimenti per
            migliorare i contenuti.
          </p>
        </div>
      </div>
    </main>
  );
}
