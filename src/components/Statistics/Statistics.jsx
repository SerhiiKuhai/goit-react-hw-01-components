import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id} label={label} percentage={percentage} />
          );
        })}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
