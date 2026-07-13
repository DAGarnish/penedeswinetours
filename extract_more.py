import fitz
import io
from PIL import Image

pdf_file = "FetenWines_Catalogo.pdf"
pages_to_extract = {
    40: "vega_de_ribes",
    45: "masia_de_la_roqua",
    50: "puig_batet"
}

doc = fitz.open(pdf_file)

for page_num, prefix in pages_to_extract.items():
    page = doc[page_num]
    image_list = page.get_images(full=True)
    
    if image_list:
        image_list.sort(key=lambda x: x[2] * x[3], reverse=True)
        xref = image_list[0][0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        
        image = Image.open(io.BytesIO(image_bytes))
        image.save(f"public/{prefix}.png", "PNG")
        print(f"Saved public/{prefix}.png from page {page_num+1}")

doc.close()
