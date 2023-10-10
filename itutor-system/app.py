from flask import Flask, Response, jsonify, request, send_file
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import requests
from scripts.restful_api import treeify_enrico_json

app = Flask(__name__)

# enable REST API
api = Api(app)
cors = CORS(app)

@app.route('/test')
def test():
    return "Hello World!"

@app.route('/treeify', methods=['POST'])
def process_request():
    # Retrieve request data
    data = request.get_json()
    treeified = treeify_enrico_json(data["raw_data"])
    # Return the response as text
    return treeified

@app.route('/getTableLength/<table_name>')
def get_table_length(table_name):
    pass

@app.route('/downloader2/<mode>/<city_name>', methods=['GET'])
def download2(mode, city_name):
    pass

if __name__ == '__main__':
    app.run(debug=True)
    # api_get_city_statistics_with_prediction(db, "BeiJing")

