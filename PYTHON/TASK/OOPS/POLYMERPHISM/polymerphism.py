class Crop:
    def grow(self):
        print("Farmer grow many crops in their fields")

class Wheat(Crop):
    def grow(self):
        print("we make bread from wheat")

class Rice(Crop):
    def grow(self):
        print("Rice needs alot of water")

c = Crop()
c.grow()

W = Wheat()
W.grow()

R = Rice()
R.grow()
