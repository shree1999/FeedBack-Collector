import { Avatar } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="displa-3">Dashboard</h1>
      <div className="fixed-widgets">
        <Link to="/surveys/new">
          <Avatar
            className="fixed-widgets-avatar"
            icon={<PlusOutlined />}
            size="large"
          />
        </Link>
      </div>
    </div>
  );
};
