numbers = [5,7,3,6,8]

largest = numbers[3]  # pehle element ko maan lo largest

for num in numbers:
    if num > largest:
        largest = num

print("Largest number is:", largest)