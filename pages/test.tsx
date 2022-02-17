import type { NextPage, GetStaticProps } from "next"
import Image from "next/image"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { defaultLocale } from "~/locales/config"
import { useTranslation } from "next-i18next"
import { Typography, Button } from "UI"
import { IconWhatsApp } from "UI/Icons"

const TheHeader = (props: any): JSX.Element => {
  console.log(props)

  return <div>{props.children}</div>
}

const TheHeaderTop = (props: any) => {
  return <div>{props.children || "TheHeaderTop"}</div>
}

const TheHeaderMiddle = (props: any) => {
  return <div>{props.children || "TheHeaderMiddle"} </div>
}

const TheHeaderBottom = (props: any) => {
  return <div>{props.children || "TheHeaderBottom"} </div>
}

TheHeader.Top = TheHeaderTop
TheHeader.Middle = TheHeaderMiddle
TheHeader.Bottom = TheHeaderBottom

const Test: NextPage = () => {
  const { t } = useTranslation("common")

  return (
    <>
      <TheHeader>
        <TheHeader.Top> Top </TheHeader.Top>
        <TheHeader.Middle />
        <TheHeader.Bottom />
      </TheHeader>

      <div>
        <Typography variant="h1" className="font-bold">
          h1. Heading
        </Typography>
        <Typography variant="h2">h2. Heading </Typography>
        <Typography variant="h3">h3. Heading </Typography>
        <Typography variant="h4">h4. Heading </Typography>
        <Typography variant="h5">h5. Heading </Typography>

        <hr className="my-4" />

        <Button size="xs" variant="outlined">
          Button xs
        </Button>
        <Button size="sm" variant="outlined">
          Button sm
        </Button>
        <Button variant="outlined">Button md</Button>
        <Button size="lg" variant="outlined">
          Button lg
        </Button>
        <Button size="xl" variant="outlined">
          Button xl
        </Button>

        <Button variant="outlined">
          <IconWhatsApp width={18} height={18} />
        </Button>
        <Button block variant="outlined">
          Button block
        </Button>

        <Button startIcon={<IconWhatsApp />} endIcon={<IconWhatsApp />} variant="outlined">
          Написать нам
        </Button>

        <hr className="my-4" />

        <Button size="xs">Button xs</Button>
        <Button size="sm">Button sm</Button>
        <Button>Button md</Button>
        <Button size="lg">Button lg</Button>
        <Button size="xl">Button xl</Button>

        <Button>
          <IconWhatsApp width={18} height={18} />
        </Button>
        <Button block>Button block</Button>

        <Button startIcon={<IconWhatsApp />} endIcon={<IconWhatsApp />}>
          Написать нам
        </Button>

        <hr className="my-4" />

        <Button size="xs" variant="text">
          Button xs
        </Button>
        <Button size="sm" variant="text">
          Button sm
        </Button>
        <Button variant="text">Button md</Button>
        <Button size="lg" variant="text">
          Button lg
        </Button>
        <Button size="xl" variant="text">
          Button xl
        </Button>

        <Button variant="text">
          <IconWhatsApp width={18} height={18} />
        </Button>
        <Button block variant="text">
          Button block
        </Button>

        <Button startIcon={<IconWhatsApp />} endIcon={<IconWhatsApp />} variant="text">
          Написать нам
        </Button>

        <hr className="my-4" />

        <IconWhatsApp />
        <IconWhatsApp width={10} height={10} />
        <IconWhatsApp width={30} height={30} />
        <IconWhatsApp width={50} height={50} />
        <IconWhatsApp width={100} height={100} />

        <hr className="my-4" />

        <Image src="/images/logo/logo-header-w.svg" alt="logo" width="172" height="28" />
      </div>

      <div className="text-base font-bold">{t("h1")}</div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale || defaultLocale
  return {
    props: {
      ...(await serverSideTranslations(lang, ["common"])),
    },
  }
}

export default Test
