import useAxiosPublic from "./useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const useHostingImage = async (image) => {
  const axiosPublic = useAxiosPublic();
  const imageFile = image;
  const formData = new FormData();
  formData.append("image", imageFile);
  const res = await axiosPublic.post(image_hosting_api, formData);
  return res.data;
};

export default useHostingImage;
