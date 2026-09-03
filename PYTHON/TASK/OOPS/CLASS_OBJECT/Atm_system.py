class Atm:

    def __init__(self):
        self.balance = 5000

    
    def Add_balance(self):
        try:
            balance = int(input("pls enter amount to credit in your acount: "))
            self.balance += balance
            print("money credited successfull")
        except Exception as e:
            print("pls enter valid input")
            
            

    def Withdraw(self):
        try:
            balance = int(input("pls enter amount for withdraw:  "))

            if balance > self.balance:
                print("influcient balance")
            else:
                self.balance -= balance
                print("money debited successfully ")

        except Exception as e:
            print("pls enter valid input")
            

    def check_balance(self):
        print("Curent balance", self.balance)

    def menu(self):

        while True:
            try:
                print("\n1. Add balance ")
                print("2. Withdraw balance ")
                print("3. Check balance")
                print("4. Exit")

                choice = int(input("pls enter choice: "))

                if choice == 1:
                    self.Add_balance()
                elif choice == 2:
                    self.Withdraw()
                elif choice == 3:
                    self.check_balance()
                elif choice == 4:
                    print("Exit")
                    break
                else:
                    print("Invalid choice")

            except Exception as e:
                print("please enter valid choice")
                


a1 = Atm()
a1.menu()