import React from 'react'

const AddTaskPage = () => {
  return (
    <div className="p-5">
      <form action="" className="p-5 gap-5 bg-slate-100 rounded-lg shadow-sm shadow-sky-100 grid grid-cols-2">
        <h1 className="p-2 text-black font-black col-span-2 text-center text-5xl">Create Your Task</h1>
        <input type="text" className="p-2 rounded-lg col-span-2" />
        <button className="flex items-center justify-center bg-sky-500 p-2 rounded-lg hover:shadow-none cursor-pointer hover:bg-sky-400  shadow-sm shadow-sky-200 text-white col-span-2">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTaskPage
