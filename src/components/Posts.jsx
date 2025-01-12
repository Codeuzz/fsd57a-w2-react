import { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const postsUrl = 'http://localhost:8000/api/posts'
    const fetchPosts = async () => {
        const token = localStorage.getItem('token')

        try {
            const response = await axios.get(postsUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data)
            setPosts(response.data)
        } catch(err) {
            console.error(err, 'couldnt fetch muics')
        }    
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const [formData, setFormData] = useState({
        title: "",
        body: "",
        userId: ""
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const response = await axios.post("http://localhost:8000/api/posts", formData);
          alert("Post créé avec succès !");
          console.log(response.data)
          fetchPosts();
        } catch (error) {
          console.error("Erreur lors de la création du post :", error);
          alert("Une erreur est survenue. Vérifiez les données et réessayez.");
        }
      };

      const deletePost = async (postId) => {
        try {
            const response = await axios.delete(`${postsUrl}/${postId}`)
            setPosts(prevPost => prevPost.filter(post => post._id !== postId))
        } catch(error) {
            console.error(error, "problem deleting the music")
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2"> 
                <div>
                    <label htmlFor="title" className="block font-bold">Title :</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="body" className="block font-bold">Content :</label>
                    <textarea
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    className="border rounded p-2 w-full text-black"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="userId" className="block font-bold">User ID :</label>
                    <input
                    type="text"
                    id="userId"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    required
                    />
                </div>

                <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                    Post the post
                </button>

                
            </form>
            <div className="mt-4 flex flex-col gap-2">
            {posts.map(post => (
                <div className="border-purple-400 border-2 p-4 rounded-lg flex flex-col items-center max-w-96"  key={post._id}>
                    <h1 className="text-xl font-bold uppercase">{post.body}</h1>
                    <p className="italic text-purple-600">{post.date}</p>
                    {post.userId && <p>{post.userId.first_name}</p> }
                    <button 
                        onClick={(e) => {
                            e.preventDefault()
                            deletePost(post._id)
                        }}
                        className="bg-red-600 px-2 py-1 rounded-xl"
                    >Delete</button>
                </div>
            ))}
        </div>
    </>
    )        
}


export default Posts