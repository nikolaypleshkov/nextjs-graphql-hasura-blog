import React from 'react'
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

const MarkDown = ({ content }: any) => {
    return <StyledMarkdown> 
        {content}
    </StyledMarkdown>;
  };
  
  export default MarkDown;
  
  /** Markdown styled components */
  const StyledMarkdown = styled(ReactMarkdown)({
    color: "#838383",
  
    h1: {
      fontSize: '1.7em',
    },
    h2: {
      fontSize: '1.4em',
    },
    h3: {
      fontSize: '1.2em',
    },
    a: {
      color: "pink"
    },
    pre: {
      padding: 20,
      borderRadius: 4,
      border: `solid 1px #838383`,
      backgroundColor: "#838383",
      code: {
        fontSize: '0.9em',
      },
    },
  });