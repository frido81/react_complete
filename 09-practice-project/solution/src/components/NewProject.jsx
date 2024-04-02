import { useRef } from "react";

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.valueb;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      due: enteredDueDate,
    });

    //...validation
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... look like you forot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex flex-col items-center">
          <ul className="flex flex-row items-center gap-4 my-4 justify-end">
            <li>
              <button
                className="text-stone-800 hover:text-stone-950"
                onClick={onCancel}
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              >
                Save
              </button>
            </li>
          </ul>
          <div className="flex flex-col">
            <Input ref={title} label="Title" type="text" />
            <Input ref={description} label="Description" textarea />
            <Input ref={dueDate} label="Due Date" type="date" />
          </div>
        </menu>
      </div>
    </>
  );
}
