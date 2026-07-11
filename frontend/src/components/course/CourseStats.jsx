import Card from "../ui/Card";

export default function CourseStats({

    course,

}){

    return(

        <div className="grid grid-cols-3 gap-6 mt-8">

            <Card className="p-6">

                <p className="text-zinc-500">

                    Difficulty

                </p>

                <h2 className="text-3xl font-bold mt-3">

                    {course.difficulty}

                </h2>

            </Card>

            <Card className="p-6">

                <p className="text-zinc-500">

                    Estimated Time

                </p>

                <h2 className="text-3xl font-bold mt-3">

                    {course.estimatedHours} hrs

                </h2>

            </Card>

            <Card className="p-6">

                <p className="text-zinc-500">

                    Modules

                </p>

                <h2 className="text-3xl font-bold mt-3">

                    {course.modules.length}

                </h2>

            </Card>

        </div>

    );

}