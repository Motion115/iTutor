from api_key import API_KEY
import zhipuai
import numpy as np

zhipuai.api_key = API_KEY
response = zhipuai.model_api.invoke(
    model="text_embedding",
    prompt="give me step by step tutorial"
)

# turn response into a numpy array, and store it as a .npy file
response = np.array(response["data"]["embedding"])
np.save("inquery_vector.npy", response)