import { AnyAction } from 'redux';

export interface IGenericAction {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  <T extends { payload?: any; type: any }>({ payload, type }: T): AnyAction;
}

export const GenericActionCreator: IGenericAction = ({ payload, type }): AnyAction => ({
  type,
  payload,
});
