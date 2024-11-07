const Todos = ({ todos }) => {
    return (
      <div className="p-4">
        {todos.map((todo, index) => (
          <div key={index} className=" shadow-md rounded-lg p-4 mb-4">
            <h1 className="text-xl font-bold">{todo.title}</h1>
            <h2 className="text-gray-600">{todo.description}</h2>
            <button
              className={`mt-2 px-4 py-2 rounded-full ${
                todo.completed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}
            >
              {todo.completed ? "Completed" : "Not Completed"}
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Todos;
  