import fitz # PyMuPDF
import io
from PIL import Image

pdf_file = "FetenWines_Catalogo.pdf"
pages_to_extract = {
    3: "garraf_sea",
    4: "garraf_soil",
    7: "hospital_de_sitges",
    12: "clos_dels_guarans",
    17: "finca_mas_perdut",
    25: "valldolina",
    32: "finca_valldosera"
}

doc = fitz.open(pdf_file)

for page_num, prefix in pages_to_extract.items():
    page = doc[page_num]
    image_list = page.get_images(full=True)
    
    if image_list:
        # Sort by image size to get the main photo, not logos
        image_list.sort(key=lambda x: x[2] * x[3], reverse=True)
        xref = image_list[0][0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        
        image = Image.open(io.BytesIO(image_bytes))
        image.save(f"public/{prefix}.png", "PNG")
        print(f"Saved public/{prefix}.png from page {page_num+1}")

doc.close()
