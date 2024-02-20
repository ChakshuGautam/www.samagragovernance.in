import { CaseStudyTemplate } from '../../templates/case-study';
import PropTypes from 'prop-types';
import React from 'react';

const CaseStudyPreview = ({ entry, widgetFor }) => {
  console.log("hello", entry)
  const data = entry.getIn(['data']).toJS();
  const { markdownRemark: post } = data;
  if (data) {
    return (
      <CaseStudyTemplate
        content={post.frontmatter}
        helmet={
          <Helmet titleTemplate="%s | CaseStudy">
            <title>{`preview`}</title>
            <meta name="description" content={`preview`} />
          </Helmet>
        }
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

CaseStudyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CaseStudyPreview;
