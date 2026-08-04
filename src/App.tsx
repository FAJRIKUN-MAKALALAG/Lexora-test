import Hero from "./components/Hero"
import WhatWeDo from "./components/WhatWeDo"
import Anniversary from "./components/Anniversary"   
import LegalSupport from "./components/LegalSupport"
import MediaPress from "./components/MediaPress"
import Footer from "./components/Footer"
import NavigationMenu from "./components/NavigationMenu"



function App() {
  return (
    <div className="min-h-screen">
      <NavigationMenu />
      <Hero />
      <WhatWeDo />
      <Anniversary />    
      <LegalSupport />  
      <MediaPress />    
      <Footer />
    </div>

  )
}

export default App



