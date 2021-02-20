import React, { Fragment } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Fragment>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search ...."
          className="mr-sm-2 search-bar"
          bsPrefix
        />
        <Button type="submit" variant="outline-dark" className="search-btn">
          <i className="fas fa-search"></i>
        </Button>
      </Form>
    </Fragment>
  );
};

export default SearchBar;
