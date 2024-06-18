import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LearnButtons from '../../components/LearnButtons/LearnButtons';
import styles from './LearnBlogs.module.scss';

const LearnBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          // 'https://www.googleapis.com/blogger/v3/blogs/BLOG_ID/posts',
          'https://www.googleapis.com/blogger/v3/blogs/blogId',
          {
            params: {
              key: 'AIzaSyD4EAqbs27ISCW4JPzlKgGg6wbEoRARCpM',
              maxResults: 10, // Number of posts to fetch
            },
          }
        );
        setBlogs(response.data.items);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={styles.learnblogs}>
      <LearnButtons />
      {blogs.map((blog) => (
        <div key={blog.id} className={styles.blogContainer}>
          <img className={styles.blogImg} src={blog.images[0]?.url} alt={blog.title} />
          <div className={styles.blog}>
            <h2 className={styles.blogTitle}>{blog.title}</h2>
            <p className={styles.blogContent}>{blog.contentSnippet}</p>
            <a href={blog.url} target="_blank" rel="noopener noreferrer" className={styles.readMore}>Read More</a>
          </div>
        </div>
      ))}
      <div className={styles.extension}></div>
    </div>
  );
};

export default LearnBlogs;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import LearnButtons from '../../components/LearnButtons/LearnButtons';
// import styles from './LearnBlogs.module.scss';

// const LearnBlogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get(
//           // 'https://www.googleapis.com/blogger/v3/blogs/BLOG_ID/posts',
//           'https://www.googleapis.com/blogger/v3/blogs/blogId',
//           {
//             params: {
//               key: 'YOUR-API-KEY',
//               maxResults: 10, // Number of posts to fetch
//             },
//           }
//         );
//         setBlogs(response.data.items);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className={styles.learnblogs}>
//       <LearnButtons />
//       {blogs.map((blog) => (
//         <div key={blog.id} className={styles.blogContainer}>
//           <img className={styles.blogImg} src={blog.images[0]?.url} alt={blog.title} />
//           <div className={styles.blog}>
//             <h2 className={styles.blogTitle}>{blog.title}</h2>
//             <p className={styles.blogContent}>{blog.contentSnippet}</p>
//             <button onClick={() => window.location.href = blog.url} className={styles.readMore}>Learn More</button>
//           </div>
//         </div>
//       ))}
//       <div className={styles.extension}></div>
//     </div>
//   );
// };

// export default LearnBlogs;
