import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';

const GalleryItem = ({ image }) => {
  const { urls, user, likes } = image;
  const { name } = user;
  return (
    <Fragment>
      <Col className="mb-5" lg={4} md={6}>
        <Card className="shadow bg-white rounded h-100">
          <Card.Img className="card-image" variant="top" src={urls.full} />
          <Card.Body>
            <p>
              <span className="float-left">By {name}</span>{' '}
              <span className="float-right">
                <i className="fas fa-thumbs-up text-dark"></i> {likes}
              </span>
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

export default GalleryItem;
