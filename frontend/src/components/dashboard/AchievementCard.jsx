import Card from "../ui/Card";

export default function AchievementCard(){

    return(

        <Card className="p-6">

            <h2 className="text-xl font-bold">

                Achievements

            </h2>

            <div className="mt-5 space-y-4">

                <div>

                    🏆 First Course Completed

                </div>

                <div>

                    🔥 7 Day Streak

                </div>

                <div>

                    ⭐ AI Explorer

                </div>

            </div>

        </Card>

    );

}