import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import './blogpost.css';

export default function PostTemplate({ data }) {
    const { markdownRemark } = data;
    const {
        frontmatter: { title, subtitle, date, author },
        html,
        timeToRead,
        excerpt,
    } = markdownRemark;

    return (
        <Layout>
            <SEO title={title} description={excerpt} />
            <div className="blog-post px-2">
                <h1 className="font-light text-4x1 md:text-6x1">{title}</h1>
                <p className="text-custom-text-secondary text-lg md:text-2x1 font-light">
                    {subtitle}
                </p>
                <hr />
                <p className="text-custom-text-secondary">
                    {author}
                    <br />
                    {date}&nbsp;&#10023;&nbsp;{timeToRead} min read
                </p>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
            <Link
                to="/blog"
                className="inline-block hover:bg-accent transition duration-200 ease-out text-accent hover:text-white ml-2 px-2 py-1 border border-solid border-accent rounded-sm">
                &#10229;&nbsp;Retour à la page du blog
            </Link>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "DD MMMM, YYYY")
                path
                title
                subtitle
                author
            }
            timeToRead
            excerpt
        }
    }
`;