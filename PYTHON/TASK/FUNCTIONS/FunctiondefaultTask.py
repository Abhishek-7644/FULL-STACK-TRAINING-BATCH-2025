def dashboard():
    
    a = int(input("Please Enter first number: "))
    b = int(input("Please Enter second number: "))

    
    print("\n----- MENU -----")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")

    choice = int(input("Please Enter choice: "))

    
    if choice == 1:
        print("Addition =", a + b)
    elif choice == 2:
        print("Subtraction =", a - b)
    elif choice == 3:
        print("Multiplication =", a * b)
    else:
        print("Invalid choice ")


dashboard()