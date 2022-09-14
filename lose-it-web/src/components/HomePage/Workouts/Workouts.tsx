import React from "react"
import { InformationCard } from "../../../shared-components/InformationCard"

export const Workouts = () => {
    return (
        <InformationCard 
            title="Enjoy workouts"
            subtitle="Workouts are not mandatory but they sure can help!"
            primaryButtonText="Add A Meal"
            imageUrl="/workouts.avif"
        />
    )
}