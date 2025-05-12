



type Props = {
    number: String
    heading: String

}
const Heading = ({number, heading}:Props) => {
  return (
    <div className='flex gap-x-2 text-center'>
        <div className=' font-mono text-amber-400 text-xl font-semibold mt-1.5'>{number}.</div>
        <div className='text-2xl font-bold '>{heading}</div>
    </div>
  )
}

export default Heading