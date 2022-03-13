from PIL import Image
import os

path = "images/origami/"
fns = os.listdir(path)

for fn in fns:
    try:
        print(path+fn)
        image = Image.open(path+fn)
    except:
        print("not an image")
        break

    image.thumbnail((400, 400))
    image.save(path+"thumb/"+fn)