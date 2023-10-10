import os, sys
script_path = os.path.abspath(__file__)
parent_dir = os.path.dirname(script_path)
sys.path.append(parent_dir)

from utils_metadata import MetadataRetrieval
import json
from tqdm import tqdm

script_src_dir = "D:/Research/HCI/iTutor-base/"

if __name__ == "__main__":
    max_tree_height = 0
    # list dir hierarchies
    files = os.listdir(script_src_dir + "hierarchies")
    for file in tqdm(files):
        src_file = script_src_dir + file
        mr = MetadataRetrieval(src_file)
        if mr.root.height > max_tree_height:
            max_tree_height = mr.root.height
    print("Pass")
    print("Maximum depth:", max_tree_height)