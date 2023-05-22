import { StatisticItem } from 'components/StatisticItem/StatisticItem';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {' '}
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id} label={label} percentage={percentage} />
          );
        })}
      </ul>
    </>
  );
};
