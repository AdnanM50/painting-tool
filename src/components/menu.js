"use client";
import { FaFileDownload, FaPencilAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEMS } from "@/costant";
import { actionItemClick, menuItemClick } from "@/lib/menuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  const handleActionItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
  };

  return (
    <div
      className={`absolute px-5 py-1 flex justify-between w-1/4 left-1/2 top-10 rounded-md 
      border border-gray-300 shadow-lg bg-white dark:bg-gray-800 transform -translate-x-1/2 md:w-3/4`}
    >
      <div
        className={`cursor-pointer flex justify-center items-center h-10 w-10 rounded-md 
        ${
          activeMenuItem === MENU_ITEMS.PENCIL
            ? "bg-gray-200 dark:bg-gray-700"
            : "hover:bg-gray-100 dark:hover:bg-gray-600"
        }`}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FaPencilAlt className="icon" />
      </div>

      <div
        className={`cursor-pointer flex justify-center items-center h-10 w-10 rounded-md 
        ${
          activeMenuItem === MENU_ITEMS.ERASER
            ? "bg-gray-200 dark:bg-gray-700"
            : "hover:bg-gray-100 dark:hover:bg-gray-600"
        }`}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <LiaUndoAltSolid className="icon" />
      </div>

      <div
        className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600"
        onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}
      >
        <LiaRedoAltSolid className="icon" />
      </div>

      {/* Redo Icon */}

      <div
        className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600"
        onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}
      >
        <FaPencilAlt className="icon" />
      </div>
      <div
        className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600"
        onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}
      >
        <FaFileDownload className="icon" />
      </div>
    </div>
  );
};

export default Menu;
