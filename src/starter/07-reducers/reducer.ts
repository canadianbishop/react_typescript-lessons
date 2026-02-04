
export type CounterState = {
      count: number,
      status : string
}

export const initialState:CounterState = {
      count: 0,
      status:'pending'
}

type updateCountAction = {
      type: 'increament' | 'decreament' | 'reset'
};

type CounterAction = updateCountAction | SetStatusAction;


type SetStatusAction = {
      type: 'setStatus',
      payload : 'active' | 'inactive'
}


export function counterReducer(state:CounterState, action:CounterAction): CounterState{
  switch (action.type){
      case 'increament':
            return { ...state, count: state.count + 1 };

       case 'decreament':
            return {...state, count: state.count + 1 };
      case 'reset':
            return {...state,count: 0 };

      case 'setStatus':
            return {...state, status:action.payload}      

      default:
            const unhandledActionType:  never = action
            throw new Error (`unexpected action ${unhandledActionType}`)
  }
}