import React, { useTransition, useState } from 'react'
import TabButton from '../components/Tabs'

import Higgins from "../public/Higgins.png"

const projects = [
    {
        Title: 'Higgins',
        id: 'higgins',
        content: (
            <div className=''>
                <a href="https://higgins-excavation.onrender.com/">
                    <h1> Higgins Excavation LLC</h1>
                </a>
                <img src={Higgins} alt="screenshot of Previous jobs" />
                <p> "A Single man excavation company looking for single page application website with SEO strategies and free email service to limit outoing costs to help bring in customers while maintaining low monthly costs."</p>

            </div>
        )
    },
]


const Projects = () => {
    const [tab, setTab] = useState('higgins')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <>
            <section className="relative">
                <h1 className="text-textwhite text-center text-4xl mt-10 font-Prompt">Projects</h1>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange('higgins')} active={tab === 'higgins'}>Icon</TabButton>
                </div>
                <div className='mt-8 '>
                    {projects.find((t) => t.id === tab).content}
                </div>

            </section>
        </>
    );
}
export default Projects;
