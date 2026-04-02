import ReactDOM from 'react-dom/client';
import './index.css';
import Home from 'home/App';
import Settings from 'settings/App';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Navigation } from '@repo/ui/navigation';
import { routes } from '@repo/core/config/routes';

const App = () => (
  <BrowserRouter>
    <Navigation />

    <main className="mt-10 text-3xl mx-auto max-w-6xl">
      <Routes>
        <Route
          path={routes.home()}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path={routes.settings()}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Settings />
            </Suspense>
          }
        />
      </Routes>
    </main>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
