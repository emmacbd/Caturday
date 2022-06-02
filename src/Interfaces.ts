export interface Weight {   
    imperial: string;
    metric: string;
}
export interface Image {
    id: string;
    width: number;
    height: number;
    url: string;
}
export interface CatObject {
    weight: Weight;
    id: string;
    name: string;
    cfa_url: string;
    vetstreet_url: string;
    vcahospitals_url: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    description: string;
    life_span: string;
    indoor: number;
    lap: number;
    alt_names: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    dog_friendly: number;
    energy_level: number;
    grooming: number;
    health_issues: number;
    intelligence: number;
    shedding_level: number;
    social_needs: number;
    stranger_friendly: number;
    vocalisation: number;
    experimental: number;
    hairless: number;
    natural: number;
    rare: number;
    rex: number;
    suppressed_tail: number;
    short_legs: number;
    wikipedia_url: string;
    hypoallergenic: number;
    reference_image_id: string;
    image?: Image;
}

export interface SelectedCatBreedInfo {
    
        weight: Weight;
        id: string;
        name: string;
        cfa_url: string;
        vetstreet_url: string;
        vcahospitals_url: string;
        temperament: string;
        origin: string;
        country_codes: string;
        country_code: string;
        description: string;
        life_span: string;
        indoor: number;
        lap: number;
        adaptability: number;
        affection_level: number;
        child_friendly: number;
        cat_friendly: number;
        dog_friendly: number;
        energy_level: number;
        grooming: number;
        health_issues: number;
        intelligence: number;
        shedding_level: number;
        social_needs: number;
        stranger_friendly: number;
        vocalisation: number;
        bidability: number;
        experimental: number;
        hairless: number;
        natural: number;
        rare: number;
        rex: number;
        suppressed_tail: number;
        short_legs: number;
        wikipedia_url: string;
        hypoallergenic: number;
        reference_image_id: string
   
}

export interface SelectedCat {
   
        breeds: SelectedCatBreedInfo[];
        id: string;
        url: string;
        width: number;
        height: number
        }
      
export const errorKitten: SelectedCat =
    {
    breeds: [
    {
    weight: {
    imperial: "6 - 12",
    metric: "3 - 7"
    },
    id: "beng",
    name: "Bengal",
    cfa_url: "http://cfa.org/Breeds/BreedsAB/Bengal.aspx",
    vetstreet_url: "http://www.vetstreet.com/cats/bengal",
    vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/bengal",
    temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
    origin: "United States",
    country_codes: "US",
    country_code: "US",
    description: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
    life_span: "12 - 15",
    indoor: 0,
    lap: 0,
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    cat_friendly: 4,
    dog_friendly: 5,
    energy_level: 5,
    grooming: 1,
    health_issues: 3,
    intelligence: 5,
    shedding_level: 3,
    social_needs: 5,
    stranger_friendly: 3,
    vocalisation: 5,
    bidability: 3,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: "https://en.wikipedia.org/wiki/Bengal_(cat)",
    hypoallergenic: 1,
    reference_image_id: "O3btzLlsO"
    }
    ],
    id: "ZocD-pQxd",
    url: "https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg",
    width: 880,
    height: 1100
    }
    
