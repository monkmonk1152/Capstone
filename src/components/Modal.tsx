
interface Props
  {
     open:boolean
     onClose: () => void;
  }


const Modal = ( props: Props) => {
  if ( !props.open ) return (<></>);
  return (
    <div 
      onClick={props.onClose} 
      className='fixed w-full h-full flex overflow-auto z-1 justify-center
      align-middle bg-grey-300 bg-opacity-25 '
    >
      <div className="max-w-600px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded "
      
      >
        <div className="w-full flex flex-col" >
          <div className="flex flex-row space-apart ">
            <p className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
             onClick={props.onClose}>
              x
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal