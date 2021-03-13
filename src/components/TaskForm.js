import React, { useState } from "react";
import { FiPlusCircle as Icon } from "react-icons/fi";
import useForm from "../utils/useForm";

function TaskForm() {
  const [loading, setLoading] = useState(false);
  const { values, updateValue } = useForm({
    title: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    console.log(values.title);
    setLoading(false);
  }

  return (
    <div className="p-6 mb-6 bg-gray-100 rounded shadow-lg">
      <h1 className="flex items-center gap-3 text-xl font-bold">
        <Icon />
        NEW TASK
      </h1>

      <hr className="my-4" />

      <form onSubmit={handleSubmit}>
        <fieldset disabled={loading}>
          <label htmlFor="title" className="font-semibold text-grey-700">
            What do you need to do?
          </label>
          <textarea
            className="w-full h-40 p-3 mt-2 mb-4 text-lg text-gray-800 bg-gray-400"
            id="title"
            name="title"
            value={values.title}
            onChange={updateValue}
          ></textarea>
        </fieldset>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-3 text-lg font-bold text-white uppercase bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
