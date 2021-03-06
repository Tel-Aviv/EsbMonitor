// @flow
import React from 'react';
import { createRefetchContainer, graphql } from 'react-relay';
import Select from 'react-select';

import EsbServices from './EsbServices';

type Props = {
  categories: Array<{
    name: String,
    objectId: Number
  }>
};

type State = {
  selectedCategory: {
    value: Number,
    label: String
  }
}

class ServicesSelector extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: null
    }

  }

  servicesChanged = (services) => {

    if( this.props.refetcher ) {
      this.props.refetcher(services);
    }
  }

  categoryChanged = (newCategory) => {

    this.setState({
      selectedCategory: newCategory
    });

    let variables = {
      filter: {
        categoryId: newCategory.value
      }
    }

    this.props.relay.refetch(
      variables,
      null,
      () => {
        console.log('Services refetch done');
      },
      {force: false}
    );

  }

  render() {

    let services = this.props.services.services.list;
    let categories = this.props.categories.map( category => {
      return {
        value: category.objectId,
        label: category.name
      }
    });

    const { selectedCategory } = this.state;
    const _value = selectedCategory && selectedCategory.value;

    return <div className='row justify-content-center'>

              <Select
                className='col-2 align-self-center'
                placeholder="Select services' group"
                options={categories}
                value={_value}
                onChange={::this.categoryChanged}
              />

              <EsbServices
                  selectedServices = "4,5"
                  className='col-10 align-self-center'
                  disabled={!this.state.selectedCategory}
                  services={services}
                  onChange={::this.servicesChanged}
              />
           </div>
  }

}

export default createRefetchContainer(ServicesSelector,
graphql`
  fragment ServicesSelector_services on Repository
  @argumentDefinitions(filter: { type: ServicesFilter } )
  {
    services(filter: $filter) {
      list{
        objectId
        name
      }
    }
  }
`,
graphql`
  query ServicesSelector_Query ($filter: ServicesFilter) {
    repository {
      ...ServicesSelector_services @arguments(filter: $filter)
    }
  }
`);
