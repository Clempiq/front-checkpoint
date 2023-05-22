import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { List } from "antd";

const COUNTRIES_QUERY = gql`
  query Continent($code: String!) {
    continent(code: $code) {
      countries {
        code
        name
      }
    }
  }
`;

const CountriesPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const { loading, error, data } = useQuery(COUNTRIES_QUERY, {
    variables: { code },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Countries</h1>
      <List
        dataSource={data.continent.countries}
        renderItem={(country: any) => (
          <List.Item>
            <Link to={`/country/${country.code}`}>{country.name}</Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CountriesPage;
