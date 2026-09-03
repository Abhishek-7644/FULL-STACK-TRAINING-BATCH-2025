hindi = input("Enter Hindi marks: ")
english = input("Enter English marks: ")
math = input("Enter Math marks: ")
science = input("Enter Science marks: ")
computer = input("Enter Computer marks: ")

total = int(hindi) + int(english) + int(math) + int(science) + int(computer)
percentage = total / 5

print("Total =", total)
print("Percentage =", percentage)

if percentage >= 90:
    print("Grade A")
elif percentage >= 80:
    print("Grade B")
elif percentage >= 70:
    print("Grade C")
elif percentage >= 60:
    print("Grade D")
else:
    print("Grade F")