import Link from 'next/link'
import Navbar from '../../components/Navbar'

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    return { props: { data } }
}

const Blogs = ({ data }) => {
    return (
        <>
            < Navbar />
            <main>
                <h1 className='bloglist-title'>
                    Blog list app
                </h1>
                <div>
                    {data.map((blog) => {
                        return (
                            <div className="blog" key={blog.id}>
                                <Link href={`/blogs/${blog.id}`} >
                                    <div className='blog-div'>
                                        <h2 className='blog-id'>{`${blog.id}.`}</h2>
                                        <h2>{blog.title}</h2>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>

    )
}

export default Blogs;