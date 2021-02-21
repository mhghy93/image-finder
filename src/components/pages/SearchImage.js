import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import NavigationBar from '../layouts/NavigationBar';
import { searchImage } from '../../actions/image';
import Loading from '../layouts/Loading';
import GalleryItem from '../gallery/GalleryItem';

const SearchImage = ({
  location,
  image: { searchedImages, loading, error },
  searchImage,
}) => {
  useEffect(() => {
    searchImage(location.search);
  }, [searchImage, location.search]);

  return (
    <Fragment>
      <NavigationBar />
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            {error.msg ? (
              <p>{error.msg}</p>
            ) : (
              <Row className="mt-5">
                {searchedImages.results ? (
                  <Fragment>
                    {searchedImages.results.map((image) => (
                      <GalleryItem key={image.id} image={image} />
                    ))}
                  </Fragment>
                ) : (
                  <p>No images found</p>
                )}
              </Row>
            )}
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};

SearchImage.propTypes = {
  image: PropTypes.object.isRequired,
  searchImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, { searchImage })(SearchImage);
