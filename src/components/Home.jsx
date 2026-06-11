import clsx from 'clsx';
import React from 'react'
import { locations } from '../constants';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';
import useWindowStore from '../store/window';
import useLocationStore from '../store/location';

// Ensure GSAP Plugin is registered
import gsap from "gsap";
gsap.registerPlugin(Draggable);

const projects = (locations.work?.children ?? []).filter(
  p => p.name === "CodeReview-AI" || p.name === "Self-Healing-RAG-Pipeline"
);

const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    useGSAP(() => { 
        const instances = Draggable.create(".folder", {
            bounds: "#home", // Keep icons within the desktop
            inertia: true,
            allowEventDefault: true,
            onClick: function() {
                const projectId = parseInt(this.target.getAttribute("data-project-id"));
                const project = projects.find(p => p.id === projectId);
                if (project) {
                    handleOpenProjectFinder(project);
                }
            }
        });

        return () => {
            instances.forEach(instance => instance.kill());
        };
    }, []);

  return (
    <section id="home">
        <ul>
            {projects.map((project) => (
                <li
                    key={project.id}
                    // Combine folder classes with the dynamic position from data
                    // 'folder' is not a tailwind class but useful for GSAP selector
                    className={clsx("group folder font-sf", project.windowPosition)}
                    data-project-id={project.id}
                    onClick={() => handleOpenProjectFinder(project)}
                >
                    <img src="/images/folder.png" alt={project.name} draggable={false} className="pointer-events-none" />
                    <p>{project.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Home