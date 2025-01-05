import Link from 'next/link';

const Home = () => (
    <div className="p-4">
        <h1 className="text-xl font-bold">Welcome to the Combo App</h1>
        <nav className="mt-4">
            <ul>
                <li>
                    <Link href="/characters">
                        <span className="text-blue-500">Characters</span>
                    </Link>
                </li>
                <li>
                    <Link href="/combos">
                        <span className="text-blue-500">Combos</span>
                    </Link>
                </li>
                <li>
                    <Link href="/search">
                        <span className="text-blue-500">Search</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Home;
