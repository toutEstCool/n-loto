import { useMenuVisibility } from "@/features/header"
import { Burger } from "@/shared/components/burger"
import { BurgerMenu } from "@/widgets/burger-menu"
import { Container } from "@/widgets/container"
import Image from "next/image"

export const LowerHeader = () => {
  const { isVisible, toggleVisibility } = useMenuVisibility()

  return (
    <div className="bg-[#FFFFFF] py-1">
      <Container className="h-[36px] md:h-[54]">
        <div className="flex items-center justify-between h-[100%]">
          {/* Left Section */}
          <div className="flex items-center gap-8">
            <div className="xl:hidden">
              {/* <Burger /> */}
              <BurgerMenu />
            </div>
            <div className="mr-8">
              <Image
                src={'/logo.png'}
                alt="Logo"
                width={150}
                height={40}
                sizes="(max-width: 768px) 88px, (max-width: 1280px) 116px, 150px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '150px',
                  maxHeight: '40px',
                }}
              />
            </div>
            <ul className="hidden xl:flex items-center gap-8 text-[#2F41B0] text-[16px] font-medium">
              <li>
                <div className="w-full relative">
                  {/* Кнопка */}
                  <button
                    className="border-t-[1px] border-b-[1px] border-[#8b3a9a] text-[#8b3a9a] font-black"
                    onClick={toggleVisibility}
                  >
                    Второй шанс
                  </button>

                  {/* Блок, который появляется под кнопкой */}
                  {isVisible && (
                    <div
                      className="absolute top-full left-0 w-[340px]  bg-[#fff] shadow-lg rounded-md flex flex-col gap-2 transition-all duration-300 mt-6 p-3"
                    >
                      <div className="flex gap-2">
                        <Image src={'https://online-static.website.cloud.croc.ru/online-meta/920d201e-b53b-498b-9904-358613d03b9f.png'} height={24} width={24} alt="Loto" />
                        <span>Второй шанс круглый год</span>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li className="hover:text-[#8b3a9a] transition-all duration-300 cursor-pointer">Акции</li>
              <li className="hover:text-[#8b3a9a] transition-all duration-300 cursor-pointer">Победители</li>
            </ul>
          </div>
          {/* Right Section */}
          <div>
            <ul className="text-[#2F41B0] text-[14px] md:text-[16px] font-medium">
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
  )
}