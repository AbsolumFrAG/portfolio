import React from 'react';

const Skills = (props) => (
    <div className="text-left flex flex-col justify-center items-start p-5 mt-5">
        <h2 className="inline block relative italic pb-3">
            Compétences<span className="underline bg-bluegreen-300"/>
        </h2>
        <p>
            <strong className="font-semibold">Langages de programmation connus :</strong>{' '}
            C, JavaScript, Shell, Python, Java, PHP/SQL.
        </p>
            <ul>
                <li>
                    <p>
                        <strong className="font-semibold">Front End</strong> - HTML,CSS,
                        Bootstrap, React, TailwindCSS, Redux, Vue.js
                    </p>
                </li>
                <li>
                    <p>
                        <strong className="font-semibold">Back End</strong> - Node.js,
                        Express.js, MySQL
                    </p>
                </li>
            </ul>
            <p>
                <strong className="font-semibold">Bibliothèques utilisées</strong> Phaser.js
            </p>
            <p>
                <strong className="font-semibold">Versioning :</strong> Git & GitHub
            </p>
    </div>
);

export default Skills;