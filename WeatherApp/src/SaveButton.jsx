import React from 'react';

const SaveButton = ({ showSaveButton, handleSaveCity }) => {
    return (
        <div>
            {showSaveButton && (
                <button className="plus" onClick={handleSaveCity}>Save</button>
            )}
        </div>
    );
};

export default SaveButton;
