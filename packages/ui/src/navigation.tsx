import { Link } from 'react-router';
import { routes } from '@repo/core/config/routes';

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-4 px-4 py-2">
        <li className="text-blue-500">
          <Link to={routes.home()}>Home</Link>
        </li>
        <li className="text-blue-500">
          <Link to={routes.settings()}>Settings</Link>
        </li>
      </ul>
    </nav>
  );
};
