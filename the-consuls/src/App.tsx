import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import Hero from './components/Hero'
import Grid from './components/Grid'
import Service from './components/Service'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Layout>
        <Hero />
        <Grid />
        <Service />
        <Location /> 
      </Layout>
      <Footer />
    </div>
  )
}

export default App
