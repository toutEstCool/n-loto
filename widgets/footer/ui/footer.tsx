import { cn } from "@/shared/lib/utils"
import { Phone } from 'lucide-react'
import Image from "next/image"
import { Container } from "@/widgets/container"

interface IFooterProps {
  className?: string
}

export const Footer: React.FC<IFooterProps> = (props) => {
  const { className } = props

  return (
    <footer className={cn('', className)}>
      {/* Upper Header */}
      <div className="bg-[#8B3A9A] py-1 px-4  text-[13.5px] font-bold">
        <Container>
          <div className="flex justify-between">
            <ul className="flex items-center text-[#dddddd] cursor-pointer gap-8">
              <li className="hover:text-white">Франчайзинг</li>
              <li className="hover:text-white">О компании</li>
            </ul>
            <div>
              <a href="tel:" className="flex items-center gap-2">
                <Phone color="white" size={14} />
                <p className="text-white font-medium">Круглосуточная поддержка по телефону</p>
                <p className="text-white font-medium">8 800 333-7-333</p>
              </a>
            </div>
            <ul className="flex items-center text-[#dddddd] cursor-pointer gap-8">
              <li className="hover:text-white">Проверить билет</li>
              <li className="hover:text-white">
                Как получить выигрыш</li>
            </ul>
          </div>
        </Container>
      </div>
      {/* Lower Header */}
      <div className="bg-[#FFFFFF] py-1">
        <Container className="h-[54]">
          <div className="flex items-center justify-between h-[100%]">
            {/* Left Section */}
            <div className="flex items-center">
              <div className="mr-16">
                <Image src={'/logo.png'} alt="Logo" width={150} height={39} />
              </div>
              <ul className="flex items-center gap-8 text-[#2F41B0] text-[16px] font-medium">
                <li>
                  <div className="w-full">
                    <button className="border-t-[1px] border-b-[1px] border-[#8b3a9a] text-[#8b3a9a] font-black">Второй шанс</button>
                  </div>
                </li>
                <li>Акции</li>
                <li>Победители</li>
              </ul>
            </div>
            {/* Right Section */}
            <div>
              <ul className="text-[#2F41B0] text-[16px] font-medium">
                <li>
                  <button>
                    <span>
                      <span>Вход / Регистрация</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}