import { useState } from 'react';

import NewProject from './components/NewProject.jsx';
import ShowProject from './components/ShowProject.jsx';

function CreateProjectButton({ label, ...props }) {
    return (
        <button {...props} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            {label}
        </button>
    );
}

function DisplaySelectProject() {
    return (
        <>
            <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
            <img className="w-16 h-16 object-contain mx-auto" src="logo.png"></img>
            <p className="text-stone-700 mb-4">Select a project or get started with a new project</p>
        </>
    )

}

const DEFAULT_PROJECT = {
    id: 0,
    title: '',
    description: '',
    due: '',
    tasks: [],
};


function App() {
    const [projects, setProjects] = useState([{}]);
    const [createProject, setCreateProject] = useState(false);
    const [selectedProject, setSelectedProject] = useState();

    let mainWindow = "";

    function saveProject(project) {
        setProjects((prevProjects) => {
            return [...prevProjects, project];
        });
        setCreateProject(false);
        setSelectedProject()
    }

    function taskHandler(id, command, task) {
        console.log("adding task", id, command, task)
        let index=projects.findIndex(o => o.id === id)
        if (command === "add") {
            projects[index].tasks.push(task);
            console.log(projects[index]);
            setSelectedProject((prevProject) => {
                    return projects[index]
                }
            )
            setProjects(projects);
        }


    }


    if (selectedProject) {
        mainWindow = <ShowProject project={selectedProject} allprojects={projects} taskHandler={taskHandler}/>;
    } else {
        mainWindow =
        <>
            <DisplaySelectProject debug={selectedProject}/>
            <CreateProjectButton onClick={()=> {setCreateProject(true)}} label="+ Create new project" />
        </>
    }

    if (createProject) {
        mainWindow = <NewProject saveHandler={saveProject} project={DEFAULT_PROJECT} />;
    }

    return (
        <>
            <main className="h-screen my-8 flex gap-8">
                <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                    <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
                    <CreateProjectButton onClick={() => {setCreateProject(true)}} label="+ Add Project" />
                    <ul className="mt-8">
                        {projects.map((project) => (
                            <li key={project.id} onClick={() => {setSelectedProject(project)}}className="text-stone-50 mx-4 my-2 underline cursor-pointer">
                                {project.title}
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="flex flex-col basis-2/3 items-center gap-1 my-4 p-4">
                    {mainWindow}
               </div>
            </main>
        </>
    );
}

export default App;
