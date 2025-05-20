// "use client";
// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import {zodResolver} from "@hookform/resolvers/zod"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// const fuleTypes = ['Petrol','Diesel','Electric','Hybrid','Plug-in Hybrid'];
// const transmission = ['Automatic','Manual','Semi-Automatic'];

// const bodyTypes = [
//   "SUV",
//   "Sedan",
//   "Hatchback",
//   "Convertible",
//   "Coupe",
//   "Wagon",
//   "Pickup",
// ];

// const carStatus = ["AVAILABLE","UNAVAILABLE","SOLD"];

// const AddCarForm = () => {

//   const [activeTab,setActiveTab] = useState("ai");

//   const carFormSchema = z.object({
//     make:z.string().min(1,"Make is Required"),
//     model:z.string().min(1,"Model is Required"),
//     year:z.string().refine((val) => {
//       const year = parseInt(val);
//       return (
//         !isNaN(year) && year >=1900 && year<=new Date().getFullYear()+1
//       );
//     },"Valid Year Is Required"),
//     price:z.string().min(1,"Price is required"),
//     mileage:z.string().min(1,"mileage is required"),
//     color:z.string().min(1,"color is required"),
//     fuelType:z.string().min(1,"fuelType is required"),
//     transmission:z.string().min(1,"transmission is required"),
//     bodyType:z.string().min(1,"Body Type is required"),
//     seats:z.string().optional(),
//     description:z.string().min(10,"Desrcription must be at least 10 charecters"),
//     status:z.enum(["AVAILABLE",'UNAVAILABLE','SOLD']),
//     featured:z.boolean().default(false)
//   });
//   const {register,
//     setValue,
//     getValues,
//     formState:{errors},
//     handleSubmit,
//     watch,
//   } = useForm({
//     resolver:zodResolver(carFormSchema),
//     defaultValues:{
//       make:"",
//       model:"",
//       year:"",
//       price:"",
//       mileage:"",
//       coloe:"",
//       fuelType:"",
//       transmission:"",
//       bodyType:"",
//       seats:"",
//       description:"",
//       status:"AVAILABLE",
//       featured:false,
//     },
//   })
//   return (
//     <div>
//       <Tabs 
//       defaultValue="ai"
//        className="mt-6"
//        value={activeTab}
//        onValueChnage={setActiveTab}
//        >
//   <TabsList className='grid w-full grid-cols-2'>
//     <TabsTrigger value="manual">Manual Entry</TabsTrigger>
//     <TabsTrigger value="ai">AI Upload</TabsTrigger>
//   </TabsList>
//   <TabsContent value="manual" className='mt-6'>Make changes to your account here.</TabsContent>
//   <TabsContent value="ai">Change your password here.</TabsContent>
// </Tabs>

//     </div>
//   )
// }

// export default AddCarForm