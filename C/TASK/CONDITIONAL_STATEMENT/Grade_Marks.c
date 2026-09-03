#include <stdio.h>

int main()
{
    int marks, sum = 0;
    float percentage;

    for(int i = 1; i <= 5; i++)
    {
        printf("Enter marks of subject %d: ", i);
        scanf("%d", &marks);

        sum = sum + marks;
    }

    percentage = sum / 5.0;

    printf("Sum = %d\n", sum);
    printf("Percentage = %.2f\n", percentage);

    if(percentage >= 90)
        printf("Grade A");
    else if(percentage >= 80)
        printf("Grade B");
    else if(percentage >= 70)
        printf("Grade C");
    else if(percentage >= 60)
        printf("Grade D");
    else
        printf("Grade F");

    return 0;
}