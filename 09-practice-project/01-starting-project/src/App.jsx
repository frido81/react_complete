import { useState } from 'react';

const INITIAL_PROJECT = '[]';

function CreateProjectButton({ label, ...props }) {
    return (
        <button {...props} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            {label}
        </button>
    );
}

function InputProject() {
    return <h2>Input project screen</h2>;
}
function App() {
    const [projects, setProjects] = useState([
        {
            id: 0,
            name: '',
            due: 'date',
            tasks: [1, 2, 3],
        },
    ]);
    const [createProject, setCreateProject] = useState(false);

    function toggleCreateProject() {
        setCreateProject((createProject) => (createProject ? setCreateProject(false) : setCreateProject(true)));
    }

    return (
        <>
            <main className="h-screen my-8 flex gap-8">
                <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                    <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
                    <CreateProjectButton onClick={toggleCreateProject} label="+ Add Project" />
                </aside>

                <div className="flex flex-col items-center gap-1 my-4 mx-auto">
                    <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
                    <img className="w-16 h-16 object-contain mx-auto" src="logo.png"></img>
                    <p className="text-stone-700 mb-4">Select a project or get started with a new project</p>
                    {createProject ? (
                        <CreateProjectButton onClick={toggleCreateProject} label="+ Create new project" />
                    ) : (
                        <InputProject />
                    )}
                </div>
            </main>
        </>
    );
}

export default App;
