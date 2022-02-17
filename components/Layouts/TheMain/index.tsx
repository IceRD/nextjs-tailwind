import { TheMainProps } from "./TheMain.props"

function TheMain({ children }: TheMainProps): JSX.Element {
  return (
    <>
      <main className="mx-auto h-full max-w-screen-2xl px-5 py-5">{children}</main>
    </>
  )
}

export default TheMain
