import PropTypes from 'prop-types';
import React from 'react';
import { SushasanTemplate } from '../../templates/sushasan-page';
const SushasanPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return <SushasanTemplate content={data} />;
  } else {
    return <div>Loading...</div>;
  }
};

SushasanPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SushasanPagePreview;
