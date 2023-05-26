import PropTypes from 'prop-types';
import css from 'components/StatisticItem/StatisticItem.module.css';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.array.isRequired,
  percentage: PropTypes.string.isRequired,
};
