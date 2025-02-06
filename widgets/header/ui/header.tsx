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
    <header className={cn('', className)}>
      <UpperHeader />
      <LowerHeader />
    </header>
  )
}