import { KSKTemplate } from '../../templates/ksk';
import PropTypes from 'prop-types';
import React from 'react';

const KSKPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return <KSKTemplate content={data} />;
  } else {
    return <div>Loading...</div>;
  }
};

KSKPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default KSKPreview;
