import json
import os

listdata = []

def student():
    for s in range(2):
        print("student", s+1)

        dictdata = {
            "name": input("pls enter your name: "),
            "id": input("pls enter your id: "),
            "address": input("pls enter your address: ")
        }

        listdata.append(dictdata)

def file():

    if not os.path.exists("testing.json"):
        with open("testing.json", "w") as f:
            json.dump([], f)

    with open("testing.json", "r") as f:
        olddata = json.load(f)

    olddata.extend(listdata)

    with open("testing.json", "w") as f:
        json.dump(olddata, f, indent=4)

    print("Data appended")

    with open("testing.json ", "r") as f:
        data=f.read()
        print(data)


student()
file()
