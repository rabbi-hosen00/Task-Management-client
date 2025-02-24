import React, { useState } from 'react';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    timestamp: '',
    category: '',
  });
  
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Task added successfully:", result);

        // Reset the form and show confirmation modal
        setTask({
          title: "",
          description: "",
          timestamp: "",
          category: "",
        });
        setShowModal(true);
      } else {
        console.error("Failed to add task:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-16">
      <h2 className="text-2xl font-semibold mb-4">Add Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <table className="min-w-full border border-gray-300">
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={task.title}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <textarea
                  id="description"
                  name="description"
                  value={task.description}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                <label htmlFor="timestamp" className="block text-sm font-medium text-gray-700">
                  Timestamp
                </label>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input
                  type="datetime-local"
                  id="timestamp"
                  name="timestamp"
                  value={task.timestamp}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <select
                  id="category"
                  name="category"
                  value={task.category}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Category</option>
                  <option value="Work">To-Do
</option>
                  <option value="Personal">In Progress</option>
                  <option value="Urgent">Done</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Task
          </button>
        </div>
      </form>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Task Added Successfully!</h3>
            <p className="mt-2">Your task has been added to the list.</p>
            <div className="mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
