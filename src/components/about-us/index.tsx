import React from 'react'
import Section from '../section'
import Heading from '../heading'
import Card from './card'

export default function AboutUs() {
  return (
    <Section>
        <Heading title='Sobre Nós' subtitle='Saiba mais sobre quem somos e quais são os nossos serviços' />
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <Card 
                title='Consultoria em Web Design' 
                description='Consultoria personalizada em web design que combina criatividade e estratégia para traduzir a visão do cliente em designs excepcionais' 
            />
            <Card 
                title='Acessibilidade e Inclusão Web' 
                description='Desenvolvimento web que prioriza a acessibilidade e inclusão, garantindo que os sites sejam acessíveis a todas as pessoas'
            />
            <Card
                title='Suporte e Manutenção'
                description='Suporte contínuo e serviços de manutenção para manter os sites seguros, atualizados e funcionando perfeitamente'
            />
        </div>
    </Section>
  )
}
