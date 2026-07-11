export default function Hero() {

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";

    return (

        <section className="mb-10">

            <h1 className="text-5xl font-bold">

                {greeting} 👋

            </h1>

            <p className="text-zinc-400 mt-3 text-lg">

                Welcome back. Continue building your AI skills.

            </p>

        </section>

    );

}