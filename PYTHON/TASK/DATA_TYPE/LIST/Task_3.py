marks = [
    int(input("Enter Hindi marks: ")),
    int(input("Enter English marks: ")),
    int(input("Enter Math marks: ")),
    int(input("Enter Science marks: ")),
    int(input("Enter Computer marks: "))
]

total = sum(marks)
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