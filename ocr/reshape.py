from tqdm import tqdm
import os
from PIL import Image

base_path = './ocr/source/'
target_path = './ocr/img/'

files = os.listdir(base_path)
for f in tqdm(files):
    screenImg = Image.open(os.path.join(base_path, f)).convert("RGB")
    screenImg = screenImg.resize((750, 1600))
    screenImg.save(os.path.join(target_path, f))