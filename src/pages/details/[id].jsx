import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function DetailsPage({ }) {
    const [details, setDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchDetails() {
            const response = await fetch(`/api/quacks/${id}`);
            const data = await response.json();
            
            setDetails(data);
        }

        fetchDetails();
    }, []);

    async function handleDelete(id) {
        const response = await fetch(`/api/quacks/${id}`, { method: 'DELETE' });
        if (response.ok) {
            console.log(`Blog with id ${id} deleted`);
        } else {
            console.error(`Failed to delete blog with id ${id}`);
        }
    }

    return (
        <>
            <header>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new">Create new blog</Link></li>
                </nav>
            </header>
            {details ? (<div>
                <h1>{details.title}</h1>
                <p>{details.text}</p>
                <button onClick={() => handleDelete(details._id)}>Delete blog</button>
                <Link to={`/edit/${details._id}`}>Edit blog</Link>
            </div>) : (<p>Loading...</p>)}
        </>
    );
}

export default DetailsPage;