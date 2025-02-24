import { UsersPageWrapper, UserCard, Paragraph } from "./styles";

interface UserData {
  id: number;
  firstlastName: string;
  email: string;
  phoneNumber: string;
  role: string;
}

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
  const usersCards = users.map((user) => (
    <UserCard key={user.id}>
      <Paragraph>Full name: {user.firstlastName}</Paragraph>
      <Paragraph>Email: {user.email}</Paragraph>
      <Paragraph>Phone number: {user.phoneNumber}</Paragraph>
      <Paragraph>Role: {user.role}</Paragraph>
    </UserCard>
  ));

  return <UsersPageWrapper>{usersCards}</UsersPageWrapper>;
}

export default Users;
