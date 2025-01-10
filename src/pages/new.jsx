import { Link } from "react-router";

function NewPage() {
    function submitHandler(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObject)
        }

        console.log(formDataObject);

        const response = fetch('/api/quacks', fetchOptions);
    }

    return (
        <>
            <header>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new">Create new blog</Link></li>
                </nav>
            </header>
            <form onSubmit={submitHandler}>
                <input type="text" name="title" placeholder="Title..." />
                <textarea name="text" placeholder="Message..."></textarea>
                <input type="submit" value="Send" />
            </form>
        </>
    );
}

export default NewPage;