
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";



interface IProps {
  task: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg p-6 w-full max-w-md mx-auto my-4 transition-all hover:shadow-2xl">
      
      <h1  className="text-xl font-bold mb-2 text-zinc-800 dark:text-zinc-100 ">
      Name: {user.name}
      </h1>
     
      
     </div>
  );
};

export default UserCard;
