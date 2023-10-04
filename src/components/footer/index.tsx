"use client";
// import Button from "./ui/button";
// import H2 from "./ui/h2";
// import P from "./ui/p";
 import Section from "./ui/section";
import Image from "next/image";
import Animation from "./animation";

export default function Footer() {
  return (
    <Animation>
      <footer className="bg-deep-blue w-full" id="contato">
        <div className="bg-yellow w-full py-16">
          <Section>
            <H2>Contato</H2>
            <P size="big" align="center" className=" break:w-2/5">
              Entre em contato conosco para saber mais sobre como nossas aulas
              de reforço podem fazer a diferença!
            </P>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="https://wa.me/5591981378704">
                <Button>
                  <Image
                    src="/images/whatsapp.svg"
                    alt="Ícone do Whatsapp"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                  Whatsapp
                </Button>
              </a>

              <a href="https://instagram.com/profa.camilemedeiros">
                <Button>
                  <Image
                    src="/images/instagram.svg"
                    alt="Ícone do Instagram"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                  Instagram
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/camilemedeiros/">
                <Button className="w-full">
                  <Image
                    src="/images/linkedin.svg"
                    alt="Ícone do Linkedin"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                  Linkedin
                </Button>
              </a>
            </div>
          </Section>
        </div>
        <Section className="py-6 px-6">
          <P className="text-white">
            Camile Medeiros © 2023 | Desenvolvido por Nave Labz
          </P>
        </Section>
      </footer>
    </Animation>
  );
}
