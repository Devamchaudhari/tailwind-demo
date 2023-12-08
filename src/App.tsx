import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import * as action from 'shared/store/action';
import { IUserData } from 'shared/interface/state';
import Footer from 'shared/component/navigation/footer';
import Layout from 'shared/hoc/layout/component/layout';
import { createAction } from 'shared/util/utility';
import HomePage from 'feature/homePage.tsx/container/homePage';
import Login from 'feature/login/container/login';
import Pricing from 'feature/pricing/container/pricing';
import Blog from 'feature/blog/container/blog';

function App() {
	const dispatch = useDispatch();
	const userDetails = useSelector((state: IUserData) => state.userDetails);

	useEffect(() => {
		const storedUserData = localStorage.getItem('userData');
		if (storedUserData) {
			const userData = JSON.parse(storedUserData);
			dispatch(createAction(action.USER_DETAILS, userData));
		} else {
			dispatch(createAction(action.USER_DETAILS, {}));
		}
	}, [dispatch]);


	return (
		<BrowserRouter>
			{!isEmpty(userDetails) ? <Layout>
				<Routes>
					<Route path='*' element={<Navigate replace to='/homePage' />} />
					<Route path='/homePage' element={<HomePage />} />
					<Route path='/pricing' element={<Pricing />} />
					<Route path='/blog' element={<Blog />} />
				</Routes>
				<Footer />
			</Layout> :
				<Routes>
					<Route path='*' element={<Navigate replace to='/login' />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			}
		</BrowserRouter>
	);
}

export default App;
