import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode
    title: string
    description: string
}

export default function Card({ className, children, title, description, icon, ...props  } : CardProps) {
    return (
        <div className={cn('flex flex-col p-8 rounded-2xl bg-[#0E1330] text-center lg:text-start', className)} {...props}>
            <div className='flex justify-center lg:justify-start'>
                {icon}
            </div>
            <h3 className='text-2xl font-bold text-white mt-6 mb-3'>{title}</h3>
            <p className='text-base font-medium text-[#8F9BB7]'>{description}</p>
        </div >
    )
}