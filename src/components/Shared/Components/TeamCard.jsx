import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { PencilAltIcon } from '@heroicons/react/outline'
import DeleteModal from './DeleteModal'

export default function TeamCard({
  employee,
  setOpenTeamAdd,
  handleDeleteEmployee,
  setModify_id,
  setModify_employee,
  setOpenEmployeeRecovery,
}) {
  return (
    <Card
      sx={{ borderRadius: 3 }}
      variant='outlined'
      className='m-6 pt-1 relative shadow-lg overflow-visible bg-white dark:bg-black'
      key={employee.id}
    >
      <div className='flex justify-between'>
        <div className='text-left pl-6 pt-2'>
          <h4 className='font-bold text-lg text-black dark:text-white'>
            {employee.first_name + ' ' + employee.last_name}
          </h4>
          <p className='text-gray-500 text-sm'>{employee.email}</p>
          <p className='text-gray-400 dark:text-gray-700 text-xs pt-5'>
            Modify band/status
          </p>
        </div>
        <div className='p-2'>
          <button>
            <PencilAltIcon
              className='h-6 w-6 text-blue-400 hover:text-blue-500 active:text-blue-600 mr-1'
              onClick={() => {
                setModify_id(employee.id)
                setModify_employee(employee)
                setOpenTeamAdd(true)
              }}
            />
          </button>
          <DeleteModal
            isIcon
            handleDelete={() => handleDeleteEmployee(employee.id)}
          />
        </div>
      </div>

      <CardActions>
        <Button
          variant='contained'
          sx={{
            borderRadius: 2,
            px: 8,
            py: 0.1,
            mx: 5,
            textTransform: 'capitalize',
            fontWeight: 700,
            fontSize: 18,
            mb: 2,
            boxShadow: 3,
            whiteSpace: 'nowrap',
          }}
          onClick={() => {
            setModify_id(employee.id)
            setModify_employee(employee)
            setOpenEmployeeRecovery(true)
          }}
        >
          {employee.band_name}
        </Button>
      </CardActions>
    </Card>
  )
}
