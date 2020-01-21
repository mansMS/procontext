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
    if (!this.props.photographersData.length) return null

    return (
      <PhotographersList
        photographersData={this.props.photographersData}
        photographerClickHandler={this.photographerClickHandler}
        userId={this.props.userId}
      />
    )
  }
}

const mapStateToProps = ({
  photographersData: { photographersData, photographersLoading, photographersError },
  appData: { userId }
}) => {
  return { photographersData, photographersLoading, photographersError, userId }
}

export default connect(mapStateToProps, { setPhotographersList, setShowAlbum })(PhotographersContainer);