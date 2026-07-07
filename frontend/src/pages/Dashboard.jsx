import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Loader from "../components/common/Loader";
import CourseCard from "../components/course/CourseCard";
import useCourses from "../hooks/useCourses";

export default function Dashboard() {

    const { courses, loading } = useCourses();

    return (

        <div className="flex h-screen bg-slate-950">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <main className="flex-1 overflow-auto p-8">

                    <h1 className="text-4xl font-bold text-white">

                        My Courses

                    </h1>

                    <p className="text-slate-400 mt-2">

                        Continue your learning journey.

                    </p>

                    {loading ? (

                        <Loader />

                    ) : (

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

                            {courses.map((course) => (

                                <CourseCard
                                    key={course.id}
                                    course={course}
                                />

                            ))}

                        </div>

                    )}

                </main>

            </div>

        </div>

    );

}