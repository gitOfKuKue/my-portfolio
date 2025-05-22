import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = ({service}) => {
    const date =new Date();
  return (
    <div className="service-card bg-dark text-font p-10 w-[350px] h-[340px] flex flex-col justify-start items-start rounded-md">
        <FontAwesomeIcon icon={service.icon} className='service-card-icon text-7xl mb-5 text-iconic' />
        <p className='text-sm text-font-light'>{date.getFullYear() - service.experience} yr+ experience of </p>
        <h1 className='text-2xl font-bold'>{service.title}</h1>
        <p className='mt-auto text-font-light'>{service.description}</p>
    </div>
  )
}

export default Services