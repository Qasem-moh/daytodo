import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import BasicExample from "./Spinner";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="blog-details">
            { isPending && <div>{<BasicExample/>}</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
            {/*<h4>{'http://localhost:8000/blogs/' + id}</h4>*/}
        </div>
    );
}

export default BlogDetails;