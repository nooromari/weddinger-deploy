import ProvideService from './ProviderService'

export default () => {
    return (
        <>
        <div className="flex flex-wrap w-3/12 h-screen bg-gray-100">
            <div className="w-full p-3 bg-white rounded shadow-lg">
                <div className="flex items-center p-2 mb-5 space-x-4">
                    <img className="h-12 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="James Bhatta" />
                    <div>
                        <h4 className="text-lg font-semibold tracking-wide text-gray-700 capitalize font-poppins">James Bhatta</h4>
                        <span className="flex items-center space-x-1 text-sm tracking-wide">
                            <svg className="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg><span className="text-gray-600">Verified</span>
                        </span>
                    </div>
                </div>
                <ul className="space-y-2 text-sm">
                    <li>
                        <a href="#" className="flex items-center p-2 space-x-3 font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/serviceProvider/ServiceAdd" className="flex items-center p-2 space-x-3 font-medium text-gray-700 rounded-md hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                            </span>
                            <span>Add Service</span>
                        </a>
                    </li>
                
                    <li>
                        <a href="#" className="flex items-center p-2 space-x-3 font-medium text-gray-700 rounded-md hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span>My profile</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="flex items-center p-2 space-x-3 font-medium text-gray-700 rounded-md hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </span>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
        </>
    )
}