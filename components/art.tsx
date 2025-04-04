import type {ArtObject} from "@/types";

export default function ArtObjectPreview({ art }: {art: ArtObject}) {
    return (
        <div className="bg-neutral-500 rounded-xl p-4 m-2 w-96 shadow-md">
            <h4 className="font-bold text-2xl">{art.title}</h4>
            <p className="text-sm italic">
                {art.people?.[0]?.name || 'Unknown Artist'} — {art.dated}
            </p>
            <p className="text-sm">{art.medium || art.technique || 'No medium info'}</p>
            {art.primaryimageurl ? (
                <img src={art.primaryimageurl} alt={art.title} className="mt-3 rounded" />
            ) : (
                <p className="text-xs mt-3 italic text-gray-700">No image available</p>
            )}
        </div>
    );
}
