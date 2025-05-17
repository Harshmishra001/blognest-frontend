import { useEffect, useState } from 'react';

const TestEnv = () => {
  const [backendUrl, setBackendUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      setBackendUrl(url || 'Not set');
    } catch (err: any) {
      setError(`Error accessing environment variables: ${err.message}`);
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variable Test</h1>

      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p><strong>Error:</strong> {error}</p>
        </div>
      ) : null}

      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Frontend Environment Variables</h2>
        <p><strong>VITE_BACKEND_URL:</strong> {backendUrl}</p>
      </div>
    </div>
  );
};

export default TestEnv;
