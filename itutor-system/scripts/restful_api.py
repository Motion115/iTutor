from scripts.utils_metadata import MetadataRetrieval

def treeify_enrico_json(json_data):
    metadata = MetadataRetrieval(json_data, from_file=False)
    # print(metadata.export_json_string())
    return metadata.export_json_string()

