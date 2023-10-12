from flask import Flask, Response, jsonify, request, send_file
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import requests
from scripts.restful_api import treeify_enrico_json, casify_and_call_response

app = Flask(__name__)

# enable REST API
api = Api(app)
cors = CORS(app)

@app.route('/treeify', methods=['POST'])
def process_request():
    # Retrieve request data
    data = request.get_json()
    treeified = treeify_enrico_json(data["raw_data"])
    # Return the response as text
    return treeified

@app.route('/callLLM', methods=['POST'])
def call_llm():
    # Retrieve request data
    data = request.get_json()
    prompt_type, llm_suggestion = casify_and_call_response(data)
    return_val = {
        "prompt_type": prompt_type,
        "llm_suggestion": llm_suggestion
    }
    return jsonify(return_val)

if __name__ == '__main__':
    app.run(debug=True)

