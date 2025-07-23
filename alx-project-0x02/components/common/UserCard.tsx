import { UserCardProps } from "@/interfaces"

const UserCard: React.FC<UserCardProps> = ({users}) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                users.map((user) => (
                    <div 
                    key={user.id} 
                    className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-200"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                                <p className="text-blue-600 font-medium">@{user.username}</p>
                            </div>
                            <span className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                                ID: {user.id}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <h3 className="font-semibold text-gray-700 mb-2">Contact Info</h3>
                                <p className="text-gray-600">📧 {user.email}</p>
                                <p className="text-gray-600">📞 {user.phone}</p>
                                <p className="text-gray-600">🌐 {user.website}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
                                <p className="text-gray-600">{user.address.street}</p>
                                <p className="text-gray-600">{user.address.suite}</p>
                                <p className="text-gray-600">{user.address.city}, {user.address.zipcode}</p>
                                <p className="text-gray-600 text-sm">
                                    📍 {user.address.geo.lat}, {user.address.geo.lng}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <h3 className="font-semibold text-gray-700 mb-2">Contact Info</h3>
                                <p className="text-gray-600">📧 {user.email}</p>
                                <p className="text-gray-600">📞 {user.phone}</p>
                                <p className="text-gray-600">🌐 {user.website}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
                                <p className="text-gray-600">{user.address.street}</p>
                                <p className="text-gray-600">{user.address.suite}</p>
                                <p className="text-gray-600">{user.address.city}, {user.address.zipcode}</p>
                                <p className="text-gray-600 text-sm">
                                    📍 {user.address.geo.lat}, {user.address.geo.lng}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default UserCard;