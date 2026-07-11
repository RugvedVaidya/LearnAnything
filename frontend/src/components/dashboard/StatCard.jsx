import Card from "../ui/Card";

export default function StatCard({

    icon: Icon,

    title,

    value,

    color,

    subtitle,

}) {

    return (

        <Card
            hover
            className="p-6 transition-all duration-300"
        >

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-zinc-500">

                        {title}

                    </p>

                    <h2 className="text-4xl font-bold mt-3">

                        {value}

                    </h2>

                    {

                        subtitle && (

                            <p className="mt-3 text-sm text-zinc-500">

                                {subtitle}

                            </p>

                        )

                    }

                </div>

                <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                        background: color,
                    }}
                >

                    <Icon
                        size={26}
                        className="text-white"
                    />

                </div>

            </div>

        </Card>

    );

}