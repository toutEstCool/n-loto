'use client'

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
