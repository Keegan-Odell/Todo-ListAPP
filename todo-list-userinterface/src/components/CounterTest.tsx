import { decrement, decrementByAmount, increment, incrementByAmount, selectCount, reset } from '../features/home/counterSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const CounterComponent = () => {
    const count = useAppSelector(selectCount) //selectCount
    const dispatch = useAppDispatch()

    return (
        <>
            <div className="bg-red-500 text-white text-6xl p-10 text-center">
                <h1>Value: {count}</h1>
            </div>
            <div className="flex justify-center space-x-5 mt-10">
                <button 
                    onClick={() => dispatch(increment())} 
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-4xl"
                >
                    Increment
                </button>
                <button 
                    onClick={() => dispatch(decrement())} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-4xl"
                >
                    Decrement
                </button>
                <button
                    onClick={() => dispatch(incrementByAmount(10))}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-4xl"
                >
                    Add 10
                </button>
                <button
                    onClick={() => dispatch(decrementByAmount(10))}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-full text-4xl"
                >
                    Subtract 10
                </button>
                <button
                    onClick={() => dispatch(reset())}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-4xl"
                >
                    Reset to 0
                </button>
            </div>
        </>
    );
};

export default CounterComponent;
