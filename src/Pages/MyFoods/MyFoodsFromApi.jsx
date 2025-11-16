import { Suspense } from "react";
import useMyFoodsApi from "../../api/useMyFoodsApi";
import useAuth from "../../hooks/useAuth";
import Spinner from "../shared/Spinner";
import MyFoods from "./MyFoods";

const MyFoodsFromApi = () => {
  const { myFoodsPromise } = useMyFoodsApi();
  const { user } = useAuth();
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <MyFoods myFoodsPromise={myFoodsPromise(user?.email)} />
      </Suspense>
    </div>
  );
};

export default MyFoodsFromApi;
