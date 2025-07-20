import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl mb-4">Users</h1>
        <p>This is the Users page.</p>
      </main>
    </>
  );
};

export default UsersPage;
