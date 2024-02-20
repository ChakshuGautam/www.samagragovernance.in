import { CaseStudyTemplate } from '../../templates/case-study';
import PropTypes from 'prop-types';
import React from 'react';

const CaseStudyPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return (
      <CaseStudyTemplate
        content={data}
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
