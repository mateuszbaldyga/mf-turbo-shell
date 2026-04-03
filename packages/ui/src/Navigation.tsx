import { Link } from 'react-router';
import { routes } from '@repo/core/config';
import { useGlobalStore } from '@repo/store/useGlobalStore';

export const Navigation = () => {
  const count = useGlobalStore((store) => store.count);
  const decrement = useGlobalStore((store) => store.decrement);

  return (
    <nav>
      <ul className="flex gap-4 px-4 py-2">
        <li className="text-blue-500">
          <Link to={routes.home()}>Home</Link>
        </li>
        <li className="text-blue-500">
          <Link to={routes.settings()}>Settings</Link>
        </li>

        <div className="text-sm flex items-center gap-2 text-gray-500 ml-auto">
          <button type="button" onClick={() => decrement()}>
            Decrement
          </button>
          {count}
        </div>
      </ul>
    </nav>
  );
};
