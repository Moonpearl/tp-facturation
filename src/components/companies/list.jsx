import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Models from '../../models';
import ListItem from './list-item/list-item';

const CompaniesList =  ({ companies }) =>
  <ListGroup as="ul">
    {companies.map( (item, index) =>
      <ListItem key={index} company={item} />
    )}
  </ListGroup>
;

CompaniesList.propTypes = {
  companies: PropTypes.arrayOf(Models.Company).isRequired,
}

export default CompaniesList;
