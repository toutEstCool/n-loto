'use client'

import { cn } from "@/shared/lib/utils"
import { UpperHeader } from "./upper-header";
import { LowerHeader } from "./lower-header";

interface IHeaderProps {
  className?: string
}

export const Header: React.FC<IHeaderProps> = (props) => {
  const { className } = props

  return (
    <header className={cn('top-0 left-0 w-full z-50 fixed', className)}>
    <UpperHeader />
    <LowerHeader />
  </header>
  )
}