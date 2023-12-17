import { fetchUser } from "../actions/user";
import { useQuery } from "@tanstack/react-query";

function useUser() {
  const {
    data: user,
    isLoading: fetchingUser,
    error: userError,
    isSuccess: fetchedUser
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser
    // retryOnMount: true,
    // refetchOnReconnect: "always"
    // refetchOnWindowFocus: true
  });

  return {
    user,
    fetchingUser,
    userError,
    fetchedUser
  };
}
export { useUser };
