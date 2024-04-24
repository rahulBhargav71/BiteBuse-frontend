
import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantapi";
import ManageRestaurantForm from "@/froms/user-profile-form/manage-restaurant-form/ManageRestaurantForm"

const ManageRestaurantPage = () => {
  const {createRestaurant, isLoading:isCreateLoading}=  useCreateMyRestaurant();
  const {restaurant} =useGetMyRestaurant();
  const {updateRestaurant , isLoading:isUpdateLoading}= useUpdateMyRestaurant();
  const isEditing =!!restaurant;
  return (
    <ManageRestaurantForm restaurant={restaurant} onSave={isEditing ? updateRestaurant: createRestaurant} isLoading={isCreateLoading || isUpdateLoading}/>
  )
};

export default ManageRestaurantPage;
