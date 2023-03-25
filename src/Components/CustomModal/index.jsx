import React, { useState, useEffect } from "react";
import NewLinkModal from "./NewLinkModal";
export default function CustomModal({
    data,
    isModalOpen,
    setIsModalOpen,
    linkIndex,
    envIndex,
    updateData,
    isEdit
}) {
    return (
        <>
            <NewLinkModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                data={data}
                linkIndex={linkIndex}
                envIndex={envIndex}
                updateData={updateData}
                isEdit={isEdit}
            />
        </>
    );
}
