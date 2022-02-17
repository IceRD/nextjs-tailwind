import Image from "next/image"
import Link from "next/link"
import { Button, Typography } from "UI"
import { IconWhatsApp } from "UI/Icons"

const TheFooter = () => {
  return (
    <footer className="bg-footer text-gray">
      <div className="mx-auto max-w-screen-2xl px-7 pt-5 lg:pt-10">
        <div className="flex w-full flex-col flex-wrap items-center lg:flex-row lg:items-start">
          <div className="mb-9 lg:w-5/12">
            <div className="flex justify-center lg:justify-start">
              <Image src="/images/logo/logo-header-w.svg" alt="logo" width="172" height="28" />
            </div>
            <div className="hidden lg:block">
              <Typography className="my-7 max-w-xs leading-7 lg:my-9">
                Единый маркетплейс для производителей, продавцов и покупателей частных клиник
                сокращаем время на поиск и заказ оборудования и материалов
              </Typography>
            </div>
            <Link href="/" prefetch={false}>
              <a className="hidden font-serif text-base transition duration-150 ease-out hover:text-white hover:ease-in lg:block">
                Карта сайта
              </a>
            </Link>
          </div>

          <div className="flex justify-center lg:w-4/12 lg:justify-start">
            <div className="flex max-w-xs flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative flex items-center space-x-3 ">
                <Image src="/images/design/phone-icon.svg" alt="logo" width="32" height="32" />
                <a
                  href="tel:88004434223"
                  className="break-all font-serif text-3xl font-bold text-white"
                >
                  8 800 443 42 23
                </a>
              </div>
              <Typography className="mb-8 lg:ml-11">Прием звонков: 9:00 - 17:00</Typography>
              <Typography className="mb-5 lg:ml-11">
                позвоните нам по номеру указанному выше или напишите нам:
              </Typography>
              <div className="flex flex-row space-x-2 pb-5 lg:ml-11">
                <Button>WhatsApp</Button>
                <Button startIcon={<IconWhatsApp />}>Написать нам</Button>
              </div>
            </div>
          </div>

          <div className="hidden w-3/12 lg:block">
            <Typography className="mb-7 font-bold text-white">Информация</Typography>
            <div className="flex flex-col leading-7">
              <Link href="/" prefetch={false}>
                <a className="font-serif text-base transition duration-150 ease-out hover:text-white hover:ease-in ">
                  О маркете
                </a>
              </Link>
              <Link href="/" prefetch={false}>
                <a className="font-serif text-base transition duration-150 ease-out hover:text-white hover:ease-in">
                  Контакты
                </a>
              </Link>
              <Link href="/" prefetch={false}>
                <a className="font-serif text-base transition duration-150 ease-out hover:text-white hover:ease-in">
                  Политика конфиденциальности
                </a>
              </Link>
              <Link href="/" prefetch={false}>
                <a className="font-serif text-base transition duration-150 ease-out hover:text-white hover:ease-in">
                  Пользовательское соглашение
                </a>
              </Link>
              <Link href="/" prefetch={false}>
                <a className="font-serif text-base transition duration-150 ease-out hover:text-white hover:ease-in ">
                  Продавать на Business Hunter
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl border-t border-gray-dark px-7 py-5 ">
        {/* <div className="flex w-full flex-wrap font-serif text-sm flex-col items-center lg:flex-row lg:items-start"> */}
        <div className="flex w-full grow flex-col items-center items-center lg:flex-row">
          <Typography variant="subtitle" className="pb-2 lg:order-2 lg:w-4/12 lg:pl-11 lg:pb-0">
            Соглашение о конфиденциальности
          </Typography>
          <Typography variant="subtitle" className="pb-4 lg:order-3 lg:w-3/12 lg:pb-0">
            Пользовательское соглашение
          </Typography>
          <Typography variant="subtitle" className="lg:order-1 lg:w-5/12">
            2021 - {new Date().getFullYear()} BH. Все права защищены ИНН 1615014120. Все права
            защищены.
          </Typography>
        </div>
      </div>
    </footer>
  )
}

export default TheFooter
