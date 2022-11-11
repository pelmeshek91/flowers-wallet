import { NavLink } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
