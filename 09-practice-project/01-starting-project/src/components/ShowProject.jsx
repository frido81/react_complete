import Input from './Input.jsx';
export default function ShowProject({project}) {
    return (
        <div className="flex flex-col align-left m-0 p-0">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">Learning React</h1>
        <p className="mb-4 text-stone-400">{project.due}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        <hr/>
        <h1 className="text-3xl font-bold text-stone-600 mb-2">Tasks</h1>
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button className="text-stone-600 hover:text-stone-950">Add task</button>

        <ul className="p-4 mt-8 rounded-md bg-stone-100">

            <li className="flex justify-between my-4">rounded</li>
            <li className="flex justify-between my-4">task two</li>
            <button className="text-stone-700 hover:text-red-500">Clear</button>
        </ul>
        </div>
    )

};