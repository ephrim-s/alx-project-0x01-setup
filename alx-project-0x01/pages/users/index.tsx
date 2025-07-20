import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl mb-4">Users</h1>
        <p>This is the users page content.</p>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
