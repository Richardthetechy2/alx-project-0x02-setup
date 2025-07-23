import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [posts, setPosts] = useState<CardProps[]>([])
  const handleAddPost = (post: CardProps) => {
    setPosts([post, ...posts])
  }
  return (
    <div>
      <Header  />
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <button
        className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        onClick={() => setModalOpen(true)}
      >
        Add Post
      </button>
      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      {posts.length === 0 && (
        <p className="text-gray-500">No posts yet.</p>
      )}
      <ul className="w-full max-w-xl space-y-4">
        {posts.map((post, idx) => (
          <li key={idx}>
            <Card title={post.title} content={post.content} />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Home;
