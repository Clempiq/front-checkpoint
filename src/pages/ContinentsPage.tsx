import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { List } from "antd";

const CONTINENTS_QUERY = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`;

const ContinentsPage: React.FC = () => {
  const { loading, error, data } = useQuery(CONTINENTS_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Continents</h1>
      <List
        dataSource={data.continents}
        renderItem={(continent: any) => (
          <List.Item>
            <Link to={`/continent/${continent.code}`}>{continent.name}</Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ContinentsPage;
