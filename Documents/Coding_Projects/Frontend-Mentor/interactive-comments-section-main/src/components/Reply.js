import React from "react";
import Comment from "./Comment";

const Reply = ({ replies }) => {
    return (
        { replies && replies.map(reply => (
            <Comment
                key={reply.id}
                isReply
                {...reply}
            />
        ))}
    )  
}