import PropTypes from 'prop-types';
import {
  List,
  Title,
  Item,
  Label,
  Percentage,
  Section,
} from './Statistics.styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item color={getRandomHexColor()} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
