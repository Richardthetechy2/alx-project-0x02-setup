import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces"
import { useEffect, useState } from "react"

const User: React.FC = () => {
    const [users, setUsers]  = useState<UserProps[]>([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const  getStaticProps = async ()  => {
            try {

                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const users = await response.json()
                setUsers(users)
                setLoading(false)
            } catch (e) {
                console.error(e)
                setLoading(false)
            }
        }
        getStaticProps()
    }, [])
    if (loading) {
        return (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Loading Users...</h1>
            <div className="max-w-4xl mx-auto space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border rounded-lg shadow-md p-6 bg-white animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <UserCard users={users} />
                </div>
            </div>
        </div>
    )
}

export default User;