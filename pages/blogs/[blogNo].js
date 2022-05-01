import { useRouter } from 'next/router'
import { API_ROOT_URL, DELETE_SUCCESS_MESSAGE } from '../../utils/constants';
import Navbar from "../../components/Navbar";

export const getStaticPaths = async () => {
    const res = await fetch(API_ROOT_URL);
    const data = await res.json();

    const paths = data.map((curElem) => {
        return {
            params: {
                blogNo: curElem.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.blogNo;
    const res = await fetch(`${API_ROOT_URL}/${id}`);
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};


const Blog = ({ data }) => {
    const router = useRouter()
    const handleDelete = (id) => {
        fetch(`${API_ROOT_URL}/${id}`, { method: 'DELETE' })
            .then(response => response.text())
            .then(result => {
                alert(DELETE_SUCCESS_MESSAGE);
                router.back()

            })
            .catch(error => console.log('error', error));
    }

    const { id, title, body } = data;
    return (
        <>
            <Navbar />
            <div className="blog blog-inside">
                <h3>{id}</h3>
                <h2>{title}</h2>
                <p>{body}</p>
                <button
                    type="submit"
                    onClick={() => handleDelete(id)}
                    className="button delete-button">
                    Delete
                </button>
            </div>
        </>
    );
};

export default Blog;