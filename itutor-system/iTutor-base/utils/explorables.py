# the list of UI images that are representative
EXPLORABLE_FILES = [
    "295",
    "362",
    "497",
    "505",
    "1074",
    "1371",
    "1411",
    "1611",
    "1709",
    "1986",
    "1996",
    "2170",
    "2517",
    "2525",
    "2559",
    "2573",
    "2629",
    "2716",
    "2913",
    "3545",
    "4008",
    "4761",
    "5111",
    "5484",
    "6364",
    "6422",
    "6713",
    "7745",
    "8416",
    "8590",
    "8592",
    "8659",
    "9140",
    "9735",
    "10636",
    "15169",
    "15449",
    "17087",
    "17587",
    "21545",
    "22173",
    "29792",
    "31253",
    "64456"
]

import os
import shutil

def copy_files(source_dir, target_dir, prefixes, extension):
    """
    Copy files from source_dir to target_dir with the given prefixes and extension.
    """
    files = []
    for prefix in prefixes:
        # join prefix with extension
        file = prefix + extension
        files.append(file)
    
        
    for file in files:
        source_path = os.path.join(source_dir, file)
        target_path = os.path.join(target_dir, file)
        shutil.copyfile(source_path, target_path)

if __name__ == "__main__":
    source_dir = "E:/Data(E)/Datasets/Enrico/"
    script_src_dir = "D:/Research/HCI/iTutor-base"

    hierarchies_dir = "/data/hierarchies"
    screen_shot_dir = "/data/screenshots"

    copy_files(source_dir + "hierarchies", script_src_dir + hierarchies_dir, EXPLORABLE_FILES, ".json")
    copy_files(source_dir + "screenshots", script_src_dir + screen_shot_dir, EXPLORABLE_FILES, ".jpg")

