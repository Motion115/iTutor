import easyocr
reader = easyocr.Reader(['en'], gpu = True)

from tqdm import tqdm
import json
import os

base_path = './llm-testing/img/'
target_path = './llm-testing/texts/'

# list files in base_path
files = os.listdir(base_path)

for f in tqdm(files):
    result = reader.readtext(os.path.join(base_path, f))
    records = []
    for res in result:
        # res[2] is the confidence of the recognition
        # res[0][0][1] is the y position of the top left corner of the bounding box
        # this is to exclude the text in the top bar
        if res[2] > 0.4 and res[0][0][1] > 75:
            # get the 4 corners of the bounding box
            top_left, top_right, bottom_right, bottom_left = res[0][0], res[0][1], res[0][2], res[0][3]
            records.append({
                'positional': {
                    #'top_left': [int(top_left[0]), int(top_left[1])],
                    #'top_right': [int(top_right[0]), int(top_right[1])],
                    #'bottom_right': [int(bottom_right[0]), int(bottom_right[1])],
                    #'bottom_left': [int(bottom_left[0]), int(bottom_left[1])]
                },
                'text': res[1]
            })
    if len(records) == 0:
        records.append({'positional': {}, 'text': None})

    f = f.split('.')[0]
    with open(os.path.join(target_path, f + '.json'), 'w') as outfile:
        json.dump(records, outfile, indent=4)