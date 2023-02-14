import { createAction } from '@ngrx/store';

enum ActionTypes {
  GET_PRO_COLLECTIONS = '[Porduct] Get Product Collection',
  GET_PRO_COLLECTIONS_SUCCESS = '[Porduct] Get Product Collection Success',
  GET_PRO_COLLECTIONS_FAILURE = '[Porduct] Get Product Collection Failure',
}

// --------------------------------------------------------------------------------------------------------------------------------------------
export const productCollectionAction = createAction(
  ActionTypes.GET_PRO_COLLECTIONS
);

export const productCollectionSuccessAction = createAction(
    ActionTypes.GET_PRO_COLLECTIONS_SUCCESS
  );

  export const productCollectionFailureAction = createAction(
    ActionTypes.GET_PRO_COLLECTIONS_FAILURE
  );
