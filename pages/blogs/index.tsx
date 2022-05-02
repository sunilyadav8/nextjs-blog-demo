import Link from "next/link";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Navbar from "../../components/Navbar";
import { Blog } from "../../utils/types";
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { props: { data } };
};

const Blogs: NextPage<{ data: Array<Blog> }> = ({ data: blogs }) => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="bloglist-title">Blog list app</h1>
        <div>
          {blogs.map((blog) => {
            return (
              <div className="blog" key={blog.id}>
                <Link href={`/blogs/${blog.id}`} passHref>
                  <div className="blog-div">
                    <h2 className="blog-id">{`${blog.id}.`}</h2>
                    <h2>{blog.title}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Blogs;
