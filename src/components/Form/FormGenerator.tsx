import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { JsonSchema } from '../../utils/schemaInterfaces';

function FormGenerator({ schema }: { schema: JsonSchema }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data: any) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data); 
      setIsSuccess(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.entries(schema.properties).map(([key, { type }]) => (
        <div key={key} className="mb-4">
          <label className="block mb-1 font-medium">{key}</label>
          <input
            {...register(key, { required: schema.required?.includes(key) })}
            type={type}
            className="w-full border rounded p-2"
          />
          {errors[key] && <span className="text-red-500">{key} is required</span>}
        </div>
      ))}
      <button
        type="submit"
        disabled={isLoading}
        className={`px-4 py-2 rounded ${isLoading ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
      {isSuccess && (
        <p className="text-green-500 mt-4">Form submitted successfully!</p>
      )}
    </form>
  );
}

export default FormGenerator;
