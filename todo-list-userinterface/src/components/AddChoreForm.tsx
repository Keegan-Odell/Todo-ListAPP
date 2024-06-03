import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface AddChoreProps {
  isVisible: boolean;
  onClose: () => void;
}

interface IFormInput {
  choreName: string;
}

const AddChoreForm: React.FC<AddChoreProps> = ({ isVisible, onClose }) => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput>  = (data) => {
    console.log(data);
    onClose();
    reset();
  }

  useEffect(() => {
    if(isVisible) {
        reset();
    }
  }, [isVisible, reset])

  if (!isVisible) {
    return null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 relative'>
        <button
          className='absolute top-2 right-2 text-gray-600'
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className='text-xl font-bold mb-4'>Create Chore!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <input
              {...register("choreName", { required: true })}
              placeholder='Chore Name'
              autoComplete="off"
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
            />
          </div>
          <div className='flex justify-end'>
            <input
              type='submit'
              className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors cursor-pointer'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChoreForm;
