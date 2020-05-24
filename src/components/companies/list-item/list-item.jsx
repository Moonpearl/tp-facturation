import React from 'react';
import Models from '../../../models';
import { ListGroup, Button } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const CompaniesListItem = ({ company }) => {
  const { name, siren, iban } = company.data;

  const sections = [
    { label: 'Name:', value: name },
    { label: 'SIREN:', value: siren },
    { label: 'IBAN:', value: iban },
  ];

  return (
    <ListGroup.Item as="li" className="CompaniesListItem">
      {sections.map( ({ label, value }, index) =>
        <div key={index}>
          <span className="CompaniesListItem-label">
            {label}
          </span>
          {value}
        </div>
      )}
      <div>
        <Button variant="primary" size="sm">
          <FaEdit />
        </Button>
        <Button variant="danger" size="sm">
          <FaTrashAlt />
        </Button>
      </div>
    </ListGroup.Item>
  );
}

CompaniesListItem.propTypes = {
  company: Models.Company,
};

export default CompaniesListItem;
