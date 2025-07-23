import PostCard from "@/components/common/PostCard"
import Header from "@/components/layout/Header"
import { PostProps } from "@/interfaces"
import { useEffect, useState } from "react"

const Post: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {

        const getStaticProps = async () => {
            try {
                const response = await fetch('/dummy-posts.json')
                const data: PostProps[] = await response.json()
                setPosts(data)
                setLoading(false)
            } catch (error) {
                console.error('Error loading dummy posts:', error);
                setLoading(false);
            }
        }
        getStaticProps()
    }, [])
    if (loading) {
        return (
            <>
            <Header />
            <div className="container mx-auto px-4 py-8">
                
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Loading Posts...</h1>
                <div className="max-w-3xl mx-auto space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="border rounded-lg shadow-md p-6 bg-white animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </>
        );
      }  
    return (
        <>
        <Header />
        <div className="grid grid-cols-3 gap-2 p-4">
            {
                posts.map((post, key) => (
                    <PostCard key={key} title={post.title} content={post.content} userId={post.userId}/>
                ))
            }
        </div>
        </>
    )
}

export default Post;