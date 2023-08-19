import React, { useState } from "react";
import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";

const Score = ({ score }) => {
    const [handleScore, setHandleScore] = useState(score);

    const handlePlusClick = () => {
        if (handleScore < score) {
            setHandleScore(handleScore + 1);
        }
    }

    const handleMinusClick = () => {
        if (handleScore > 0) {
            setHandleScore(handleScore - 1);
        }
    }

    return (
        <div className="inline-flex items-center bg-lightGray rounded-lg px-3 p-1">
            <PlusIcon className="cursor-pointer" handlePlusClick={handlePlusClick} />
            <span className="px-4 text-moderateBlue font-medium">{handleScore}</span>
            <MinusIcon className="cursor-pointer" handleMinusClick={handleMinusClick} />
        </div>
    )
}

export default Score;