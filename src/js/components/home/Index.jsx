import React, { Component } from 'react';
import PropTypes from 'prop-types';
import images from '../../theme/img';
import {
  Wrap,
  Header,
  Content,
  Card,
  Value,
  Note,
  Icon,
}
  from './styled';

function setUnitIndex(value, unit) {
  return value + unit;
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: 'false',
      intervalId: '',
    };

    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.fetchIndex = this.fetchIndex.bind(this);
  }

  componentDidMount() {
    this.fetchIndex();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  onLoading(value) {
    this.setState({
      isLoading: value,
    });
  }

  onSuccess() {
    this.onLoading(false);
  }

  onError(err) {
    try {
      const { status } = err.response;
      switch (status) {
        case 404:
          break;

        case 401:
          break;

        default: break;
      }
    } catch (e) {
      // Do something
    } finally {
      this.onLoading(false);
    }
  }

  fetchIndex() {
    this.onLoading(true);
    this.props.fetchIndex(this.onSuccess, this.onError);
  }

  render() {
    const { index } = this.props;
    const { isLoading } = this.state;
    const t1 = setUnitIndex(index.t1, ' độ C');
    const t2 = setUnitIndex(index.t2, ' độ C');
    const h = setUnitIndex(index.h, ' %');
    const p = setUnitIndex(index.p, ' pa');
    if (isLoading) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <>
        <Header color='#6c757d'>ĐO LẦN CUỐI LÚC: {index.time}</Header>
        <Wrap>
          <Card color='#ffc107'>
            <Icon image={images.temperature} />
            <Content>
              <Value>
                {t1}
              </Value>
              <Note>
                DHT-22
              </Note>
            </Content>
          </Card>
          <Card color='#28a745'>
            <Icon image={images.temperature1} />
            <Content>
              <Value>
                {t2}
              </Value>
              <Note>
                GY-68
              </Note>
            </Content>
          </Card>
          <Card color='#007bff'>
            <Icon image={images.humidity} />
            <Content>
              <Value>
                {h}
              </Value>
              <Note>
                Độ ẩm
              </Note>
            </Content>
          </Card>
          <Card color='#17a2b8'>
            <Icon image={images.barometric} />
            <Content>
              <Value>
                {p}
              </Value>
              <Note>
                Khí áp
              </Note>
            </Content>
          </Card>
        </Wrap>
      </>
    );
  }
}

Index.propTypes = {
  index: PropTypes.any.isRequired,
  fetchIndex: PropTypes.func.isRequired,
};

export default Index;
