import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{content}</p>
      <span className="text-sm text-gray-400">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
