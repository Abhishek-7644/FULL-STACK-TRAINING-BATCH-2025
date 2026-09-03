
def user_input():
    a = int(input("Please Enter first number: "))
    b = int(input("Please Enter Second number: "))
    return a, b



def menu():
    print("\n----- MENU -----")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")

    choice = int(input("Please Enter choice: "))
    return choice


def dashboard():
    x, y = user_input()
    option = menu()

    if option == 1:
        print("Addition =", x + y)

    elif option == 2:
        print("Subtraction =", x - y)

    elif option == 3:
        print("Multiplication =", x * y)

    else:
        print("Invalid choice")


dashboard()