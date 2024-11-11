import router from "@components/router";
import client from "@constants/apollo-client";

export const onLogout = () => {
  router.navigate("/login");
  client.resetStore();
};
