"use client"
import React, { useEffect, useState } from 'react';
import projects from '../data';
import ShowProject from './ShowProject';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const uri = "https://api.github.com/users/sharmashubam/repos";
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(uri);
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            {repos.map((repo) => (
                <ShowProject key={repo.id} repo={repo}/>
            ))}
        </div>
    );
};

export default Projects;