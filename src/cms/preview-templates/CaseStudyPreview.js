import { CaseStudyTemplate } from '../../templates/case-study';
import PropTypes from 'prop-types';
import React from 'react';

const CaseStudyPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  console.log("hello",data);
  if (data) {
    return (
      <CaseStudyTemplate
        content={data?.markdownRemark?.frontmatter || data?.markdown || data}
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
