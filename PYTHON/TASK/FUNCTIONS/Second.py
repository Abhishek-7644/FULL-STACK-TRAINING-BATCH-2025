students = []   # global list

def student_menu():
    print("\n----Student Management Menu----")
    print("1. Student Registration")
    print("2. View Student Data")
    print("3. Search Student Record")
    print("4. Exit")

    choice = int(input("Please Enter Your choice: "))
    return choice


def dashboard():
    while True:
        choice = student_menu()

        if choice == 1:
            student = {
                "id": int(input("Please Enter student_id: ")),
                "name": input("Please Enter student_name: "),
                "address": input("Please Enter student_address: "),
                "email": input("Please Enter student_email: "),
                "qualification": input("Please Enter student_qualification: ")
            }

            students.append(student)
            print("Student Registration Successfully")

        elif choice == 2:
            if not students:
                print("No student data found ")
            else:
                for s in students:
                    print(s)

        elif choice == 3:
            search_id = int(input("Enter student id to search: "))
            found = False

            for s in students:
                if s["id"] == search_id:
                    print("Student Found")
                    print(s)
                    found = True
                    break

            if not found:
                print("Student not found")

        elif choice == 4:
            print("Exit")
            break

        else:
            print("Invalid choice")


dashboard()
