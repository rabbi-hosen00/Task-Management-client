
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// // import useAxiosSecur from "../components/useAxiosSecur";



// const ManageTask = () => {
//   const [languages, setLanguages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // const axiosSecure = useAxiosSecur()

//   // Fetch tutorials
//   useEffect(() => {
//     axios
//       .get("https://assignment-11-larning-language-server.vercel.app/language/all",{withCredentials: true})
//       .then((response) => {
//         setLanguages(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching tutorials:", error);
//         setLoading(false);
//       });
//   }, []);

//   // Handle delete tutorial
//   const handleDelete = (id) => {
//     console.log(id)
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios
//           .delete(`https://assignment-11-larning-language-server.vercel.app/language/${id}`)
//           .then(() => {
//             setLanguages(languages.filter((lan) => lan._id !== id));
//             Swal.fire("Deleted!", "Your tutorial has been deleted.", "success");
//           })
//           .catch((error) => {
//             console.error("Error deleting tutorial:", error);
//             Swal.fire("Error!", "Failed to delete tutorial.", "error");
//           });
//       }
//     });
//   };


//   console.log(languages)

//   return (
//     <div className="container mx-auto p-4 mt-16">
//       <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">My Tutorials</h1>
//       {loading ? (
//         <div className="text-center">
//           <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status"></div>
//           <p>Loading...</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full text-left border-collapse border border-gray-200">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-4 py-2">Name</th>
//                 <th className="border border-gray-300 px-4 py-2">Image</th>
//                 <th className="border border-gray-300 px-4 py-2">Language</th>
//                 <th className="border border-gray-300 px-4 py-2">Price</th>
//                 <th className="border border-gray-300 px-4 py-2">Description</th>
//                 <th className="border border-gray-300 px-4 py-2">Review</th>
//                 <th className="border border-gray-300 px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {languages.map((lang) => (
//                 <tr key={lang._id} className="hover:bg-gray-50">
//                   <td className="border border-gray-300 px-4 py-2">{lang.userName}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <img src={lang.image} alt={lang.language} className="h-12 w-12 object-cover rounded" />
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">{lang.language}</td>
//                   <td className="border border-gray-300 px-4 py-2">${lang.price}</td>
//                   <td className="border border-gray-300 px-4 py-2">{lang.description.slice(0, 15)}...</td>
//                   <td className="border border-gray-300 px-4 py-2">{lang.review}</td>
//                   <td className="border border-gray-300 px-4 py-2 flex gap-2">
//                     <Link to={`/updatetorials/${lang._id}`}>
//                       <button
//                         //   onClick={() => handleUpdate(lang._id)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                       >
//                         <FaEdit />
//                       </button>
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(lang._id)}

//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     >
//                       <MdDelete />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageTask;



const ManageTask = () => {
  return (
    <div>
      Task Mangement
    </div>
  );
};

export default ManageTask;
