import json
import datetime

def write_log(log_data):
    with open("json.txt", "a") as f:
        f.write(json.dumps(log_data, indent=4))
        f.write("\n")

def get_data():

    name = None
    age = None
    address = None

    try:
        name = input("pls enter your name: ")
        age = int(input("pls enter your age: "))
        address = input("pls enter your address: ")

        student = {
            "name": name,
            "age": age,
            "address": address
        }

        print(student)

    except Exception as e:

        log = {
            "error": str(e),
            "datetime": str(datetime.datetime.now()),
            "function_name": "get_data",
            "user_input": {
                "name": name,
                "age": age,
                "address": address
            }
        }

        write_log(log)
        print("error! check json.txt")

get_data()