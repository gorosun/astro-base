import React, { useState, useEffect } from 'react';

export const AstroComponentWrapper = (Component, props) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const renderComponent = async () => {
      const renderedHtml = await Component.render(props);
      setHtml(renderedHtml.toString());
    };
    renderComponent();
  }, [Component, props]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};