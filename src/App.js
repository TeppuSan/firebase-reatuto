import './App.css';
import {db} from './firebase';
import { useEffect, useState } from 'react';
import { doc, collection, getDocs, onSnapshot } from 'firebase/firestore';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      //データベースからデータを取得する
      const postData = collection(db, 'posts');
      getDocs(postData).then((snapshot) => {
        // console.log(snapshot.docs.map((doc) => ({...doc.data})));
        setPosts(snapshot.docs.map((doc) => ({...doc.data})));
      });

      onSnapshot(postData,(post) => {
        setPosts(post.docs.map((doc) => ({...doc.data})));
      })

    }, []);
  return (
  <div className="App">
    <div>
    {posts.map((post) => (
      <div key={post.title}>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
      </div>
    ))}
    </div>
  </div>
  );
}

// // export default App;
// import './App.css';
// // import db from './firebase';
// import {db} from './firebase';

// import { useEffect, useState } from 'react';
// import { doc, collection, getDocs, onSnapshot } from 'firebase/firestore';

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // データベースからデータを取得する
//     const postData = collection(db, 'posts');
//     getDocs(postData).then((snapshot) => {
//       setPosts(snapshot.docs.map((doc) => ({ ...doc.data() })));
//     });
//     onSnapshot(postData, (post) => {
//       setPosts(post.docs.map((doc) => ({ ...doc.data() })));
//     });
//   }, []);

//   return (
//     <div className="App">
//       <div>
//         {posts.map((post) => (
//           <div key={post.title}>
//             <h1>{post.title}</h1>
//             <p1>{post.text}</p1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default App;
