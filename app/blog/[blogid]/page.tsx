import { Suspense } from "react";

interface BlogIdPageProps {
    params: Promise<{ blogid: string }>;
}


async function BlogIdContent({ params }: BlogIdPageProps) {
    const {blogid}= await params;
    return(
        <div>
            <h1>Hello from the BlogIdPage</h1>
            <p>Blog id is : {blogid}</p>
        </div>
    )
}


export default function BlogIdPage({ params }: BlogIdPageProps) {
    return (
        <Suspense fallback={<p>Loading blog...</p>}>
            <BlogIdContent params={params} />
        </Suspense>
    );
}
