import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  scroll-behavior: smooth;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  /* font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', sans-serif; */
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
table, th, td {
  border: 0.7px solid black;
  font-size: 12px;
  font-weight: 400;
  vertical-align: middle;
  white-space: pre-wrap;
  padding: 10px 3px;
}
td {
  min-height: 40px;
  height: 40px;
  line-height: 16px
}
* {
  box-sizing: border-box;
}
textarea {
}
body {
  color: black;
  line-height: 1.2;
  font-family: 'Pretendard', sans-serif
}
.normal		{ font-weight: 400 }
.bold		{ font-weight: 700 }
.bolder		{ font-weight: 800 }
.light		{ font-weight: 300 }
a {
  text-decoration:none;
  color:inherit;
}
p {
    background: none;
}
img {
    background: none;
}
`;
