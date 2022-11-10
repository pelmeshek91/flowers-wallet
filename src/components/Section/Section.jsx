import PropTypes from 'prop-types';
import s from './SectionTitle.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2 className={s.title}>{title}</h2>}
      <div>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
