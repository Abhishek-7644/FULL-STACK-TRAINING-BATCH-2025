class Bcci:
    def cricket_board(self):
        print("Bcci is Management Of all cricket activities")

class Ipl(Bcci):
    def Rcb(self):
        print("Rcb Is the champion of 2025 ipl series ")

class U19(Bcci):
    def world_cup(self):
        print("India win u19 world cup")

B = U19()
B.cricket_board()
B.world_cup()

B2 = Ipl() 
B2.cricket_board()
B2.Rcb()