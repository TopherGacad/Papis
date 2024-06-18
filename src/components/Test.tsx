import { useEffect, useState } from "react";

function Todo({ todoData, number }: { todoData: any; number: number }) {
  return (
    <div className="border border-gray-400 rounded-lg py-2 px-4">
      <div className="flex items-center gap-2">
        <p className="text-xl font-bold text-blue-950 p-3">{number}</p>
        <div className="flex flex-col gap-1">
          <h3 className="text-blue-900">{todoData?.title}</h3>
          <p>
            <span className="">status: </span>
            {todoData?.completed ? (
              <span className=" text-green-500">Completed</span>
            ) : (
              <span className=" text-orange-500">pending</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Test() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccessful, setIsSuccesful] = useState(true);
  const [isError, setIsError] = useState(true);
  const [error, setError] = useState<any>();
  const [success, setSuccess] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );

        const todos = await response.json();
        setTodos(todos);
      } catch (err) {
        setIsError(true);
        setError(err);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="container-md">
      <h1 className="uppercase my-3">Todos</h1>
      {/* <h1>Loadingg....</h1> */}
      <div className="flex flex-col gap-2">
        {todos &&
          todos.length > 0 &&
          todos.map((todo, index) => (
            <Todo todoData={todo} number={index + 1} />
          ))}
      </div>
      <p>{success}</p>
      <p>{error}</p>
    </div>
  );
}

// Axios, React-query
