import { useEffect, useState } from "react";
import { Link } from "react-router";

function IndexPage({  }) {
    const [quacks, setQuacks] = useState([]);

    useEffect( () => {
        async function fetchQuacks() {
            const response = await fetch('/api/quacks/latest');
            const data = await response.json();

            setQuacks(data);
        }

        fetchQuacks();
    });

    return (
        <>
        <header>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/new">Create new blog</Link></li>
            </nav>
        </header>
        <h1>Homepage</h1>
        <p>Here you can see all blogs.</p>
        {quacks.map((quack, index) => <Link to={`/details/${quack._id}`} key={index}>{quack.title}</Link>)}
        </>
    );
}

export default IndexPage;