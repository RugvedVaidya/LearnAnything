// import { useState } from "react";

// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";
// import Loader from "../components/common/Loader";
// import CourseCard from "../components/course/CourseCard";
// import GenerateCourseModal from "../components/course/GenerateCourseModal";

// import useCourses from "../hooks/useCourses";

// export default function Dashboard() {

//     const [open, setOpen] = useState(false);

//     const {
//         courses,
//         loading,
//         generate,
//         generating,
//     } = useCourses();

//     const handleGenerate = async (data) => {

//         await generate(data);

//         setOpen(false);

//     };

//     return (

//         <div className="flex h-screen bg-slate-950">

//             <Sidebar />

//             <div className="flex-1 flex flex-col">

//                 <Navbar
//                     onGenerate={() => setOpen(true)}
//                 />

//                 <main className="flex-1 overflow-auto p-8">

//                     <div className="flex items-center justify-between">

//                         <div>

//                             <h1 className="text-4xl font-bold text-white">

//                                 My Courses

//                             </h1>

//                             <p className="text-slate-400 mt-2">

//                                 Continue your learning journey.

//                             </p>

//                         </div>

//                     </div>

//                     {loading ? (

//                         <Loader />

//                     ) : courses.length === 0 ? (

//                         <div className="flex justify-center items-center h-96">

//                             <div className="text-center">

//                                 <h2 className="text-2xl text-white font-semibold">

//                                     No Courses Yet

//                                 </h2>

//                                 <p className="text-slate-400 mt-2">

//                                     Click "Generate Course" to create your first AI roadmap.

//                                 </p>

//                             </div>

//                         </div>

//                     ) : (

//                         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

//                             {courses.map((course) => (

//                                 <CourseCard
//                                     key={course.id}
//                                     course={course}
//                                 />

//                             ))}

//                         </div>

//                     )}

//                 </main>

//             </div>

//             <GenerateCourseModal
//                 open={open}
//                 loading={generating}
//                 onClose={() => setOpen(false)}
//                 onGenerate={handleGenerate}
//             />

//         </div>

//     );

// }
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

import { FiMail } from "react-icons/fi";

export default function Dashboard() {

    return (

        <div className="min-h-screen bg-[#171717] flex items-center justify-center">

            <div className="w-[420px] space-y-6">

                <Input

                    label="Email"

                    placeholder="tester@gmail.com"

                    icon={<FiMail />}

                />

                <Input

                    label="Password"

                    type="password"

                    placeholder="Enter password"

                />

                <Button className="w-full">

                    Login

                </Button>

            </div>

        </div>

    );

}