'use client'

import { Sheet } from "@/shared/components/sheet/sheet";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <h1>Hello</h1>
      <Sheet />
    </>
  );
}
