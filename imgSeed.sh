#!/bin/bash

# List of missing image filenames
missing_images=(
    "product-launch-1.jpg"
    "team-celebration-1.jpg"
    "company-growth-1.jpg"
    "wedding-ceremony.jpg"
    "first-dance.jpg"
    "celebration.jpg"
    "family-photo.jpg"
    "product-design-1.jpg"
    "early-team-1.jpg"
    "customer-journey-1.jpg"
    "startup-office-1.jpg"
    "community-event-1.jpg"
    "market-analysis-1.jpg"
    "team-planning-1.jpg"
    "content-review-1.jpg"
    "renovation-progress.jpg"
    "house-front.jpg"
    "home-office.jpg"
    "garden.jpg"
    "baby-announcement.jpg"
    "first-smile.jpg"
    "nursery.jpg"
    "research-presentation.jpg"
    "graduation.jpg"
    "campus-life.jpg"
    "thesis-defense.jpg"
)

# Source image
source_image="184-800x450.jpg"

# Destination directory
dest_dir="./public/images/"

# Loop through missing images and copy the source image
for image in "${missing_images[@]}"; do
    cp "${dest_dir}${source_image}" "${dest_dir}${image}"
    echo "Copied ${source_image} to ${image}"
done