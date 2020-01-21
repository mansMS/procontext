import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlbumsList } from '../reducers/albumsData';
import { setShowImages } from '../reducers/appData';
import AlbumList from '../components/albumList';
import Spinner from '../components/spinner';

class AlbumsContainer extends Component {
  constructor(props) {
    super(props);
    this.albumClickHandler = this.albumClickHandler.bind(this);

    this.state = {
      userId: ''
    }
  }

  componentDidUpdate() {
    if (this.props.userId !== this.state.userId) {
      this.setState({ userId: this.props.userId })
      this.props.setAlbumsList(this.props.userId);
    }
  }

  albumClickHandler(id) {
    this.props.setShowImages(id)
  }

  render() {
    if (this.props.albumsError) return <p>{this.props.albumsError}</p>
    if (this.props.albumsLoading) return <Spinner />
    return (
      <AlbumList albumsData={this.props.albumsData} albumClickHandler={this.albumClickHandler} />
    )

  }
}

const mapStateToProps = ({ albumsData: { albumsData, albumsLoading, albumsError }, appData: { userId } }) => {

  return { albumsData, albumsLoading, albumsError, userId }
}

export default connect(mapStateToProps, { setAlbumsList, setShowImages })(AlbumsContainer);