import Button from "../button";
import Heading from "../heading";
import Section from "../section";

export default function ContactForm() {
  return (
    <Section>
      <Heading
        title="Contato"
        subtitle="Se interessou em nosso trabalho? Entre em contato com a gente!"
      />
      <div className="w-full max-w-[420px] mx-auto">
        <form className="w-full flex flex-col gap-4">
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={500}
          />

          <div className="relative w-max mx-auto mt-6">
            <Button>
              Enviar mensagem
              {/* colocar icone seta */}
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
