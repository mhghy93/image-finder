import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { showAllImages } from '../../actions/image';

const ImageGallery = ({ image: { images, loading }, showAllImages }) => {
  useEffect(() => {
    showAllImages();
  }, [showAllImages]);

  return (
    <Fragment>
      <Container>Image Gallery</Container>
    </Fragment>
  );
};

ImageGallery.propTypes = {
  image: PropTypes.object.isRequired,
  showAllImages: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, { showAllImages })(ImageGallery);
