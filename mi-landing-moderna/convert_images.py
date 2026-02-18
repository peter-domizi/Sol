import os
from PIL import Image

# Path to images directory
images_dir = os.path.join(os.getcwd(), 'public', 'imagenes')

# Ensure directory exists
if not os.path.exists(images_dir):
    print(f"Error: Directory {images_dir} not found.")
    exit(1)

# List all files
files = os.listdir(images_dir)
converted_count = 0

print(f"Scanning {images_dir} for .tif files...")

for filename in files:
    if filename.lower().endswith(('.tif', '.tiff')):
        file_path = os.path.join(images_dir, filename)
        name, ext = os.path.splitext(filename)
        new_filename = name + ".jpg"
        new_file_path = os.path.join(images_dir, new_filename)

        try:
            with Image.open(file_path) as img:
                # Convert to RGB (JPEG doesn't support RGBA or CMYK nicely sometimes without conversion)
                rgb_img = img.convert('RGB')
                rgb_img.save(new_file_path, 'JPEG', quality=85)
                print(f"Converted: {filename} -> {new_filename}")
                converted_count += 1
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")

print(f"Finished. Converted {converted_count} files.")
