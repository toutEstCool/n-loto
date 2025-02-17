import { useMenuVisibility } from '@/features/header';
import { BurgerMenu } from '@/widgets/burger-menu';
import { Container } from '@/widgets/container';
import Image from 'next/image';
import Link from 'next/link';

export const LowerHeader = () => {
  const { isVisible, toggleVisibility } = useMenuVisibility();

  return (
    <div className="bg-[#FFFFFF] py-1">
      <Container className="h-[32px] sm:h-[50px]">
        <div className="flex items-center justify-between h-[100%]">
          {/* Left Section */}
          <div className="flex items-center gap-8">
            <div className="xl:hidden">
              {/* <Burger /> */}
              <BurgerMenu />
            </div>
            <Link href="/">
              <div className="mr-8">
                <Image
                  src={'/logo.svg'}
                  alt="Logo"
                  width={150}
                  height={40}
                  sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '110px',
                    maxHeight: '40px',
                  }}
                />
              </div>
            </Link>
            <ul className="hidden xl:flex items-center gap-8 text-[#2F41B0] text-[16px] font-medium">
              <li>
                <div className="w-full relative ml-6">
                  {/* Кнопка */}
                  <button
                    className="border-t-[1px] border-b-[1px] border-[#8b3a9a] text-[#8b3a9a] font-black"
                    onClick={toggleVisibility}
                  >
                    Второй шанс
                  </button>

                  {/* Блок, который появляется под кнопкой */}
                  {isVisible && (
                    <div className="absolute z-50 top-full left-0 w-[340px]  bg-[#fff] shadow-lg rounded-md flex flex-col gap-2 transition-all duration-300 mt-6 p-3">
                      <div className="flex gap-2">
                        <Image
                          src={
                            'https://online-static.website.cloud.croc.ru/online-meta/920d201e-b53b-498b-9904-358613d03b9f.png'
                          }
                          height={24}
                          width={24}
                          alt="Loto"
                        />
                        <span>Второй шанс круглый год</span>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li className="hover:text-[#8b3a9a] transition-all duration-300 cursor-pointer text-[20px] font-HavalMittel-regular">
                <Link href={'/special'}>Акции</Link>
              </li>
              <li className="hover:text-[#8b3a9a] transition-all duration-300 cursor-pointer text-[20px] font-HavalMittel-regular">
                <Link href={'/winnings'}>Победители</Link>
              </li>
            </ul>
          </div>
          {/* Right Section */}
          <div>
            <ul className="text-[#2F41B0] font-HavalMittel-regular text-[14px] md:text-[16px] font-medium">
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
  );
};
