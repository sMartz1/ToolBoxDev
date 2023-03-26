import React, { useState, useEffect } from "react";
import NewLinkModal from "./NewLinkModal";
import NewEnvironmentModal from "./NewEnvironmentModal";
export default function CustomModal({
    data,
    isModalOpen,
    setIsModalOpen,
    linkIndex,
    envIndex,
    updateData,
    isEdit,
    isEnvironmentModal,
}) {
    return (
        <>
            {isEnvironmentModal ? (
                <NewEnvironmentModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    data={data}
                    linkIndex={linkIndex}
                    envIndex={envIndex}
                    updateData={updateData}
                    isEdit={isEdit}
                />
            ) : (
                <NewLinkModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    data={data}
                    linkIndex={linkIndex}
                    envIndex={envIndex}
                    updateData={updateData}
                    isEdit={isEdit}
                />
            )}
        </>
    );
}
