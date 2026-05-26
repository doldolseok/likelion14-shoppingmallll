/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const DeleteModalContext = createContext();

export function DeleteModalProvider({ children }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <DeleteModalContext.Provider value={{ showDeleteModal, setShowDeleteModal }}>
            {children}
        </DeleteModalContext.Provider>
    );
}

export function useDeleteModal() {
    return useContext(DeleteModalContext);
}