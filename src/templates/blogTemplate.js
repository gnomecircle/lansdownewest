import React from "react";
import { Column, Row } from '../components/_styledComponents/Layout';
import { H1 } from '../components/_styledComponents/typography';

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;

    return (
        <div data-component="Article">
            <Row>
                <H1>{frontmatter.title}</H1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Row>
        </div>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;