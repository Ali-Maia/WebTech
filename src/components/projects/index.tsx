import React from 'react'
import Section from '../section'
import Heading from '../heading'
import ProjectItem from './project-item'

const projects = [
    {
        "image": "/images/projects/jornada-inclusao-digital.jpg",
        "name": "Jornada para Inclusão Digital",
        "description": "Site desenvolvido para a Jornada da Inclusão Digital, evento organizado pela Faculdade de Computação da Universidade Federal do Pará (UFPA).",
        "href": "https://jidcastanhal.com.br",
    },
    {
        "image": "/images/projects/camile-medeiros.jpg",
        "name": "Faculdade de Computação",
        "description": "Site desenvolvido para a Faculdade de Computação - UFPA Castanhal para expor informações sobre sua estrutura, documentos, notícias.",
        "href": "https://facompcastanhal.ufpa.br",
    }
]

export default function Projects() {
  return (
    <Section>
        <Heading title='Projetos' subtitle='Cada projeto é uma oportunidade de transformar ideias em realidade digital'/>
        {
            projects.map((item, index) => (
                <ProjectItem item={item} key={index} />
            ))
        }
    </Section>
  )
}
