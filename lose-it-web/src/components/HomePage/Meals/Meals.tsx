import React from "react"
import { InformationCard } from "../../../shared-components/InformationCard"

export const Meals = () => {
    return (
        <InformationCard 
            title="Log your meals"
            subtitle="You haven't logged any meals today"
            primaryButtonText="Add A Meal"
            imageUrl="/meals.avif"
        />
    )
}