import './index.css';
import { useGlobalStore } from '@repo/store/useGlobalStore';
import { Button } from '@repo/ui';

export default () => {
  const increment = useGlobalStore((store) => store.increment);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: home</div>
      <div>Framework: react-19</div>
      <Button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </Button>
    </div>
  );
};
