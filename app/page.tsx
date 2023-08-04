import Header from "@/components/Header";
import Main from "@/components/Main";
import { metadata } from "./layout";
metadata.title = 'Home'

export default function Home() {
  return (
    <>
    <Header />
    <Main/>
    </>
  )
}
