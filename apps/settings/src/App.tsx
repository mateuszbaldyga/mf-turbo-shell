import { Button } from '@repo/ui';
import './index.css';
import { useGlobalStore } from '@repo/store/useGlobalStore';

export default () => {
  const decrement = useGlobalStore((store) => store.decrement);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: settings</div>
      <div>Framework: react-19</div>
      <Button
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </Button>
    </div>
  );
};
