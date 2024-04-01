import { useRef, useState } from 'react';

export default function ShowProject({project, taskHandler}) {

    // const [tasks, setTasks] = useState([1,2,3])

    const newTask = useRef();


    function addTask() {
        // setTasks(
            // [...tasks,
            // newTask.current.value]);
        // console.log("tasks", tasks)
        taskHandler(project.id, "add", newTask.current.value)
    }

    return (
        <div className="flex flex-col w-4/5 align-left m-0 p-0">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
        <p className="mb-4 text-stone-400">{project.due}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        <hr/>
        <h1 className="text-3xl font-bold text-stone-600 mb-2">Tasks</h1>

        <div className="flex justify-between">
            <input ref={newTask} type="text" className="w-full px-2 py-1 rounded-sm bg-stone-200" />
            <button onClick={addTask} className="text-stone-600 hover:text-stone-950 w-24">Add task</button>
        </div>
        <pre>
            {project.tasks}
        </pre>


        <ul className="p-4 mt-8 rounded-md bg-stone-100">

            {project.tasks.map((task, index) => (

            <div key={index} className="flex justify-between">
                <li className="flex my-4">{index}-{task}</li>
                <button className="text-stone-700 hover:text-red-500">Clear</button>
            </div>

            )
            )}

        </ul>
        </div>
    )

};