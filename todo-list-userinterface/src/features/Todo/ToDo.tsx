import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTodos } from "./ToDoSlice";
import AddChoreForm from "../../components/AddChoreForm";

const ToDo = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const [isAddChoreVisible, setAddChoreVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleFinishedClick = () => {
    console.log("meow");
  };

  const handleDNFClick = () => {
    console.log("bork");
  };

  const handleDeleteClick = () => {
    console.log("woof");
  };

  const handleAddChoreClick = () => {
    setAddChoreVisible(!isAddChoreVisible);
  };

  if (todos.status === "loading") {
    return <div className='text-center text-gray-500'>LOADING</div>;
  }

  if (todos.status === "failed") {
    return <div className='text-center text-red-500'>Error: {todos.error}</div>;
  }

  return (
    <>
      <br />
      <button
        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2'
        onClick={handleAddChoreClick}
      >
        Add a Chore
      </button>
      <AddChoreForm isVisible={isAddChoreVisible} onClose={handleAddChoreClick} />
      <div>
        <h2 className='text-2xl font-bold text-red-500 mt-8 mb-4'>
          Chores You Need To Do - Hurry It Up!
        </h2>
        <ul className='pl-5 space-y-2 list-none'>
          {todos.todos.map(
            (todo) =>
              !todo.finished && (
                <li
                  key={todo.id}
                  className='bg-white p-4 rounded-md shadow-md border border-gray-200'
                >
                  {todo.todoName}
                  <div className='mt-2 flex space-x-2'>
                    <button
                      className='bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md'
                      onClick={handleFinishedClick}
                    >
                      Finished!
                    </button>
                    <button
                      className='bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md'
                      onClick={handleDeleteClick}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
      <div>
        <h2 className='text-2xl font-bold text-green-500 mt-8 mb-4'>
          Chores You Finished - Good Job!
        </h2>
        <ul className='pl-5 space-y-2 list-none'>
          {todos.todos.map(
            (todo) =>
              todo.finished && (
                <li
                  key={todo.id}
                  className='bg-white p-4 rounded-md shadow-md border border-gray-200'
                >
                  {todo.todoName}
                  <div className='mt-2 flex space-x-2'>
                    <button
                      className='bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md'
                      onClick={handleDNFClick}
                    >
                      Whoops - Didn't finish
                    </button>
                    <button
                      className='bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md'
                      onClick={handleDeleteClick}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

export default ToDo;
