import json

students = []


def student_menu():
    print("\n---- Student Management Menu ----")
    print("1. Student Registration")
    print("2. View Student Data")
    print("3. Search Student Record")
    print("4. Exit")
    return int(input("Please enter your choice: "))


def take_qualification():
    qualifications = []

    while True:
        degree = input("Enter qualification: ")
        year = int(input("Enter passing year: "))

        qualifications.append({
            "degree": degree,
            "passing_year": year
        })

        more = input("Do you want to add more qualification? (yes/no): ").lower()
        if more != "yes":
            break

    return qualifications


def register_student():
    student = {
        "id": int(input("Please enter student id: ")),
        "name": input("Please enter student name: "),
        "address": input("Please enter student address: "),
        "email": input("Please enter student email: "),
        "qualification": take_qualification()
    }

    students.append(student)
    print(" Student registered successfully")


def view_students():
    if not students:
        print(" No student data found")
    else:
        print(json.dumps(students, indent=4))


def search_student():
    search_id = int(input("Enter student id to search: "))

    for s in students:
        if s["id"] == search_id:
            print(" Student Found")
            print(json.dumps(s, indent=4))
            return

    print(" Student not found")


def dashboard():
    while True:
        choice = student_menu()

        if choice == 1:
            register_student()
        elif choice == 2:
            view_students()
        elif choice == 3:
            search_student()
        elif choice == 4:
            print("Program Exit ")
            break
        else:
            print(" Invalid choice")


dashboard()