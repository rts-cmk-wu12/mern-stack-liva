import { Link, useParams } from "react-router";

function EditPage({  }) {
    const { id } = useParams();

    function saveHandler(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());

        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObject)
        }

        console.log(formDataObject);

        fetch(`/api/quacks/${id}`, fetchOptions);
    }

    return (
        <>
            <header>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new">Create new blog</Link></li>
                </nav>
            </header>
            <form onSubmit={saveHandler}>
                <input type="text" name="title" placeholder="Title..." />
                <textarea name="text" placeholder="Message..."></textarea>
                <input type="submit" value="Update" />
            </form>
        </>
    );
}

export default EditPage;