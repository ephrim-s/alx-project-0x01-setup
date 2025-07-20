import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl mb-4">Posts</h1>
        <p>This is the Posts page.</p>
      </main>
    </>
  );
};

export default PostsPage;
