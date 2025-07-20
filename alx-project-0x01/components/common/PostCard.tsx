import React from 'react';

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
