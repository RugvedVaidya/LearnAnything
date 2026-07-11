export default function SectionTitle({

    title,

    subtitle,

    action

}){

    return(

        <div className="flex items-end justify-between mb-8">

            <div>

                <h2 className="text-3xl font-bold">

                    {title}

                </h2>

                <p className="text-zinc-400 mt-2">

                    {subtitle}

                </p>

            </div>

            {action}

        </div>

    );

}