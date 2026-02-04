import {z} from 'zod';
import axios from 'axios';
const url = 'https://www.course-api.com/react-tours-project';


export const TourSchema = z.object({
      id: z.string(),
      name: z.string(),
      image: z.string(),
      info: z.string(),
      price: z.string()

})


export const fetchTour  = async (): Promise<Tour[]>=>{
   const response = await axios.get<Tour[]>(url)
   const result = TourSchema.array().safeParse(response.data);
       if(!result.success){
        console.log(result.error.message)
        throw new Error ('failed to parse data')
       }
      return result.data
}



export  type Tour = z.infer<typeof TourSchema>;