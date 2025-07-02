import { AddUserModal } from "@/components/module/AddUserModal";
import UserCard from "@/components/module/UserCard";


import { selectUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  console.log(users);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1 className="text-2xl font-bold uppercase text-center">all users</h1>
         
        <AddUserModal/>
      </div>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map((user, id) => (
          <UserCard key={id} user={user}/>
        ))}
      </div>
    </div>
  );
};

export default User;
