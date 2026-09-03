numbers = [1, 4, 2, 5, 8]

maximum = numbers[0]
minimum = numbers[0]

for num in numbers:
    if num > maximum:
        maximum = num
    if num < minimum:
        minimum = num

print("Maximum number is:", maximum)
print("Minimum number is:", minimum)