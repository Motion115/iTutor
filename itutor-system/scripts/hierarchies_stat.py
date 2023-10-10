import json
import os

# list dir hierarchies
files = os.listdir("./data/hierarchies")

from collections import deque

def bfs(graph, components_set, icon_class_set, keys_set):
    count = 0
    queue = deque([graph])
    visited = [graph]
    while queue:
        node = queue.popleft()
        count += 1
        # check if component label existed
        if "componentLabel" in node:
            components_set.add(node["componentLabel"])
        if "iconClass" in node:
            icon_class_set.add(node["iconClass"])
        # get all the keys in node
        keys = node.keys()
        for key in keys:
            keys_set.add(key)
        # check if children existed
        if "children" in node:
            for children in node["children"]:
                if children not in visited:
                    visited.append(children)
                    queue.append(children)
    print(count)

component_set = set()
icon_class_set = set()
keys_set = set()
for file in files:
    with open("./data/hierarchies/" + file) as f:
        data = json.load(f)
    print(file)
    
    bfs(data, component_set, icon_class_set, keys_set)
print(component_set)
print()
print(icon_class_set)
print()
print(keys_set)
