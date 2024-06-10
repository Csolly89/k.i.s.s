import React from 'react';
import Higgins from "../public/Higgins.png"
import Card from '../components/Card';

const projects = [
    {
        Img: Higgins,
        Title: "Higgins Excavation LLC",
        Description: "A Single man excavation company looking for single page application website with SEO strategies and free email service to limit outoing costs to help bring in customers while maintaining low monthly costs.",
        path: "https://higgins-excavation.onrender.com/"
    },
]  


const Projects = () => {
    return (
        <>
            <section className="relative">
                <h1 className="text-textwhite text-center text-4xl mt-10 font-Prompt">Projects</h1>
                <div>
                    {projects.map((item, i) => (
                        <Card key={i} item={item}/>
                    ))}
                </div>
            </section>
        </>
    );
}
export default Projects;

// Create Card for projects to be displayed on