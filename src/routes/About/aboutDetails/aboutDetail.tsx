import React from 'react';

interface AboutProps {
  products: any;
  hitApi: () => void;
}
const AboutApi: React.FC<AboutProps> = props => {
  const { products, hitApi } = props;
  return (
    <React.Fragment>
      <div>
        <button onClick={hitApi}>Hit Api</button>
      </div>
      {products.data &&
        products.data.length > 0 &&
        products.data.map(item => (
          <p key={item.id}>
            Name<b>{item.employee_name}</b>
            <br />
            Salary<b>{item.employee_salary}</b>
          </p>
        ))}
    </React.Fragment>
  );
};

export default AboutApi;
