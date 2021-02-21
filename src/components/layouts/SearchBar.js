import React, { Fragment, useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  const { push } = useHistory();

  const handleOnChange = (e) => {
    setKeyword(e.target.value);
    push(`/search/images/?q=${e.target.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/search/images/?q=${keyword}`);
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit} inline>
        <FormControl
          type="text"
          placeholder="Search ...."
          className="mr-sm-2 search-bar"
          name="keyword"
          onChange={handleOnChange}
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
