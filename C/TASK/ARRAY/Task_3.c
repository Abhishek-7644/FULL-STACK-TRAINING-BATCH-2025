#include <stdio.h>

int main()
{
    char name[10];

    printf("Enter name: ");
    scanf("%9s", name);

    printf("Name = %s", name);

    return 0;
}