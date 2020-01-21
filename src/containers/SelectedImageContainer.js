import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedImage from '../components/selectedImage';

class SelectedImageContainer extends Component {
  state = {
    imageURL: ''
  }

  componentDidUpdate() {
    if (this.props.imageURL !== this.state.imageURL) {
      this.setState({ imageURL: this.props.imageURL })
    }
  }

  render() {
    if (!this.props.imageURL) return null

    return <SelectedImage imageURL={this.props.imageURL} />
  }
}

const mapStateToProps = ({ appData: { imageURL } }) => {
  return { imageURL }
}

export default connect(mapStateToProps)(SelectedImageContainer);