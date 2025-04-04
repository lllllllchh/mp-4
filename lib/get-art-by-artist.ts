'use server';
import {ArtObject} from "@/types";

export default async function getArtByArtist(name: string): Promise<ArtObject[]>{
    const apiKey = process.env.HARVARD_API_KEY;
    console.log("API key from env:", apiKey);

    if (!name){
        console.error("No artist name provided");
        return [];
    }

    const res = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${apiKey}&person=${encodeURIComponent(name)}`
    );

    const data = await res.json();
    if (!data.records || data.records.length <= 0) {
        return [];
    }
    return data.records;
}




