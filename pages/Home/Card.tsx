





import plane from "./images/plane.jpg"
import house from "./images/house.jpg"


const Card = () => {
  return (
    <div className='mx-auto'>
        <img src={plane} alt="plane_img"  
        className='rounded-md w-3/4 ml-20 md:ml-30 hover:scale-110 duration-400'/>
        <img src={house} alt="house_img" 
         className='rounded-md w-3/4 ml-5 md:ml-10'/>
       </div>
  )
}

export default Card