import Image from 'next/image'
import React from 'react'
import { MoveRight } from 'lucide-react'

interface itemProps {
    image: string
    name: string
    description: string
    href: string
}

interface ProjectItemProps {
    item: itemProps
}


export default function ProjectItem({ item }: ProjectItemProps) {
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 lg:flex-row gap-6 items-center justify-center text-[#151934]'>
            <div className='w-full rounded-2xl overflow-hidden border-primary border-2'>
                <Image 
                    src={item.image}
                    width={820}
                    height={304}
                    alt={item.name}
                    className='w-full'
                    priority />
            </div>

            <div className='flex flex-col w-full items-center lg:items-start gap-3'>
                <h3 className='font-bold text-2xl text-center lg:text-left'>{item.name}</h3>
                <p className='text-base text-center lg:text-start font-medium max-w-[600px]'>{item.description}</p>
                <p>
                    <a href={item.href} target='_blank' className="font-medium hover:font-bold transition-all">
                        Ver projeto <MoveRight className="inline-block" />
                    </a>
                </p>
            </div>
        </div>
    )
}
