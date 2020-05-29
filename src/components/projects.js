import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
    HTMLTag,
    CSSTag,
    JavaScriptTag,
    ReactTag,
    NodeJSTag,
} from '../util/tags';

export const PureProjects = ({ data }) => (
    <div className="text-left flex flex-col justify-center items-start p-5 mt-5">
        <h2 className="inline-block relative italic pb-3">
            Projets<span className="underline bg-yellow"/>
        </h2>

        <div className="w-full flex flex-wrap justify-around xl:justify-between items-stretch">
            {/* Code Names */}
            <div className="flex flex-col justify-between items-start max-w-sm my-4 rounded overflow-hidden shadow-lg bg-custom-secondary">
                <div>
                    <Img
                        fluid={data.codenames.childImageSharp.fluid}
                        alt="Code Names"
                    />
                    <div className="px-3 pt-4 md:px-6">
                        <div className="font-bold text-xl mb-2">Code Names</div>
                        <p className="text-custom-text-secondary text-sm">
                            Conception, développement et publication du site Web pour Code Names
                        </p>
                    </div>
                    <div className="px-1 pb-2 md:px-4 flex flex-wrap">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/AbsolumFrAG/codenames"
                            className="inline-block bg-bluegreen-600 hover:bg-bluegreen-900 transition duration-200 ease-out text-white px-2 py-1 m-2 rounded-sm">
                            Voir le code source &#8599;
                        </a>
                    </div>
                </div>
                <div className="px-3 py-2 md:px-6">
                    <ReactTag />
                    <CSSTag />
                    <NodeJSTag />
                </div>
            </div>
            {/* Homely Harmony */}

            {/* Time Bomb */}
            <div className="flex flex-col justify-between items-start max-w-sm my-4 rounded overflow-hidden shadow-lg bg-custom-secondary">
                <div>
                    <Img fluid={data.timebomb.childImageSharp.fluid} alt="Time Bomb" />
                    <div className="px-3 pt-4 md:px-6">
                        <div className="font-bold text-xl mb-2">Time Bomb</div>
                        <p className="text-custom-text-secondary text-sm">
                            Une reproduction du jeu de société Time Bomb codé grâce à Java Web & Websockets.
                        </p>
                    </div>
                    <div className="px-1 pb-2 md:px-4 flex flex-wrap">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/AbsolumFrAG/timebomb"
                            className="inline-block bg-bluegreen-600 hover:bg-bluegreen-900 transition duration-200 ease-out text-white px-2 py-1 m-2 rounded-sm">
                            Voir le code source &#8599;
                        </a>
                    </div>
                </div>
                <div className="px-3 py-2 md:px-6">
                    <HTMLTag />
                    <CSSTag />
                    <JavaScriptTag />
                </div>
            </div>
            {/* Time Bomb */}

            {/* Nubium */}
            <div className="flex flex-col justify-between items-start max-w-sm my-4 rounded overflow-hidden shadow-lg bg-custom-secondary">
                <div>
                    <Img fluid={data.nubium.childImageSharp.fluid} alt="Nubium" />
                    <div className="px-3 pt-4 md:px-6">
                        <div className="font-bold text-xl mb-2">Nubium</div>
                        <p className="text-custom-text-secondary text-sm">
                            Un petit jeu de plateforme codé avec{' '}
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://phaser.io/"
                                className="text-accent hover:text-accentHover">
                                Phaser.js
                            </a>{' '}
                        </p>
                    </div>
                    <div className="px-1 pb-2 md:px-4 flex flex-wrap">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://absolumfrag.github.io/Nubium"
                            className="inline-block bg-bluegreen-600 hover:bg-bluegreen-900 transition duration-200 ease-out text-white px-2 py-1 m-2 rounded-sm">
                            Aller sur le site &#8599;
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/AbsolumFrAG/Nubium"
                            className="inline-block bg-bluegreen-600 hover:bg-bluegreen-900 transition duration-200 ease-out text-white px-2 py-1 m-2 rounded-sm">
                            Voir le code source &#8599;
                        </a>
                    </div>
                </div>
                <div className="px-3 py-2 md:px-6">
                    <HTMLTag />
                    <CSSTag />
                    <JavaScriptTag />
                </div>
            </div>
            {/* Nubium */}
        </div>
    </div>
);

const Projects = (props) => {
    const data = useStaticQuery(graphql`
    query {
      codenames: file(relativePath: { eq: "codenames.png" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
      timebomb: file(relativePath: { eq: "timebomb.png" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
      nubium: file(relativePath: { eq: "nubium.png" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);

    return <PureProjects {...props} data={data} />;
};

export default Projects;