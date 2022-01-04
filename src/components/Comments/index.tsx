/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { Component, ReactElement } from 'react';

// export default class Comments extends Component<ReactElement> {
//   componentDidMount() {
//     const script = document.createElement('script');
//     const anchor = document.getElementById('inject-comments-for-uterances');
//     script.setAttribute('src', 'https://utteranc.es/client.js');
//     script.setAttribute('crossorigin', 'anonymous');
//     script.setAttribute('async', 'true');
//     script.setAttribute('repo', 'jpcmf/ig-ch-05');
//     script.setAttribute('issue-term', 'pathname');
//     script.setAttribute('theme', 'github-light');
//     anchor.appendChild(script);
//   }

//   render() {
//     return <div id="inject-comments-for-uterances" />;
//   }
// }

export default function Comments() {
  return (
    <section
      style={{ width: '100%' }}
      ref={element => {
        if (!element) {
          return;
        }

        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', 'https://utteranc.es/client.js');
        scriptElement.setAttribute('repo', 'jpcmf/ig-ch-05');
        scriptElement.setAttribute('issue-term', 'pathname');
        scriptElement.setAttribute('theme', 'github-dark');
        scriptElement.setAttribute('crossorigin', 'anonymous');
        scriptElement.setAttribute('async', 'true');
        element.replaceChildren(scriptElement);
      }}
    />
  );
}
