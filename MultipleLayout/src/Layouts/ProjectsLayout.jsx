import React from 'react';
import { Outlet } from 'react-router';

const ProjectsLayout = () => {
    return (
        <div>
            <header className= 'text-center bg-black text-white'>Project LayOut header</header>

            <main className='py-28 text-center bg-slate-100'>
                <Outlet/>
            </main>
        </div>
    );
};

export default ProjectsLayout;