import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils/contif";

export interface Blog {
    "content": string;
    "title": string;
    "id": number;
    "author": {
        "name": string;
    };
    "publishedDate": string;
    "imageUrl": string;
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                setBlog(response.data.post);
                setLoading(false);

            } catch (err) {
                console.error("Error fetching blog:", err);
                setError(err instanceof Error ? err : new Error('An error occurred'));
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    return {
        loading,
        blog,
        error
    };
};

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                console.log(response);
                setBlogs(response.data.posts);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError(err instanceof Error ? err : new Error('An error occurred'));
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return {
        loading,
        blogs,
        error
    };
};