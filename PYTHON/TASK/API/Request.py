import requests

class Api:
    def __init__(self, email):
        self.email = email
        self.api = "https://jsonplaceholder.typicode.com/users"
    
    def check_email(self):
        data = requests.get(self.api)
        data = data.json()

        found = False

        for user in data:
            if user["email"] == self.email:
                print("data matched")
                found = True
                break
        
        if not found:
            print("data not found")


email = input("pls enter email: ")
a1 = Api(email)
a1.check_email()