import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPhotographersList } from '../reducers/photographersData';
import { setShowAlbum } from '../reducers/appData';
import PhotographersList from '../components/photographersList';
import Spinner from '../components/spinner';

class PhotographersContainer extends Component {
  constructor(props) {
    super(props);
    this.photographerClickHandler = this.photographerClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.setPhotographersList();
  }

  photographerClickHandler(id) {
    this.props.setShowAlbum(id)
  }

  render() {
    if (this.props.photographersError) return <p>{this.props.photographersError}</p>
    if (this.props.photographersLoading) return <Spinner />
    return (
      <PhotographersList
        photographersData={this.props.photographersData}
        photographerClickHandler={this.photographerClickHandler}
      />
    )
  }
}

const mapStateToProps = ({
  photographersData: { photographersData, photographersLoading, photographersError }
}) => {
  return { photographersData, photographersLoading, photographersError }
}

export default connect(mapStateToProps, { setPhotographersList, setShowAlbum })(PhotographersContainer);