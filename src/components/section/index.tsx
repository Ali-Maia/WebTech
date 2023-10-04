import { cn } from '@/lib/utils'
import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Section({ className, children } : SectionProps) {
  return (
    <section className={cn('flex items-center w-full justify-center py-16 px-6', className)}>
        <div className='flex flex-col items-center justify-center gap-8 max-w-7xl'>
            {children}
        </div>
    </section>
  )
}
