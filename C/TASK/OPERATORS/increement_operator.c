#include <stdio.h>

int main()
{
    int a = 50, b = 30;

    ++a;
    a++;
    ++a;

    a--;
    ++a;
    a++;

    --a;
    --a;

    b = a++;
    a = --b;

    printf("a = %d\n", a++);
    printf("b = %d\n", b++);

    return 0;
}