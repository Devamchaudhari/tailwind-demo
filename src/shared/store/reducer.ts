// import * as actionTypes from 'store/actionTypes';
import * as actionTypes from 'shared/store/action';
import { IAction } from 'shared/store/state';
import { ILoginData, IUserData } from 'shared/interface/state';

const initialState = {
	userDetails: {} as ILoginData
};

const reducer = (state: IUserData = initialState, action: IAction): IUserData => {
	switch (action.type) {
		case actionTypes.USER_DETAILS:
			return {
				...state,
				userDetails: action.payload
			};
		default:
			return state;
	}
};
export default reducer;
