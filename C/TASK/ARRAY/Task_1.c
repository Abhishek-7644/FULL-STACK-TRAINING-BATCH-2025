#include <stdio.h>

int main()
{
    char name[20];
    char email[30];
    char mobile[15];

    printf("Enter Name: ");
    scanf("%19s", name);

    printf("Enter Email: ");
    scanf("%29s", email);

    printf("Enter Mobile Number: ");
    scanf("%14s", mobile);

    printf("\nRegistration Details\n");
    printf("Name: %s\n", name);
    printf("Email: %s\n", email);
    printf("Mobile: %s\n", mobile);

    return 0;
}