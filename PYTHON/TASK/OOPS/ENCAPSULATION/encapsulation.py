
class car:
    def __init__(self):
        self.name=""
    def getname(self):
        return self._name
    def setname(self,name):
        self._name = name
obj=car()
obj.setname("Abhishek")
name = obj.getname()
print(name)

class student():
    def display1(self):
        print("abhishek")
class car(student):
    def display2():
        print("Aryan")
obj=car()
obj.display1()
obj.display2()

class ShoppingCart:

    def __init__(self):
        self.__items = []

    def add_item(self, item):
        self.__items.append(item)
        print(item, "added in cart")

    def remove_item(self, item):
        if item in self.__items:
            self.__items.remove(item)
            print(item, "removed from cart")
        else:
            print(item, "not found in cart")

    def show_item(self):
        if self.__items:
            print("Cart items:", self.__items)
        else:
            print("No item in cart")


s = ShoppingCart()

s.add_item("Grocery")
s.add_item("Shoes")

s.show_item()

s.remove_item("Shoes")

s.show_item()



class Atm:
    def __init__(self):
        self.__amount = 0

    def deposit(self):
        deposit=int(input("pls enter money for deposit: "))
        self.__amount+= deposit

    def show(self):
        print(self.__amount)
a1 = Atm()
a1.deposit()
a1.show()