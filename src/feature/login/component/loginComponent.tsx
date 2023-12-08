import { useCallback } from 'react';
import * as action from 'shared/store/action';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createAction } from 'shared/util/utility';

const LoginComponent = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = useCallback(
        (data: any, e: any) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: data.email, password: data.password })
            };
            e.preventDefault();
            fetch('http://192.168.0.12/jobhunt_api/public/api/login', requestOptions).then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                let userData = JSON.parse(localStorage.getItem('userData') || '{}');
                userData = data.data;
                localStorage.setItem('userData', JSON.stringify(userData));
                dispatch(createAction(action.USER_DETAILS, userData));
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
                .catch(error => {
                    console.error('There was an error!', error);
                });;
        },
        [],
    );

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm py-10">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Email-Id</label>
                        <div className="mt-2">
                            <input type="email" placeholder="Enter your email-id" {...register('email', { required: true })} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2' />
                            {errors.email && <p> Please enter your email-id.</p>}
                        </div>
                        <label className='block text-sm font-medium leading-6 text-gray-900 mt-4'>Password</label>
                        <div className="mt-2">
                            <input type="password" placeholder="Enter your password" {...register('password', { required: true })} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2' />
                            {errors.password && <p> Please enter your password</p>}
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Or
                    </p>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md border border-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-blue-600 shadow-sm hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-2">Start a 14 day free trial</a>
                </p>
            </div>
        </div>
    );
};

export default LoginComponent;