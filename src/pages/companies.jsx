import React, { useState, useEffect, useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { companiesApi } from '../utils/api';
import { Layout, Header, Loader, Companies } from '../components';
import { FaPlus } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Models from '../models';

const CompaniesRenderer = ({ companies, title, addButtonCaption }) => {
  return (
    <Fragment>
      <Header level={2}>{title}</Header>
      {companies === null ?
        <Loader />
      :
        <Fragment>
          <Companies.List companies={companies} />
          <Button variant="success" className="mt-2">
            <FaPlus /> {addButtonCaption}
          </Button>
        </Fragment>
      }
    </Fragment>
  );
};

CompaniesRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  addButtonCaption: PropTypes.string.isRequired,
  companies: PropTypes.arrayOf(Models.Company),
};

const CompaniesPage = ({ location }) => {
  const [companies, setCompanies] = useState(null);
  const [accountants, setAccountants] = useState(null);
  const [clients, setClients] = useState(null);

  useEffect( () => {
    companiesApi.readAll().then(response => setCompanies(response));
  }, []);

  useMemo( () => {
    if (companies !== null) {
      setAccountants(companies.filter(item => item.data.isClient === false));
      setClients(companies.filter(item => item.data.isClient === true));
    }
  }, [companies]);

  return (
    <Layout>
      <CompaniesRenderer
        companies={accountants}
        title="Accountants"
        addButtonCaption="Add new accountant"
      />
      <CompaniesRenderer
        companies={clients}
        title="Clients"
        addButtonCaption="Add new client"
      />
    </Layout>
  );
};

export default CompaniesPage;
