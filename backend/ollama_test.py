import requests

def predictor(prompt):
    instruction = (
        "You are an AI trained to return a single word, nothing else. "
        "Given the following text, return only the next word.\n\n"
        f"Text: {prompt}"
    )

    response = requests.post(
        'http://localhost:11434/api/generate',
        json={
            "model": "mistral:7b",
            "prompt": instruction,
            "stream": False
        }
    )

    return response.json().get('response', '').strip()

# Example usage
prompt = input("enter text: ")
print(predictor(prompt))
