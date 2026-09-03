from abc import ABC, abstractmethod

class Mobile(ABC):

    @abstractmethod
    def camera_quality(self):
        pass

    @abstractmethod
    def privacy(self):
        pass
    
    @abstractmethod
    def display_power(self):
        pass


class Apple(Mobile):
    def camera_quality(self):
        print("Standard models of iPhone camera quality are very high")

    def privacy(self):
        print("iPhone privacy system is very powerful")

    def display_power(self):
        print("iPhone display durability shield provide")


class Samsung(Mobile):
    def camera_quality(self):
        print("Samsung camera quality is also very strong")

    def privacy(self):
        print("Samsung provides Knox security system")

    def display_power(self):
        print("Samsung AMOLED display is very powerful")


class Nokia(Mobile):
    def camera_quality(self):
        print("Nokia camera quality is good")

    def privacy(self):
        print("Nokia security system is stable")

    def display_power(self):
        print("Nokia display is durable")


instance1 = Apple()

instance1.camera_quality()

instance1.privacy()

instance1.display_power()

instance2 = Samsung()

instance2.camera_quality()

instance2.privacy()

instance2.display_power()

instance3 = Nokia()

instance3.camera_quality()

instance3.privacy()

instance3.display_power()