import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import SelectMenu from '../../Shared/Components/SelectMenu'
import { MailIcon } from '@heroicons/react/solid'

export default function ModalAddModifyEmployeeForm({
  // Modal Logic
  open,
  cancelButtonRef,
  setOpen,
  // Submit
  handleSubmit,
  // Fields
  countries,
  bands,
  ICAS,
  squads,
  typesOfEmployee,
  isModify,
  first_name,
  setFirst_name,
  last_name,
  setLast_name,
  email,
  setEmail,
  setCountry_id,
  country_selection,
  setCountry_selection,
  setTypeOfEmployee_id,
  typeOfEmployee_selection,
  setTypeOfEmployee_selection,
  setBand_id,
  band_selection,
  setBand_selection,
  setICA_id,
  ICA_selection,
  setICA_selection,
  setSquad_id,
  squad_selection,
  setSquad_selection,
}) {
  const submitButtonLabel = isModify ? 'Modify' : 'Save'

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-50 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <form onSubmit={handleSubmit}>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className=' overflow-visible inline-block align-bottom bg-white dark:bg-black rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6'>
                <div>
                  <div className='mt-3 text-left sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl leading-6 font-semibold text-gray-900 dark:text-white'
                    >
                      Employee Information
                    </Dialog.Title>
                    <div className='mt-10 grid grid-cols-2 gap-10'>
                      <div>
                        <label
                          htmlFor='text'
                          className='block text-sm font-medium text-gray-700 dark:text-white'
                        >
                          First Name(s)
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='first_name'
                            id='first_name'
                            defaultValue={first_name}
                            className='bg-white dark:bg-black text-black dark:text-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            placeholder='First name'
                            onChange={(e) => setFirst_name(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <SelectMenu
                          label='Type of employee'
                          options={typesOfEmployee}
                          selected={typeOfEmployee_selection}
                          onChange={(e) => {
                            setTypeOfEmployee_selection(e)
                            setTypeOfEmployee_id(e.id)
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='text'
                          className='block text-sm font-medium text-gray-700 dark:text-white'
                        >
                          Last Name(s)
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='text'
                            id='Last_name'
                            defaultValue={last_name}
                            className='bg-white dark:bg-black text-black dark:text-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left  focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            placeholder='Last name'
                            onChange={(e) => setLast_name(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <SelectMenu
                          label='Band'
                          options={bands}
                          selected={band_selection}
                          onChange={(e) => {
                            setBand_selection(e)
                            setBand_id(e.id)
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-gray-700 dark:text-white'
                        >
                          Email
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                            <MailIcon
                              className='h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                          </div>
                          <input
                            type='text'
                            name='email'
                            id='Email'
                            defaultValue={email}
                            className='bg-white dark:bg-black text-black dark:text-white focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                            placeholder='examplemail@ibm.com'
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <SelectMenu
                          label='ICA'
                          options={ICAS}
                          selected={ICA_selection}
                          onChange={(e) => {
                            setICA_selection(e)
                            setICA_id(e.id)
                          }}
                        />
                      </div>
                      <div>
                        <SelectMenu
                          label='Country'
                          options={countries}
                          selected={country_selection}
                          onChange={(e) => {
                            setCountry_selection(e)
                            setCountry_id(e.id)
                          }}
                        />
                      </div>
                      <div>
                        <SelectMenu
                          label='Squad'
                          options={squads}
                          selected={squad_selection}
                          onChange={(e) => {
                            setSquad_selection(e)
                            setSquad_id(e.id)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense'>
                  <button
                    type='submit'
                    className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm'
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    {submitButtonLabel}
                  </button>
                  <button
                    type='button'
                    className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-black dark:text-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm'
                    onClick={() => {
                      setOpen(false)
                    }}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </form>
      </Dialog>
    </Transition.Root>
  )
}
