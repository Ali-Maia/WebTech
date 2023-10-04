import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {}

const ButtonVariants = cva(
    "flex items-center px-6 py-4 gap-2 justify-center font-semibold rounded-full", 
    {
        variants: {
            variant: {
                default: "bg-[#7214FF] text-white",
                outline: "bg-transparent border-2 border-[#7214FF] hover:border-[#7214FF] hover:text-white",
            }
        },
        defaultVariants: {
            variant: "default",
        }   
    }
)

export default function Button({ className, variant, ...props  } : ButtonProps) {
    return (
        <button className={cn(ButtonVariants({ variant, className }))} {...props}>
            {props.children}
        </button>
    )
}