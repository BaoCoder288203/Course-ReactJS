import { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading';

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [btnComments, setBtnComments] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data); 
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        setLoading(true);
      });
  }, []);

  const fetchComments = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(response => response.json())
    .then(data => {
      setComments({ ...comments, [id]: data });
    })
  }
  const toggleComments = (id) => {
    setBtnComments((prev) => ({...prev, [id]: !prev[id]})); 
  };
  return (
    <>
      <h2 style={{ fontSize: 25 }}>List of Posts</h2>
      {loading ? <Loading /> : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => {
                fetchComments(post.id); 
                toggleComments(post.id);
              }}>
              {btnComments[post.id] ? "Ẩn Bình Luận" : "Xem Bình Luận"}
              </button>
                {btnComments[post.id] && comments[post.id] ? (
                    <div style={{
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      padding: '10px',
                      marginBottom: '10px',
                      backgroundColor: '#f9f9f9',
                      height: '200px',
                      overflowY: 'scroll'
                    }}>
                  {comments[post.id].map((cmt) => (
                        <div key={cmt.id} style={{ marginBottom: '10px' ,border:'1px solid black'}}>
                          <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>{cmt.name}</h4>
                          <p style={{ fontSize: '12px', margin: '0 0 8px 0', color: '#555' }}>{cmt.email}</p>
                          <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#444' }}>{cmt.body}</p>
                        </div>
                      ))}
                    </div>
                  ) : ""
                }
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
