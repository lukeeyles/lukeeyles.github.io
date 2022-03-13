from PIL import Image
import os

paths = ["images/blender/","images/minecraft/","images/origami/"]

for path in paths:
    fns = os.listdir(path)
    for fn in fns:
        try:
            print(path+fn)
            image = Image.open(path+fn)
        except:
            print("not an image")
            break

        image.thumbnail((600, 600))
        image.save(path+"thumb/"+fn)