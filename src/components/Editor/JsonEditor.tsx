import React from 'react';
import Editor from '@monaco-editor/react';

const JsonEditor = ({ onChange, error }: { onChange: (json: string) => void; error: string | null }) => {
  const handleEditorChange = (value: string | undefined) => {
    if (value) onChange(value);
  };

  return (
    <div>
      <Editor
        height="90vh"
        defaultLanguage="json"
        defaultValue="// Enter your JSON schema here"
        onChange={handleEditorChange}
      />
      {error && (
        <div className="mt-2 p-3 bg-red-100 text-red-700 rounded border border-red-500">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default JsonEditor;
