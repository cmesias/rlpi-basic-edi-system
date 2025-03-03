import requests

url = ' http://127.0.0.1:8000/register'
data = {
    'email': 'johndoez@gmail.com',
    'password_hash': '97812h8yashdiasdA'
}

result = requests.post(url, json=data)

print(result)