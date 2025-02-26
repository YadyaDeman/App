import { UsersPageWrapper, UserCard, Paragraph } from "./styles"; 

// UserData interface - type safety / 
interface UserData {
  id: number; 
  firstlastName: string;
  email: string;
  phoneNumber: string;
  role: string;
}

// Test user data
const users: UserData[] = [
  {
    id: 1,
    firstlastName: "Alex",
    email: "alex@gmail.com",
    phoneNumber: "123-456-7890",
    role: "Admin",
  },
];

function Users() {
  // Map - create user cards
  const usersCards = users.map((user) => (
    <UserCard key={user.id}> {/* Unique key- user card*/}
      <Paragraph>Full name: {user.firstlastName}</Paragraph> {}
      <Paragraph>Email: {user.email}</Paragraph> {}
      <Paragraph>Phone number: {user.phoneNumber}</Paragraph> {}
      <Paragraph>Role: {user.role}</Paragraph> {}
    </UserCard>
  ));

  return <UsersPageWrapper>{usersCards}</UsersPageWrapper>; // list of user cards
}

export default Users; 
