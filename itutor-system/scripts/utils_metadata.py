import json
from collections import deque
from anytree import Node, RenderTree
from anytree.exporter import DotExporter
from anytree.exporter import DictExporter

def del_key_entry(key, dict):
    if key in dict:
        del dict[key]

class MetadataRetrieval:
    def __init__(self, src_file, from_file = True):
        if from_file == True:
            self.src_file = src_file
            self.raw_data = self.load_json(src_file)
        else:
            self.src_file = ""
            self.raw_data = src_file
        self.construct_tree()
    
    def load_json(self, src_file):
        with open(src_file, 'r') as f:
            data = json.load(f)
        return data
    
    def format_node_spec(self, dict):
        # if children, resource-id, ancestors, class exists, strip it
        del_key_entry("resource-id", dict)
        del_key_entry("class", dict)
        del_key_entry("ancestors", dict)
        del_key_entry("children", dict)
        # if componentLabel not in the spec, then add it
        if "componentLabel" not in dict:
            dict["componentLabel"] = "FullPage"
    
    def construct_tree(self):
        nodes_list = []
        current_index = 0
        queue = deque([self.raw_data])
        visited = [self.raw_data]
        while queue:
            node = queue.popleft()
            node["node_id"] = current_index
            nodes_list.append(node)
            # print(node)
            # check if children existed
            if "children" in node:
                for children in node["children"]:
                    if children not in visited:
                        if "parent_id" not in children:  
                            # self.register_node(deepcopy(children))      
                            children["parent_id"] = current_index
                        visited.append(children)
                        queue.append(children)
            current_index += 1

        # AnyNodeList = []
        NodeList = []
        # because json is traversed breadth first, so its from root to leaf             
        for node in nodes_list:
            # register nodes first
            self.format_node_spec(node)
            # AnyNodeList.append(Node(node))
            node_id, comp_label = node["node_id"], node["componentLabel"]
            text = node.get("text", None)
            iconClass = node.get("iconClass", None)
            textButtonClass = node.get("textButtonClass", None)
            # get either iconClass or textButtonClass, depending on which exist
            alt_text = iconClass or textButtonClass or None
            # delete all that's extracted
            del node["node_id"], node["componentLabel"]
            # node_id, with attributes UI_type, semantics and alternate_text
            NodeList.append(Node(node_id, UI_type=comp_label, semantics=text, alternate_text=alt_text, attr=node ))

        self.root = NodeList[0]
        for node in NodeList:
            if "parent_id" in node.attr:
                for x in NodeList:
                    if x.name == node.attr["parent_id"]:
                        node.parent = x
        
        # # traverse AnyNodeList, the actual root will be [0]
        # self.root = AnyNodeList[0]
        # for node in AnyNodeList:
        #     node_spec = ast.literal_eval(str(node.name))
        #     if "parent_id" in node_spec:
        #         # find the node_id that matches the parent_id
        #         for x in AnyNodeList:
        #             search_spec = ast.literal_eval(str(x.name))
        #             if search_spec["node_id"] == node_spec["parent_id"]:
        #                 node.parent = x

    def show_tree(self):
        count = 0
        for pre, fill, node in RenderTree(self.root):
            print("%s%s" % (pre, node.name))
            # print("%s%s" % (pre, a))
            count += 1
        print("Constructed node count:", count)

    def _export_filter(self, attrs):
        filtered_attrs = []
        for key, value in attrs:
            if value != None and value != "" and value != "-":
                if key != "attr": # and key != "name":
                    filtered_attrs.append((key, value))
        return filtered_attrs

    def export_json(self):
        exporter = DictExporter(
            attriter=self._export_filter)
        out_json = exporter.export(self.root)
        out_json = json.dumps(out_json, indent=2)
        # to file
        with open("./test.json", "w") as f:
            f.write(out_json)
    
    def export_json_string(self):
        exporter = DictExporter(
            attriter=self._export_filter)
        out_json = exporter.export(self.root)
        out_json = json.dumps(out_json)
        return out_json

if __name__ == "__main__":
    src_file = "./hierarchies/295.json"
    mr = MetadataRetrieval(src_file)
    # mr.construct_tree()
    # mr.show_tree()
    mr.export_json()
    