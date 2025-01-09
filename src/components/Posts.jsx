import { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const postsUrl = 'http://localhost:8000/api/posts'
    const fetchPosts = async () => {

        try {
            const response = await axios.get(postsUrl)
            setPosts(response.data)
            console.log(posts)
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
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8000/api/posts", formData);
          alert("Post créé avec succès !");
          console.log(response.data);
        } catch (error) {
          console.error("Erreur lors de la création du post :", error);
          alert("Une erreur est survenue. Vérifiez les données et réessayez.");
        }
      };


    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2"> 
                <div>
                    <label htmlFor="title" className="block font-bold">Titre :</label>
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
                    <label htmlFor="body" className="block font-bold">Contenu :</label>
                    <textarea
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
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
                    Ajouter le Post
                </button>

                
            </form>
            <div className="mt-4 flex flex-col gap-2">
            {posts.map(post => (
                <div className="border-purple-400 border-2 p-4 rounded-lg flex flex-col items-center max-w-96"  key={post._id}>
                    <h1 className="text-xl font-bold uppercase">{post.body}</h1>
                    <p className="italic text-purple-600">{post.date}</p>
                    {post.userId && <p>{post.userId.first_name}</p> }
                </div>
            ))}
        </div>
    </>
    )        
}


export default Posts