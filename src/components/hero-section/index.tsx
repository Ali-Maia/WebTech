import React from "react";
import Section from "../section";
import Button from "../button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Section className="min-h-[880px] text-[#151934]">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-7xl font-black">
          Transformando ideias em sites
        </h1>
        <p className="text-xl font-medium">
          Desenvolvemos estratégias para impulsionar o crescimento do seu
          negócio e alcançar seus objetivos
        </p>
      </div>
      <Button>Entrar em contato</Button>
      <div className="flex flex-wrap gap-8  justify-center">
        <Image
          src="/images/image_web.svg"
          alt="Imagem"
          width={808}
          height={513}
          priority
        />
        <Image
          src="/images/image_mobile.svg"
          alt="Imagem"
          width={268}
          height={513}
          priority
        />
      </div>
    </Section>
  );
}
