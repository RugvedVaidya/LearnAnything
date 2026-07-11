export default function Spinner({

    size = 20,

}) {

    return (

        <div

            style={{
                width: size,
                height: size,
            }}

            className="border-2 border-white/30 border-t-white rounded-full animate-spin"

        />

    );

}