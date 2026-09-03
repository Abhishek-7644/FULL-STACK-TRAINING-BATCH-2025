students = [
    {
        "Hindi": int(input("Enter Hindi marks: ")),
        "English": int(input("Enter English marks: ")),
        "Math": int(input("Enter Math marks: ")),
        "Science": int(input("Enter Science marks: ")),
        "Computer": int(input("Enter Computer marks: "))
    }
]

marks = students[0]

total = sum(marks.values())
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