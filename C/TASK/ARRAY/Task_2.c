#include <stdio.h>

int main()
{
    int arr[5];

    for(int i = 0; i < 5; i++)
    {
        printf("Enter number: ");
        scanf("%d", &arr[i]);
    }

    for(int i = 0; i < 5; i++)
    {
        if(arr[i] % 2 == 0)
            printf("%d = Even\n", arr[i]);
        else
            printf("%d = Odd\n", arr[i]);
    }

    return 0;
}