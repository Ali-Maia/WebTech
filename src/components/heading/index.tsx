import { cn } from '@/lib/utils'

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    subtitle: string
}

export default function Heading({ className, title, subtitle, ...props }: HeadingProps) {
    return (
        <div className={cn('w-full flex flex-col gap-3 justify-center items-center text-center text-[#151934]', className)} {...props}>
            <h2 className='text-4xl lg:text-5xl  font-extrabold'>{title}</h2>
            <p className='text-xl font-medium'>{subtitle}</p>
        </div >
    )
}