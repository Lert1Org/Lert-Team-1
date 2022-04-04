import graphicsIcon from '../assets/icons/graphicsIcon.png'

function LandingPage() {
  return (
    <div className='flex flex-col h-full mt-14 mx-4 sm:m-10 sm:mt-28 sm:text-left text-center'>
      <div className='sm:text-5xl text-4xl font-bold whitespace-nowrap'>
        <p>Data to enrich</p>
        <p className='text-blue-700'>your finance</p>
      </div>
      <p className='text-gray-500 text-md sm:text-xl mt-6'>
        LERT - labor expenses recovery tool is an aid in the finances of the
        manager, it manages squad, employees and create the fall plan planning
        expenses and financial recoveries.
      </p>
      <div className='sm:flex space-x-4 mt-6 sm:text-lg whitespace-nowrap text-center'>
        <button className='bg-blue-600 rounded p-2 sm:px-8 px-4 text-white'>
          Get started
        </button>
        <button className='bg-blue-200 rounded p-2 sm:px-8 px-4 text-blue-600'>
          Live demo
        </button>
      </div>
      <div className='flex sm:justify-end justify-center mt-5'>
        <img
          src={graphicsIcon}
          alt='GraphicsIcon'
          className='sm:w-72 sm:h-72'
        ></img>
      </div>
    </div>
  )
}

export default LandingPage
