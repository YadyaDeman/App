import styled from "@emotion/styled"

// Container for the page
export const HomePageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

 `;
 
 // Styling for the user form container
export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  min-height: auto;
  height: auto;  
  padding: 0px;
  //border-radius: 4px;
  //border: 2px solid hsla(209, 26%, 22%, 0.808);
  //background-color: white;
`;

// Styling for the form title
export const UserFormName = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #0e2936;
  text-align: center;
  `;

