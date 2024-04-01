import Image from "next/image";
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/name">Go to Name  Page
      </Link>
    </div>
  );
};

export default HomePage;