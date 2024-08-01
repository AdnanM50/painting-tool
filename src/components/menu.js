import { FaFileDownload, FaPencilAlt } from "react-icons/fa";
import { LiaRedoAltSolid, LiaUndoAltSolid } from "react-icons/lia";


const Menu = () => {
  return (
    <div className="flex justify-between w-1/2 rounded-md absolute left-1/2 top-10 px-5 py-1 border border-border1 -translate-x-2/4 shadow bg-background1">
      <div className="icon-wraper">
      <FaPencilAlt className="icon" />
      </div>
      <div className="icon-wraper">
      <LiaUndoAltSolid className="icon" />
      </div>
      <div className="icon-wraper">
      <LiaRedoAltSolid className="icon" />
      </div>
      <div className="icon-wraper">
      <FaPencilAlt className="icon" />
      </div>
      <div className="icon-wraper">
      <FaFileDownload className="icon" />
      </div>
    </div>
  )
}

export default Menu
