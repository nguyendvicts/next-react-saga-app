import { Collection, Record } from 'immutable';
import { IStore } from '~/redux/redux-state';
import { LOADING_TYPE, REDUX_TYPE } from '~/redux/redux-type-saga';
import { sGetIndicatorState } from '~/redux/selectors';

export const isLoadingSelector = (store: Record<IStore> & Readonly<IStore>) => {
  const count: Collection<string, any> = store.getIn([REDUX_TYPE, LOADING_TYPE]);
  return !!count || sGetIndicatorState(store);
};
