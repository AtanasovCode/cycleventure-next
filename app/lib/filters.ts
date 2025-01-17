import { Filters } from "@/app/types/Filters";

export const brandFilters: Filters[] = [
    {
        name: "Trek",
        value: "trek"
    },
];

export const mtbFilters: Filters[] = [
    {
        name: "Full Suspension",
        value: "full-suspension"
    },
    {
        name: "Hardtail",
        value: "hardtail"
    },
    {
        name: "Electric",
        value: "electric"
    },
]

export const frameFilters: Filters[] = [
    {
        name: "Carbon",
        value: "carbon"
    },
    {
        name: "Aluminum",
        value: "aluminum"
    },
    {
        name: "Alloy",
        value: "alloy"
    },
]

export const roadBikes: Filters[] = [
    {
        name: "Road",
        value: "road"
    },
    {
        name: "Gravel",
        value: "gravel"
    },
    {
        name: "Electric",
        value: "road-electric"
    },
    {
        name: "Triathlon",
        value: "triathlon"
    },
]