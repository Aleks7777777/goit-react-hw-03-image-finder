import axios from "axios";


const gallaryService = axios.create({
	baseURL: 'https://pixabay.com/api/',
	params: {
		key: '32809710-ecba0a567f38cfb22e7b3a093',
		image_type: 'photo',
		orientation: 'horizontal',
		per_page: '12',
	},
});

const getImage = async params => {
	const { data } = await gallaryService.get('', { params });
	return data;
};
export default getImage;


