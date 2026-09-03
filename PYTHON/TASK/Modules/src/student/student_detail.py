students = []

def show_student_detail():
    print("\n===== ADD STUDENT DETAIL =====")

    name = input("Enter Student Name: ")
    age = input("Enter Student Age: ")
    course = input("Enter Student Course: ")

    student = {
        "name": name,
        "age": age,
        "course": course
    }

    students.append(student)

    print("\n Student Added Successfully!")

def display_all_students():
    print("\n===== ALL STUDENTS =====")

    if not students:
        print("No students found.")
        return

    for index, s in enumerate(students, start=1):
        print(f"{index}. Name: {s['name']}, Age: {s['age']}, Course: {s['course']}")
