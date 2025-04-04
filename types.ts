export type ArtObject = {
    id: number;
    title: string;
    dated: string;
    medium: string | null;
    technique: string | null;
    primaryimageurl: string | null;
    description: string | null;
    century: string | null;
    url: string;
    people?: {
        name: string;
    }[];
};