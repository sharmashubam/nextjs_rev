import React from 'react';
const ShowProject = (props)=>{
    return(
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-2">{props.repo.id}</h2>
            <p className="mb-4">{props.repo.description}</p>
            <img src={props.repo.imageUrl} alt={props.repo.title} className="w-48 h-48 object-cover rounded-lg" />
            <p>Clone URL: {props.repo.clone_url}</p>
            <p>Created At: {props.repo.created_at}</p>
            <p>Default Branch: {props.repo.default_branch}</p>
        </div>
    )
}

export default ShowProject;