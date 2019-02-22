import React from "react";
import helpers from "../helpers/index";
import { Link } from "gatsby";
import styled from "styled-components";

const darkTheme = {
  fontUrl: "https://fonts.googleapis.com/css?family=Fira+Sans",
  fontFamily: "Fira Sans, sans-serif",
  secondaryBackground: "#212121",
  primaryBackground: "#424242",
  textColor: "#E0E0E0",
  linkColor: "#7986CB",
  primaryBright: "#616161"
};

const StyledArticle = styled(Article)`
  box-sizing: border-box;
  @import url(${darkTheme.fontUrl});
  display: flex;
  flex-direction: column;
  font-family: ${darkTheme.fontFamily};
  max-width: 1100px;
  min-width: 100px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  summary {
    @import url(${darkTheme.fontUrl});
    font-family: ${darkTheme.fontFamily};
    padding: 5px 20px;
    background: ${darkTheme.primaryBackground};
    color: ${darkTheme.textColor};
  }
  a {
      font-size: 1.5rem;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      color: ${darkTheme.textColor}
      background: ${darkTheme.primaryBright}
      height: 40px;
      border-radius: 0 0 10px 10px;
    }
`;

const ArticleHeader = styled.div`
  border-radius: 10px 10px 0 0;
  font-size: 1.17em;
  @import url(${darkTheme.fontUrl});
  font-family: ${darkTheme.fontFamily};
  background: ${darkTheme.secondaryBackground};
  color: ${darkTheme.textColor};
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  h3 {
    font-weight: bold;
  }
  time {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

function Article({
  title,
  body,
  postDate,
  className,
  urlText,
  summaryLimit = 60,
  slug
}) {
  postDate = postDate.split("-");
  postDate = [postDate[1], postDate[2], postDate[0]];
  postDate = postDate.join("-");
  body = helpers.truncate(body, summaryLimit);
  console.log(postDate);
  return (
    <article className={className}>
      <ArticleHeader>
        <h3>{title}</h3>
        <time datetime={postDate}>{postDate}</time>
      </ArticleHeader>
      <summary>{body}</summary>
      <Link to={`/post/${slug}`}>{urlText}</Link>
    </article>
  );
}

export default StyledArticle;
