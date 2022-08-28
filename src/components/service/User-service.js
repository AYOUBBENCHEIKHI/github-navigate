
import axios from "axios";
const getUsers =    async  () => {
    axios.get('https://api.github.com/users')
};

export const UserService = {
    getUsers
};

//export default PostService;