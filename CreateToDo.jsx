import { useState } from "react";

const CreateToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title);
  const handleCreate = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="bg-zinc-300 w-[50%] m-10 rounded-lg p-10">
      <h1 className="text-3xl font-bold underline ">Create a TODO</h1>
      <div className="flex">
        <input
        required
          onChange={(e) => setTitle(e.target.value)}
          className="m-10 border-2 rounded-md border-black p-3"
          type="text"
          placeholder="Title"
        />
        <input
        required
          onChange={(e) => setDescription(e.target.value)}
          className="m-10 border-2 rounded-md border-black p-3"
          type="text"
          placeholder="Description"
        />
      </div>
      <button
        
        onClick={() => {
          handleCreate();
          alert("TODO added successfully");
        }}
        className="m-10 p-2 font-bold font-serif bg-green-500 rounded-md hover:bg-purple-400"
      >
        Add a TODO
      </button>
    </div>
  );
};

export default CreateToDo;
