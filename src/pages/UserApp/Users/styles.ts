import styled from "@emotion/styled";

// Wrapper for the users page
export const UsersPageWrapper = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  align-items: stretch; 
  height: fit-content; 
  gap: 24px; 
`;

// User card styling / 
export const UserCard = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 20px; 
  width: 280px; 
  padding: 20px; 
  border-radius: 8px;
  border: 1px solid black; 
`;

// inside user card 
export const Paragraph = styled.p`
  width: 100%; 
  text-overflow: ellipsis; 
  overflow: hidden; 
  font-size: 16px;
`;
