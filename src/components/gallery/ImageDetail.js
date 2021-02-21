import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Card } from 'react-bootstrap';

const ImageDetail = ({ show, handleClose, image }) => {
  const { urls, user, likes } = image;
  const { name, portfolio_url, twitter_username, instagram_username } = user;

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Card className="shadow bg-white rounded h-100">
          <Card.Img className="card-image" variant="top" src={urls.full} />
          <Card.Body>
            <p>
              <span className="mr-5">By {name}</span>{' '}
              <i className="fas fa-thumbs-up text-dark ml-5"></i> {likes}
            </p>
            <p className="mt-4">
              <a
                href={portfolio_url}
                className="mr-5 image-detail-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i> Portfolio
              </a>
              <a
                href={`https://twitter.com/${twitter_username}`}
                className="mr-5 image-detail-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter text-dark"></i> Twitter
              </a>
              <a
                href={`https://www.instagram.com/${instagram_username}`}
                className="mr-5 image-detail-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram text-dark"></i> Instagram
              </a>
            </p>
          </Card.Body>
        </Card>
      </Modal>
    </Fragment>
  );
};

ImageDetail.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default ImageDetail;
