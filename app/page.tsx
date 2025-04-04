'use client';
import ArtObjectPreview from "@/components/art";
import {useState} from "react";
import type { ArtObject } from "@/types";
import getArtByArtist from "@/lib/get-art-by-artist";

export default function Home() {
    const [artistName, setArtistName] = useState("");
    const [artResults, setArtResults] = useState<ArtObject[]>([]);
    const [error, setError] = useState("");

    const Search = async () => {
        if (!artistName.trim()) {
            setError("Please enter an artist name.");
            setArtResults([]);
            return;
        }
        try {
            const results = await getArtByArtist(artistName);
            setArtResults(results);
            setError(results.length ? "" : "No artworks found.");
        } catch (e) {
            console.error("Search failed:", e);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="bg-neutral-300">
            <div>
                <label className="block m-2 ml-3 mb-2 pt-3 font-semibold">Search by Artist:</label>
                <input
                    type="text"
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    className="border m-2 ml-3 mb-2 rounded p-2 w-64"
                />
                <button
                    onClick={Search}
                    className="ml-2 px-4 py-2 bg-neutral-500 text-white rounded"
                >
                    Search
                </button>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {artResults.map((art) => (
                    <ArtObjectPreview key={art.id} art={art} />
                ))}
            </div>
        </div>
    );
}
