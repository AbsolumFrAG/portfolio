import React from 'react';
import { Link } from 'gatsby';
import Spinner from './spinner';

const Contact = (props) => {
    const [status, setStatus] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const submitForm = (ev) => {
        ev.preventDefault();
        setIsLoading(true);
        const form = ev.target;
        const data = new FormData(form);
        if (
            data.get('name') === '' ||
            data.get('email') === '' ||
            data.get('message') === ''
        ) {
            setIsLoading(false);
            return setStatus('FORMERROR');
        }
        const xhr= new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setIsLoading(false);
                setStatus('SUCCESS');
            } else {
                setIsLoading(false);
                setStatus('ERROR');
            }
        };
        xhr.send(data);
    };

    return (
        <div className="text-left flex flex-col justify-center items-start p-5 mt-5">
            <h2 className="inline block relative italic pb-3">
                Me Contacter<span className="underline bg-bluegreen-900"></span>
            </h2>
            <form
                className="w-full"
                onSubmit={submitForm}
                action="https://formspree.io/xayddynj"
                method="POST">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-name">
                            Nom
                        </label>
                        <input
                            className="appearance-none block w-full bg-transparent text-custom-text border border-accent rounded p-3 mb-3 leading-tight focus:outline-accent focus:bg-translucentGrey"
                            id="grid-name"
                            type="text"
                            name="name"
                            placeholder="ex: Lou Tigroudja"
                            />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-email">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-transparent text-custom-text border border-accent rounded p-3 mb-3 leading-tight focus:outline-accent focus:bg-translucentGrey"
                            id="grid-email"
                            type="text"
                            name="email"
                            placeholder="ex: lou.tigroudja07@gmail.com"
                            />
                    </div>
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-message">
                            Message
                        </label>
                        <textarea
                            className="appearance-none block w-full bg-transparent text-custom-text border border-accent rounded p-3 mb-3 leading-tight focus:outline-accent focus:bg-translucentGrey"
                            name="message"
                            id="grid-message"
                            placeholder="Écrivez votre message ici..."
                            rows="8"></textarea>
                    </div>
                </div>
                {status === 'SUCCESS' && (
                    <p className="text-green-600 font-semibold">
                        Message envoyé avec succès !
                    </p>
                )}
                {status === 'FORMERROR' && (
                    <p className="text-red-600 font-semibold">
                        Les champs du formulaire ne peuvent pas être vides !
                    </p>
                )}
                {status === 'ERROR' && (
                    <p className="text-red-600 font-semibold">
                        Une erreur est survenue pendant l'envoi du message. Veuillez réessayer.
                    </p>
                )}
                <button
                    type="submit"
                    className="flex hover:bg-accent transition duration-200 ease-out text-accent hover:text-white px-4 py-2 mr-2 border border-solid border-accent rounded-sm">
                    Envoyer
                    {isLoading && (
                        <>
                            &nbsp;&nbsp;&nbsp;
                            <Spinner />
                        </>
                    )}
                </button>
            </form>
            <br />
            <Link
                to="/blog"
                className="mt-3 inline-block text-accent hover:text-accentHover">
                Allez voir mon blog &#10141; !
            </Link>
        </div>
    );
};

export default Contact;