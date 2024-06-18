import React, { useTransition, useState } from 'react'
import TabButton from '../components/Tabs'

import Higgins from "../public/Higgins.png"

const projects = [
    {
        Title: 'Higgins',
        id: 'higgins',
        content: (
            <div className='w-full h-[55dvh]'>
                    <h1 className="text-center text-3xl font-Hind underline underline-offset-8" > Higgins Excavation LLC</h1>
                <div className='flex m-5 pb-10 md:mt-5 mt-20'>
                    <img className='w-[45vw] object-cover rounded-xl border-2 border-slate-800 mr-2' src={Higgins} alt="screenshot of Previous jobs" />
                    <div className='flex-col content-center gap-2'>
                        <p className=''> "A Single man excavation company looking for single page application website with SEO strategies and free email service to limit outoing costs to help bring in customers while maintaining low monthly costs."</p>
                        <a className=" font-Hind underline underline-offset-8 " href="https://higgins-excavation.onrender.com/">
                            <h3> Live site</h3>
                        </a>
                    </div>
                </div>

            </div>
        )
    },
    {
        Title: 'Project 2',
        id: 'project2',
        content: (
            <div className='w-full h-[55dvh] flex justify-center items-center'>
                <h1 className="xl:text-9xl text-6xl font-Lora">Coming Soon</h1>
            </div>
        )
    },
    {
        Title: 'Project 3',
        id: 'project3',
        content: (
            <div className='w-full h-[55dvh] flex justify-center items-center'>
                <h1 className="xl:text-9xl text-6xl font-Lora">Coming Soon</h1>
            </div>
        )
    },
    {
        Title: 'Project 4',
        id: 'project4',
        content: (
            <div className='w-full h-[55dvh] flex justify-center items-center'>
                <h1 className="xl:text-9xl text-6xl font-Lora">Coming Soon</h1>
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
            <section className="bg-background text-text h-[80%]">
                <h1 className=" text-center text-4xl mt-10 font-Lora">Projects</h1>
                <div className='flex flex-row justify-center text-2xl gap-8 mt-2'>
                    <TabButton selectTab={() => handleTabChange('higgins')} active={tab === 'higgins'}>1</TabButton>
                    <TabButton selectTab={() => handleTabChange('project2')} active={tab === 'project2'}>2</TabButton>
                    <TabButton selectTab={() => handleTabChange('project3')} active={tab === 'project3'}>3</TabButton>
                    <TabButton selectTab={() => handleTabChange('project4')} active={tab === 'project4'}>4</TabButton>
                </div>
                <div className='mt-8 '>
                    {projects.find((t) => t.id === tab).content}
                </div>

            </section>
        </>
    );
}
export default Projects;
