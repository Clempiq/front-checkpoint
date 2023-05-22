import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const COUNTRY_QUERY = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
      capital
      currency
      flag
    }
  }
`;

const CountryDetailsPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const { loading, error, data } = useQuery(COUNTRY_QUERY, {
    variables: { code },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const country = data.country;

  return (
    <div>
      <Title>{country.name}</Title>
      <Paragraph>Capital: {country.capital}</Paragraph>
      <Paragraph>Currency: {country.currency}</Paragraph>
      <img
        src={country.flag}
        alt={country.name}
        style={{ maxWidth: "300px" }}
      />
    </div>
  );
};

export default CountryDetailsPage;
