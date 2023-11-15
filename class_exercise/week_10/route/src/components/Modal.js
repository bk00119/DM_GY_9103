import ReactDOM from "react-dom"
import { useEffect } from "react"

export default function Modal({ children, actionBar, onClose }){
  useEffect(()=>{
    // disable scrolling when the modal is open
    document.body.classList.add('overflow-hidden')

    // remove the overflow-hidden when the modal component is destroyed
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  },[])

  // return (
  //   <div>
  //     <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-50" />
  //     <div className="absolute inset-40 p-10 bg-white">Content</div>
  //   </div>
  // )

  //to avoid having css issues caused by parents/grandparent's 'relative' or any other attributes that would cause an issue
  // ReactDOM.createPortal({component you wish to render inside the createPortal}, {The element to serve as the Portal.})
  return ReactDOM.createPortal(
    <div>
      {/* Overlay */}
      <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-50" />

      {/* Modal Content */}
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">{children}</div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.getElementById('modalContainer')) //from index.html
}