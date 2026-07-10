import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";
import "github-markdown-css/github-markdown-dark.css";

export default function MarkdownRenderer({ content }) {

    return (

        <article className="markdown-body !bg-transparent !text-slate-200 max-w-none">

            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
            >

                {content}

            </ReactMarkdown>

        </article>

    );

}