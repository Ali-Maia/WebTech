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
            className="w-full h-14 bg-[#151934] rounded-xl text-white placeholder:text-white p-4 focus:outline-none focus:ring-2 ring-[#7214FF]"
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-[#151934] rounded-xl text-white placeholder:text-white p-4 focus:outline-none focus:ring-2 ring-[#7214FF]"
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-[#151934] rounded-xl text-white placeholder:text-white p-4 focus:outline-none focus:ring-2 ring-[#7214FF]"
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
