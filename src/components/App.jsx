import SideMenu from './SideMenu'
import LandingPage from './LandingPage'
import ManagerCard from './ManagerCard'

function App() {
  return (
    <div className='bg-slate-100 h-max'>
      <div className='flex'>
        <div className='h-screen'>
          <SideMenu />
        </div>
        <LandingPage />
        
      </div>
      <ManagerCard/>
    </div>

   
  )
}

export default App
