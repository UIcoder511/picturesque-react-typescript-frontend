import React, { SetStateAction, useEffect } from 'react';

export type Action<T extends string = string> = {
   type: T,
   payload?: unknown
 }


export interface UnknownAction extends Action {
   // Allows any extra properties to be defined in an action.
   [extraProps: string]: unknown
 }


type reducerType<S,A extends Action=UnknownAction> = ((state: S, action: A) => S) | null;


export class Store<S, A extends Action> {
  private state: S | null = null;
  private reducer: reducerType<S, A> | null = null;
  private stateListeners: React.Dispatch<SetStateAction<S>>[] = [];

  initializeStore(initialState: S, globalReducer: reducerType<S, A>) {
    if (this.state !== null) {
      throw new Error('Store is already initialized');
    }
    if (this.reducer !== null) {
      throw new Error('Reducer is already initialized');
    }

    this.state = initialState;
    this.reducer = globalReducer;
  }

  useStore = () => {
   
   if (!this.state || !this.reducer) {
      throw new Error(
         'State or Reducer is not initailzed...use initializeStore method to initialize them',
      );
   }

   const setState = React.useState(this.state as S)[1];

   useEffect(() => {
      this.stateListeners.push(setState);

      return () => {
         const indexOfDispatchForCurrentComp = this.stateListeners.indexOf(setState);
         if (indexOfDispatchForCurrentComp >= 0) {
            this.stateListeners.splice(indexOfDispatchForCurrentComp, 1);
         }
      };
   }, [setState]);

   const dispatch = (action: A) => {
      if (this.reducer) {
         this.state = this.reducer(this.state as S, action);
         for (const listner of this.stateListeners) {
            listner(this.state as S);
         }
      }
   };

   return [this.state as any, dispatch ] as const;
};


  // Add methods to get and update state here
}

// Usage:

export default  new Store();