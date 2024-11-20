import React, { useState } from 'react';
import JsonEditor from '../components/Editor/JsonEditor';
import FormGenerator from '../components/Form/FormGenerator';
import { validateJson } from '../utils/jsonValidator';

const Home = () => {
  const [schema, setSchema] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const handleSchemaChange = (json: string) => {
    try {
      const parsed = JSON.parse(json);
      const isValid = validateJson(parsed);
      if (isValid) {
        setSchema(parsed);
        setError(null);
      } else {
        setError('Invalid JSON Schema');
      }
    } catch (err) {
      setError('Invalid JSON');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 border-r">
        <JsonEditor onChange={handleSchemaChange} error={error} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        {schema ? (
          <FormGenerator schema={schema} />
        ) : (
          <p className="text-gray-500">Enter a valid JSON schema to preview the form.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
