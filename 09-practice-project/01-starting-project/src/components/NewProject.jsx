import Button from './Button.jsx';
import Input from './Input.jsx';

import { useState, useRef } from 'react';

import { v4 as uuidv4 } from 'uuid';

export default function NewProject({ project, saveHandler }) {
    const title = useRef();
    const description = useRef();
    const due = useRef();

    function testRef() {
        saveHandler({
            id: uuidv4(),
            title: title.current.value,
            description: description.current.value,
            due: due.current.value,
            tasks: [],
        });
    }

    return (
        <>
            <div className="flex flex-row justify-end">
                <Button label="cancel" className="px-6 py-2 rounded-md text-stone-800 hover:bg-stone-400" />
                <Button
                    label="save"
                    onClick={testRef}
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-500"
                />
            </div>
            <div className="flex flex-col">

                <div className="flex flex-col">
                    <Input ref={title} label="title" type="text" defaultValue={project.title} />
                    <Input ref={description} label="description" type="text" defaultValue={project.description} />
                    <Input ref={due} label="due" type="date" defaultValue={project.due} />

                    <input type="text" />
                </div>
            </div>
        </>
    );
}
