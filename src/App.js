import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { useState } from 'react'
import Backdrop from './components/backdrop/Backdrop'

function App({ children }) {
  const [showSidebar, setShowsidebar] = useState(false)

  return (
    <>
      {showSidebar && (
        <>
          {/* if showSidebar IS TRUE THEN we must apply backdrop filter to it */}
          <Backdrop onClick={() => setShowsidebar(false)} />

          <Sidebar setShowsidebar={setShowsidebar} />
        </>
      )}
      <main>
        <Header setShowsidebar={setShowsidebar} />

        {children}
      </main>
    </>
  )
}

export default App
