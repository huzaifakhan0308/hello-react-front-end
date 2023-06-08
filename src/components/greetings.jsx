import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetingsSlice';

function Home() {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>
        {greetings.message}
      </h1>
    </div>
  );
}

export default Home;
