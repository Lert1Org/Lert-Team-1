import graphicsIcon from '../../assets/icons/graphicsIcon.png'
import LiveDemo from './Components/LiveDemo'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Footer from './Components/Footer'
import DarkMode from './Components/DarkMode'

function LandingPage() {
  const { auth } = useAuth()
  const navigate = useNavigate()

  let route = ''
  switch (auth.role) {
    case 0:
      route = '/manager/home'
      break
    case 1:
      route = '/OPSManager/home'
      break
    case 2:
      route = '/admin/home'
      break
  }

  const navigateToPage = () => {
    navigate(route, { replace: true })
  }

  return (
    <div className='relative w-full'>
      <main className='lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-10 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <p>Data to enrich</p>
              <p className='text-blue-700 dark:text-blue-400'>your finance</p>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl dark:text-gray-300 md:mt-5 md:max-w-3xl'>
              LERT - labor expenses recovery tool is an aid in the finances of
              the manager, it manages squad, employees and create the fall plan
              planning expenses and financial recoveries.
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <button
                  onClick={navigateToPage}
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white dark:text-gray-200 bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'
                >
                  Get started
                </button>
              </div>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <LiveDemo/>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full h-80 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 w-full h-full object-contain'
            src={graphicsIcon}
            alt=''
          />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default LandingPage
