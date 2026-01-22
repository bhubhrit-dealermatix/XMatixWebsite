// app/page.tsx
import './styles/globals.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Domains from '../../components/Domains'
import Why from '../../components/Why'
import How from '../../components/How'
import UseCases from '../../components/UseCases'
import RequestDemo from '../../components/RequestDemo'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white">
      <Header />
      <Hero />
      <Domains />
      <Why />
      <How />
      <UseCases />
      <RequestDemo />
      <Footer />
    </div>
  )
}