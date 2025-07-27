"use client";
import React, { useState } from "react";


export default function CommentsSection() {
    // Main list of comments
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "مینا",
            avatar: "https://i.pravatar.cc/40?u=1",
            date: "۲۰۲۵/۰۷/۲۷",
            text: "خیلی عالی بود، ممنون از محصول خوبتون!",
            replies: [],
        },
    ]);

    // New top-level comment input state
    const [newCommentText, setNewCommentText] = useState("");

    // ID of comment being replied to (null if none)
    const [replyingTo, setReplyingTo] = useState(null);

    // Input state for current reply
    const [replyText, setReplyText] = useState("");

    // Submit a new top-level comment
    const handleAddComment = (e) => {
        e.preventDefault();
        if (!newCommentText.trim()) return;

        const newComment = {
            id: Date.now(),
            author: "کاربر ناشناس",
            avatar: `https://i.pravatar.cc/40?u=${Date.now()}`,
            date: new Date().toLocaleDateString("fa-IR"),
            text: newCommentText.trim(),
            replies: [],
        };

        setComments([newComment, ...comments]);
        setNewCommentText("");
    };

    // Toggle reply form visibility for a comment
    const handleReplyClick = (commentId) => {
        if (replyingTo === commentId) {
            setReplyingTo(null); // Close if already open
        } else {
            setReplyingTo(commentId);
            setReplyText("");
        }
    };

    // Submit reply to a specific comment
    const handleSendReply = (e, commentId) => {
        e.preventDefault();
        if (!replyText.trim()) return;

        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.id === commentId
                    ? {
                        ...comment,
                        replies: [
                            ...comment.replies,
                            {
                                id: Date.now(),
                                author: "کاربر ناشناس",
                                avatar: `https://i.pravatar.cc/40?u=${Date.now()}`,
                                date: new Date().toLocaleDateString("fa-IR"),
                                text: replyText.trim(),
                            },
                        ],
                    }
                    : comment
            )
        );

        setReplyingTo(null);
        setReplyText("");
    };

    return (
        <section className="bg-white dark:bg-[#1F273A] rounded-3xl shadow-xl p-8 mx-auto mt-8">
            {/* Section Title */}
            <h2 className="text-3xl font-extrabold mb-2 border-b-2 border-yellow-500 pb-2 text-gray-900 dark:text-white">
                نظرات کاربران
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                تعداد نظرات: {comments.length}
            </p>

            {/* Comment List */}
            <div className="space-y-5 max-h-80 overflow-y-auto mb-8 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-200 dark:scrollbar-track-[#1E263A] dark:scrollbar-thumb-yellow-700">
                {comments.map((comment) => (
                    <article
                        key={comment.id}
                        className="border border-gray-300 dark:border-gray-700 rounded-2xl p-5 bg-gray-50 dark:bg-[#1E263A] shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Comment Header */}
                        <header className="flex items-center gap-3 mb-2">
                            <img
                                src={comment.avatar}
                                alt="avatar"
                                className="w-10 h-10 rounded-full object-cover border-2 border-yellow-500"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                                    {comment.author}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                                    {comment.date}
                                </p>
                            </div>
                        </header>

                        {/* Comment Text */}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                            {comment.text}
                        </p>

                        {/* Reply Toggle Button */}
                        <button
                            className="text-yellow-500 font-semibold text-sm hover:underline"
                            onClick={() => handleReplyClick(comment.id)}
                        >
                            {replyingTo === comment.id ? "بستن فرم پاسخ" : "پاسخ دادن"}
                        </button>

                        {/* Reply Form */}
                        {replyingTo === comment.id && (
                            <form
                                className="mt-3 space-y-2"
                                onSubmit={(e) => handleSendReply(e, comment.id)}
                                autoComplete="off"
                            >
                                <textarea
                                    rows="2"
                                    placeholder="پاسخ خود را بنویسید..."
                                    required
                                    className="w-full rounded-xl border border-gray-600 dark:border-yellow-600 p-3 text-gray-800 dark:text-yellow-100 bg-gray-100 dark:bg-[#252E48] focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300 placeholder-gray-500 dark:placeholder-white resize-none"
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-1 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-yellow-700 transition"
                                >
                                    ارسال پاسخ
                                </button>
                            </form>
                        )}

                        {/* Replies */}
                        {comment.replies.length > 0 && (
                            <div className="mt-4 space-y-4 pr-8 border-r-2 border-yellow-500">
                                {comment.replies.map((reply) => (
                                    <article
                                        key={reply.id}
                                        className="border border-gray-300 dark:border-gray-700 rounded-2xl p-4 bg-gray-100 dark:bg-[#2C3659] shadow-sm"
                                    >
                                        <header className="flex items-center gap-3 mb-1">
                                            <img
                                                src={reply.avatar}
                                                alt="avatar"
                                                className="w-8 h-8 rounded-full object-cover border-2 border-yellow-400"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white text-md">
                                                    {reply.author}
                                                </h4>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                    {reply.date}
                                                </p>
                                            </div>
                                        </header>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {reply.text}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>

            {/* New Comment Form */}
            <form
                onSubmit={handleAddComment}
                className="space-y-6"
                autoComplete="off"
            >
                <div>
                    <label
                        htmlFor="commentText"
                        className="block mb-1 font-semibold text-gray-900 dark:text-white"
                    >
                        نظر شما
                    </label>
                    <textarea
                        id="commentText"
                        rows="4"
                        placeholder="نظر خود را بنویسید..."
                        required
                        className="w-full rounded-xl border border-gray-600 dark:border-yellow-600 p-3 text-gray-800 dark:text-yellow-100 bg-gray-100 dark:bg-[#252E48] focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300 placeholder-gray-500 dark:placeholder-white resize-none"
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white rounded-full font-bold text-sm shadow-md hover:shadow-yellow-600/50 transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!newCommentText.trim()}
                >
                    ثبت نظر
                </button>
            </form>
        </section>
    );
}
