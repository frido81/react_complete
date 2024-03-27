import { useState } from 'react';

import Project from './components/Project.jsx';

function CreateProjectButton({ label, ...props }) {
    return (
        <button {...props} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            {label}
        </button>
    );
}

const DEFAULT_PROJECT = {
    id: 0,
    title: '',
    description: '',
    due: '',
    tasks: [],
};

function App() {
    console.log(DEFAULT_PROJECT);
    const [projects, setProjects] = useState([{}]);
    const [createProject, setCreateProject] = useState(false);

    function toggleCreateProject() {
        setCreateProject((createProject) => (createProject ? setCreateProject(false) : setCreateProject(true)));
    }

    function saveProject(project) {
        setProjects((prevProjects) => {
            return [...prevProjects, project];
        });
    }

    return (
        <>
            <main className="h-screen my-8 flex gap-8">
                <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                    <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
                    <CreateProjectButton onClick={toggleCreateProject} label="+ Add Project" />
                    <ul className="mt-8">
                        <li className="text-stone-50 mx-4 my-2">inactive</li>
                    </ul>
                </aside>

                <div className="flex flex-col items-center gap-1 my-4 mx-auto">
                    <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
                    <img className="w-16 h-16 object-contain mx-auto" src="logo.png"></img>
                    <p className="text-stone-700 mb-4">Select a project or get started with a new project</p>
                    {createProject ? (
                        <CreateProjectButton onClick={toggleCreateProject} label="+ Create new project" />
                    ) : (
                        <Project saveHandler={saveProject} project={DEFAULT_PROJECT} />
                    )}
                </div>
            </main>
        </>
    );
}

export default App;