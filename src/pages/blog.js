import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo'

const BlogPage = ({ data }) => {
    const {
        allMarkdownRemark: { edges },
    } = data;

    return (
        <Layout>
            <SEO title="Blog" />
            {edges.map((edge, index) => {
                return (
                    <Link key={index} to={edge.node.frontmatter.path} className="my-3">
                        <div className="py-3 px-2 md:px-6 transition duration-300 hover:bg-custom-secondary hover:shadow-1g">
                            <h1 className="text-accent hover:text-accentHover text-4x1 font-light">
                                {edge.node.frontmatter.title}
                            </h1>
                            <p className="text-grey text-lg">
                                {edge.node.frontmatter.subtitle}
                            </p>
                            <p className="text-grey">
                                {edge.node.frontmatter.date}&nbsp;&#10023;&nbsp;
                                {edge.node.timeToRead} min de lecture.
                            </p>
                            <p className="text-accent hover:text-accentHover">
                                Lire &#10230;
                            </p>
                        </div>
                    </Link>
                );
            })}
        </Layout>
    );
};

export const pageQuery = graphql`
    query getAllPosts {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
                node {
                    frontmatter {
                        title
                        subtitle
                        author
                        date(formatString: "DD MMMM YYYY")
                        path
                    }
                    timeToRead
                }
            }
        }
    }
`;

export default BlogPage;