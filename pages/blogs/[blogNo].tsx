import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import type { NextPage } from "next";
import { API_ROOT_URL, DELETE_SUCCESS_MESSAGE } from "../../utils/constants";
import Navbar from "../../components/Navbar";
import { Blog } from "../../utils/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(API_ROOT_URL);
  const data = await res.json();

  const paths = data.map((curElem: Blog) => {
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

export const getStaticProps: GetStaticProps = async (context: {
  [key: string]: any;
}) => {
  const id = context.params.blogNo;
  const res = await fetch(`${API_ROOT_URL}/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Blog: NextPage<{ data: Blog }> = ({ data }) => {
  const router = useRouter();
  const handleDelete = (id: number) => {
    fetch(`${API_ROOT_URL}/${id}`, { method: "DELETE" })
      .then((response) => response.text())
      .then((result) => {
        alert(DELETE_SUCCESS_MESSAGE);
        router.back();
      })
      .catch((error) => console.log("error", error));
  };

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
          className="button delete-button"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Blog;
