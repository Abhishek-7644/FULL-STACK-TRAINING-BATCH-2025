import os

while True:
    num = int(input("How many files do you want (1-20): "))

    if num < 1 or num > 20:
        print("Please enter number between (1-20)")
    else:
        existing_files = len([f for f in os.listdir()
                              if f.startswith("file_") and f.endswith(".txt")])

        for i in range(1, num + 1):
            file_number = existing_files + i
            file_name = f"file_{file_number}.txt"

            with open(file_name, "w") as file:
                file.write(f"This is file number {file_number}.\n")

            print(f"{file_name} created successfully")

        break 
