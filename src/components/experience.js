import React from 'react';

const Experience = (props) => (
    <div className="text-left flex flex-col justify-center items-start py-5 px-5 md:px-2 mt-5">
        <h2 className="inline block relative italic md:ml-3 pb-3">
            Expériences<span className="underline bg-custom-tertiary"/>
        </h2>
        <div className="my-3 py-2 md:p-3 md:transition-all md:duration-300 md:hover:bg-custom-secondary md:hover:shadow-xl rounded">
            <a
                href="#"
                className="hover:text-accent text-lg md:text-xl">
                <strong className="inline-block mb-2 font-semibold">
                    Technicien CRM/Développeur chez <a href="https://xefi.fr"/>XEFI.
                </strong>
            </a>
        </div>
    </div>
);

export default Experience;