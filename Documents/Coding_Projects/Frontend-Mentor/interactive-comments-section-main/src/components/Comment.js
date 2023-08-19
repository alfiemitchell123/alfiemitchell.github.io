import React from "react";
import ReplyIcon from "./ReplyIcon";
import Score from "./Score";

const Comment = ({ content, createdAt, score, replyingTo, user, replies }) => {
    const commentContainerClass = replyingTo ? "bg-white m-4 p-4 rounded-md" : "bg-white m-4 p-4 rounded-md";

    return (
        <div className="relative">
            <div className={commentContainerClass}>
                <div className="userInfo inline-flex gap-4">
                    <img className="w-8" src={user.image.png} alt={`Profile of ${user.username}`} />
                    <h4 className="text-darkBlue font-medium">{user.username}</h4>
                    <p className="text-grayishBlue">{createdAt}</p>
                </div>
                {replyingTo && <span className="text-moderateBlue font-medium inline mr-1">@{replyingTo}</span>}
                <p className="text-grayishBlue">{content}</p>

                <div className="flex items-center mt-4">

                    <Score score={score} />

                    <div className="flex-grow"></div>

                    <div className="flex items-center">
                        <ReplyIcon className="" />
                        <span className="text-moderateBlue font-medium ml-2">Reply</span>
                    </div>
                </div>
            </div>

            {replies && (
                <div className="ml-4 border-l-2 border-lightGray">
                    {replies.map(reply => (
                        <Comment
                            key={reply.id}
                            isReply
                            {...reply}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Comment;