import { useState } from 'react'
import React from 'react';
import './App.css'

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {

    const [deleteConfirmed, setDeleteConfirmed] = React.useState(0)
    const [showConfirmation, setShowConfirmation] = React.useState(0)

    function showConfirmDelete() {
        setShowConfirmation(1);
    }

    if (deleteConfirmed === "cancel") {
        setShowConfirmation(0);
        setDeleteConfirmed(0);
    }

    if (deleteConfirmed === "proceed") {
        setShowConfirmation(1);
        setDeleteConfirmed("Proceeding to delete");
    }

    let deleteProcess = <button onClick={showConfirmDelete}>Delete</button>

    if (showConfirmation === 1) {
        deleteProcess =
            <div data-testid="alert" id="alert">
                <pre>Last choice: {deleteConfirmed}</pre>
                <h2>Are you sure?</h2>
                <p>These changes can't be reverted!</p>
                <button className="proceed" onClick={() => setDeleteConfirmed("proceed")}>Proceed</button>
                <button className="cancel" onClick={() => setDeleteConfirmed("cancel")}>Cancel</button>
            </div>

    }


    return (
        <div>
            {deleteProcess}
        </div>
    );
}