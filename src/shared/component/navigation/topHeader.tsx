import { Fragment, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as action from 'shared/store/action';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAVIGATION } from 'shared/constant/constant';
import { createAction } from 'shared/util/utility';


export const TopHeader = () => {
	const urlPath = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const logout = () => {
		localStorage.removeItem('userData');
		navigate('/login');
		dispatch(createAction(action.USER_DETAILS, {}));
	};

	return (
		<Disclosure as="nav" className="bg-gray-800 fixed w-full z-10">
			{({ open }: any) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="h-8 w-auto"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
										alt="Your Company"
									/>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{NAVIGATION.map((item) => (
											<div key={item.name} className="relative">
												{item.submenu ? (
													<Disclosure>
														{() => (
															<>
																<Disclosure.Button
																	as={Link}
																	to={item.href}
																	className={
																		`${urlPath.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
																		rounded-md px-3 py-2 text-sm font-medium`
																	}
																	aria-expanded={isOpen}
																	aria-controls={`submenu-${item.name.toLowerCase()}`}
																	onClick={() => { setIsOpen(!isOpen); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
																	aria-current={urlPath.pathname === item.href ? 'page' : undefined}
																>
																	{item.name}
																</Disclosure.Button>
																{isOpen && <div className="absolute z-10 left-0 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
																	<div className="space-y-1 px-2">
																		{item.submenu.map((subItem) => (
																			<Link
																				key={subItem.name}
																				to={subItem.href}
																				onClick={() => setIsOpen(false)}
																				className={`
																				${subItem.name === subItem.name ? 'bg-gray-100' : ''}
																					block px-4 py-2 text-sm text-gray-700
																				`}
																			>
																				{subItem.name}
																			</Link>
																		))}
																	</div>
																</div>}
															</>
														)}
													</Disclosure>
												) : (
													<Link
														to={item.href}
														className={`${urlPath.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
															rounded-md px-3 py-2 text-sm font-medium
														`}
														onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
														aria-current={urlPath.pathname === item.href ? 'page' : undefined}
													>
														{item.name}
													</Link>
												)}
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="absolute -inset-1.5" />
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">Open user menu</span>
											<img
												className="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }: any) => (
													<Link
														to="#"
														className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 `}
													>
														Your Profile
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }: any) => (
													<Link
														to="#"
														className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
													>
														Settings
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }: any) => (
													<p
														className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 `}
														onClick={logout}
													>
														Sign out
													</p>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>

						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
							{NAVIGATION.map((item) => (
								<Fragment key={item.name}>
									{item.submenu ? (
										<Disclosure>
											{() => (
												<>
													<Disclosure.Button
														as={Link}
														to={item.href}
														className={`
															${urlPath.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
															rounded-md px-3 py-2 text-sm font-medium relative
														`}
														onClick={() => { setIsOpen(!isOpen); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
														aria-current={urlPath.pathname === item.href ? 'page' : undefined}
													>
														{item.name}
													</Disclosure.Button>
													<Disclosure.Panel className="absolute z-10 left-16 bottom-[-30px] mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
														<div className="space-y-1 px-2">
															{item.submenu.map((subItem) => (
																<Link
																	key={subItem.name}
																	to={subItem.href}
																	className={`
																	${subItem.name === subItem.name ? 'bg-gray-100' : ''}
																		block px-4 py-2 text-sm text-gray-700
																	`}
																>
																	{subItem.name}
																</Link>
															))}
														</div>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									) : (
										<Link
											to={item.href}
											className={`
											${urlPath.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
												rounded-md px-3 py-2 text-sm font-medium
											`}
											onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
											aria-current={urlPath.pathname === item.href ? 'page' : undefined}

										>
											{item.name}
										</Link>
									)}
								</Fragment>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};
