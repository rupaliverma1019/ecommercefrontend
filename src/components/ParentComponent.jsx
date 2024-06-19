import React, { useState } from 'react';
import ChangeUserRole from '../components/ChangeUserRole';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Change User Role Modal</button>
      {isModalOpen && (
        <ChangeUserRole
          username="JohnDoe"
          email="john@example.com"
          role="user"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ParentComponent;
