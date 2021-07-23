import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initApplicationAction, updateAppLoadingAction } from '~/redux/action/app-action';
import { sGetIndicatorState } from '~/redux/selectors';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const loading = useSelector(sGetIndicatorState);

  const onClick = useCallback(() => {
    dispatch(updateAppLoadingAction(true));
    setTimeout(() => {
      dispatch(updateAppLoadingAction(false));
    }, 3000);
  }, [dispatch]);

  return (
    <div>
      <button onClick={onClick}>Loading1</button>
    </div>
  );
};

export default Home;
