import { ReactNode } from 'react'

// Base Props
export interface BaseProps {
  className?: string
  children?: ReactNode
}

export interface ButtonProps extends BaseProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

export interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
