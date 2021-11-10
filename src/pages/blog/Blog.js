import React from 'react';

const Blog = () => {
  const [name, setName] = React.useState({ name: 'Blog State', id: 11 });
  return (
    <div className="mainCls" data-test="component-blog">
      <div className="htmlCls" data-test="component-post">
        Blog Post
      </div>
      <div>Help Post</div>
      <div>Code Post</div>
      <ul data-test="component-ul">
        <li key="react" className="liCls" data-test="component-li">
          React
        </li>
        <li key="node" className="liCls" data-test="component-li">
          Node
        </li>
        <li key="angular" className="liCls" data-test="component-li">
          Angular
        </li>
      </ul>
      <div data-test="component-number" className="number">
        <span>One</span>
        <span>Two</span>
      </div>
      <div>
        <button
          className="my-button disabled btn-primary"
          data-test="component-submit"
        >
          Submit
        </button>
      </div>
      <div className="someclass" data-test="component-someclass" />
    </div>
  );
};

export default Blog;
