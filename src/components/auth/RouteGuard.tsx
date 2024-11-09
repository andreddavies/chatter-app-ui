import { excludedRoutes } from "../../constants/excluded-routes";
import { useGetCurrentLoggedUser } from "../../services/user/getCurrentLoggedUser";

type TComponentProps = {
  children: JSX.Element;
};

export default function RouteGuard({ children }: TComponentProps) {
  const currPath = window.location.pathname;
  const { data: user } = useGetCurrentLoggedUser();

  return <>{excludedRoutes.includes(currPath) ? children : user && children}</>;
}
