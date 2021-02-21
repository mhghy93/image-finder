import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Loading from '../layouts/Loading';
import { showAllImages } from '../../actions/image';
import GalleryItem from './GalleryItem';

const ImageGallery = ({ image: { images, loading, error }, showAllImages }) => {
  useEffect(() => {
    showAllImages();
  }, [showAllImages]);

  return (
    <Fragment>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            {error.msg ? (
              <p>{error.msg}</p>
            ) : (
              <Row className="mt-5">
                {images.map((image) => (
                  <GalleryItem key={image.id} image={image} />
                ))}
              </Row>
            )}
          </Fragment>
        )}
      </Container>
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
