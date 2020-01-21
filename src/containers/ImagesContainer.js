import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setImagesList } from '../reducers/imagesData';
import Images from '../components/images';
import Spinner from '../components/spinner';

class ImagesContainer extends Component {
  state = {
    albumId: ''
  }

  componentDidUpdate() {
    if (this.props.albumId !== this.state.albumId) {
      this.setState({ albumId: this.props.albumId })
      this.props.setImagesList(this.props.albumId);
    }
  }

  render() {
    if (this.props.imagesError) return <p>{this.props.imagesError}</p>
    if (this.props.imagesLoading) return <div className="Images"><Spinner /></div>
    if (!this.props.imagesData.length) return null

    return <Images imagesData={this.props.imagesData} />
  }
}

const mapStateToProps = ({ imagesData: { imagesData, imagesLoading, imagesError }, appData: { albumId } }) => {
  return { imagesData, imagesLoading, imagesError, albumId }
}

export default connect(mapStateToProps, { setImagesList })(ImagesContainer);