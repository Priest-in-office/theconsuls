import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Service from "../components/Service";
import Location from "../components/Location";


export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <Grid />
        <Service />
        <Location /> 
      </Layout>
      <Footer />
    </>
  )
}