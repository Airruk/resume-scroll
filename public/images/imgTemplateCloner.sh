#!/bin/bash

# Function to extract filename from full path
get_filename() {
    echo "${1##*/}"
}

# Read the timeline-data.tsx file and extract image paths
image_paths=$(grep -o '"/images/[^"]*"' timeline-data.tsx | tr -d '"')

# Process each image path
for path in $image_paths; do
    # Extract just the filename from the path
    filename=$(get_filename "$path")
    
    # Get the position number (last character before .jpg)
    position="${filename: -5:1}"
    
    # Create images directory if it doesn't exist
    mkdir -p "images"
    
    # Copy the template image to the new filename
    cp "${position}.jpg" "images/${filename}"
    
    echo "Created: images/${filename} from ${position}.jpg"
done

echo "Image cloning complete!"
