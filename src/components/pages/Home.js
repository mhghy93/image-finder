import React, { Fragment } from 'react';
import ImageGallery from '../gallery/ImageGallery';
import NavigationBar from '../layouts/NavigationBar';

const Home = () => {
  return (
    <Fragment>
      <NavigationBar />
      <ImageGallery />
    </Fragment>
  );
};

export default Home;
