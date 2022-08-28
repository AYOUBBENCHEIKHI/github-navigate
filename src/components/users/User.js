
const User = ({ user }) => {
  return (
    <div>
      <div
        className="max-w-sm overflow-hidden shadow-lg
        rounded"
      >
        <img className="w-full" src={user.avatar_url} alt="123" />
        <div className="py-4 px-6 ml-4">
          <div className="font-bold text-xl text-purple-500">{user.login}</div>

          <div className="flex w-max gap-4 mt-6">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold  py-2 px-4  rounded-full">
                <a href={user.html_url} target="_blank">Profile In Github</a>
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4   rounded-full">
            <a href={user.html_url} target="_blank">Repositories</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
