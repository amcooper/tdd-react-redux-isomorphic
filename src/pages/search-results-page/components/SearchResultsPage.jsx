import React from 'react';
import SearchResults from './SearchResults';
import NoSearchResults from './NoSearchResults';
import Spinner from './Spinner';

const SearchResultsPage = ({ results }) => {
  let component;
  if (results.isFetching) {
    component = <Spinner />;
  } else if (results.error) {
    component = 
      <NoSearchResults
        errorClassName="failure-container"
        errorMessage="Failure searching for query"
        secondaryMessage="The search service is currently unavailable."
      />
  } else if (results.payload.consultants.length === 0) {
    component = 
      <NoSearchResults
        errorClassName="no-results-container"
        errorMessage="No results found"
        secondaryMessage="Please try another search"
      />
  } else {
    component = 
      <SearchResults 
        results={results.payload.consultants}
        query={results.query}
      />
  } 
  return component;
};

SearchResultsPage.propTypes = {
  results: React.PropTypes.object.isRequired
};

export default SearchResultsPage;
