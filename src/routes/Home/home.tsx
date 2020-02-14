import React from 'react';
import { fetchHomeAction } from './redux/services/homeServices';
import { connect } from 'react-redux';

export interface LoginProps {
  loadData: () => void;
  data: any;
}
export interface LoginState {
  homeData: any;
}

class Home extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps, state: LoginState) {
    super(props, state);

    this.state = { homeData: {} };
  }

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { data } = this.props;
    if (data && data.homeData.length > 0) {
      return (
        <>
          <ul>
            {data.homeData.map(items => (
              <li key={items.id}>{items.employee_name}</li>
            ))}
          </ul>
        </>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ homeData }: any) => {
  return {
    data: homeData
  };
};
const mapDispatchToProps = (dispatch: any) => {
  // tslint:disable-line

  return {
    loadData: () => dispatch(fetchHomeAction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
