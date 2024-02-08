import { useEffect, useState } from "react";
import queryManagerInstance from "../graphql/queryManagerInstance";

import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import Post from "../components/Post";
import Spinner from "../components/Spinner";

export default function Wrapper(props: any) {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: "", content: "" });

    useEffect(() => {
        document.title = props.title;
        fetchPosts();
    }, [props.title]);

    const fetchPosts = async () => {
        const postsData = await queryManagerInstance.getPosts();
        setPosts(postsData);
    };

    const formatDate = (dateString: string, lang: string = "fr-FR") => {
        const options : Intl.DateTimeFormatOptions = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
        };
        const formattedDate = new Date(dateString).toLocaleDateString(lang, options);
        return formattedDate;
    };

    const addPost = async () => {
        await queryManagerInstance.createPost(newPost.title, newPost.content);
        setNewPost({ title: "", content: "" });
        fetchPosts();
    };

    return (
    <>
        <div className="container">
            
            <div className="row">

                <div className="col-md-12 text-center pt-4">

                    <h1>Twitter de Thomas</h1>

                </div>

                <div className="col-md-12 text-center pt-4">

                    <div className="col-md-6 mx-auto">

                        <Input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Titre"
                            value={newPost.title}
                            onChange={(e: any) => setNewPost({ ...newPost, title: e.target.value })}
                        />

                    </div>

                    <div className="col-md-6 mx-auto">

                        <Textarea
                            placeholder="Contenu"
                            rows="4"
                            value={newPost.content}
                            onChange={(e: any) => setNewPost({ ...newPost, content: e.target.value })}
                        />

                    </div>

                    <div className="col-md-6 mx-auto text-start">

                        <Button type="button" color="btn-primary" text="Ajouter un post" onClick={addPost} />

                    </div>

                </div>

                <div className="col-md-12 pt-4">

                    {posts.length === 0 ? (
                        <Spinner />
                    ) : (
                        posts.map((post: any) => (
                            <div key={post.id} className="col-md-6 mx-auto">

                                <Post title={post.title} content={post.content} date={formatDate(post.date)} />

                            </div>
                        ))
                    )}
                </div>

            </div>

        </div>
    </>
    );
}
