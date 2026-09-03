from src.student import student_detail

def main_menu():
    while True:
        print("\n===== MENU =====")
        print("1. Add Student")
        print("2. Show All Students")
        print("3. Exit")

        choice = input("Enter your option: ")

        if choice == "1":
            student_detail.show_student_detail()

        elif choice == "2":
            student_detail.display_all_students()

        elif choice == "3":
            print("Exiting program...")
            break

        else:
            print("Invalid Option")
