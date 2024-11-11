import { useEffect } from "react";

import { usePath } from "@hooks/usePath";
import { snackVar } from "@constants/snack";
import { authenticatedVar } from "@constants/authenticated";
import { excludedRoutes } from "@constants/excluded-routes";
import { UNKNOWN_ERROR_SNACK_MESSAGE } from "@constants/errors";
import { useGetCurrentLoggedUser } from "@services/user/getCurrentLoggedUser";

type TComponentProps = {
  children: JSX.Element;
};

export default function RouteGuard({ children }: TComponentProps) {
  const { path } = usePath();
  const { data: user, error } = useGetCurrentLoggedUser();

  useEffect(() => {
    if (user) authenticatedVar(true);
  }, [user]);

  useEffect(() => {
    if (error) {
      if (error.networkError) snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
    }
  }, [error]);

  return <>{excludedRoutes.includes(path) ? children : user && children}</>;
}
