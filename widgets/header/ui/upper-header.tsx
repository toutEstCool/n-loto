import { Container } from "@/widgets/container"
import { Phone } from "lucide-react"

export const UpperHeader = () => {
  return (
    <div className="hidden md:block bg-[#8B3A9A] py-1 px-4 text-[12px] font-bold xl:text-[13.5px]">
      <Container>
        <div className="flex justify-between">
          <ul className="flex items-center text-[#dddddd] cursor-pointer gap-8">
            <li className="hover:text-white">Франчайзинг</li>
            <li className="hover:text-white">О компании</li>
          </ul>
          <div>
            <a href="tel:" className="flex items-center gap-2">
              <Phone color="white" size={14} />
              <p className="text-white font-medium xl:block hidden">Круглосуточная поддержка по телефону</p>
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
  )
}