import { connect } from 'react-redux';
import React from 'react';
import { fetchProductsAction } from './redux/services/aboutServices';
import AboutApi from './aboutDetails/aboutDetail';

export interface LoginProps {
  loadData: () => void;
}

class About extends React.Component<LoginProps> {
  state = {
    products: ''
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ products: nextProps.products.products });
  }

  hitApi() {
    this.props.loadData();
  }
  render() {
    const { products } = this.state;
    return <AboutApi products={products} hitApi={this.hitApi.bind(this)} />;
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products
  };
};
const mapDispatchToProps = (dispatch: any) => {
  // tslint:disable-line

  return {
    loadData: () => dispatch(fetchProductsAction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
