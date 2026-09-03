#include <stdio.h>
#include <string.h>

// ==== Colour And Their Codes ====
#define BLACK   "\033[0;30m"
#define RED     "\033[1;31m"
#define GREEN   "\033[1;32m"
#define YELLOW  "\033[1;33m"
#define BLUE    "\033[1;34m"
#define PINK    "\033[1;35m"
#define RESET   "\033[0m"

// ==== BUS STRUCTURE ====
struct Bus
{
    int busNumber;
    char source[20];
    char destination[20];
    int totalSeats;
    int availableSeats;
    int bookedSeats;
    float fare;
};

// ==== 4 BUSES ====
struct Bus buses[4] = {
    {101, "Delhi", "Bihar", 50, 50, 0, 500},
    {102, "Delhi", "Lucknow", 40, 40, 0, 450},
    {103, "Mumbai", "Delhi", 45, 45, 0, 300},
    {104, "Kolkata", "Patna", 55, 55, 0, 550}
};

int selectedBus = -1;

// ==== Signup ====
char savedUsername[30];
char savedPassword[20];
char savedEmail[30];
int isSignedUp = 0;

// ==== FUNCTION DECLARATION ====
void signup();
int login();
void reservationMenu();
void busStatus();
void bookTicket();
void cancelTicket();
void payment(float amount);
void selectBus();

// ==== Username Validation ====
int isOnlyCharacters(char str[])
{
    for (int i = 0; str[i] != '\0'; i++)
    {
        if (!((str[i] >= 'A' && str[i] <= 'Z') ||
              (str[i] >= 'a' && str[i] <= 'z') ||
              str[i] == ' '))
        {
            return 0;
        }
    }
    return 1;
}

// ==== SIGNUP FUNCTION ====
void signup()
{
    printf(GREEN "\n===== USER SIGNUP =====\n" RESET);

    do
    {
        printf(PINK "Enter Username (only characters): " RESET);
        scanf(" %[^\n]", savedUsername);

        if (!isOnlyCharacters(savedUsername))
            printf(RED "Only alphabets allowed!\n" RESET);

    } while (!isOnlyCharacters(savedUsername));

    printf(PINK "Enter Email: " RESET);
    scanf("%30s", savedEmail);

    printf(PINK "Enter Password: " RESET);
    scanf("%20s", savedPassword);

    isSignedUp = 1;
    printf(GREEN "\nSignup Successful!\n" RESET);
}

// ==== LOGIN FUNCTION ====
int login()
{
    char username[30], password[20];

    if (!isSignedUp)
    {
        printf(RED "Please signup first!\n" RESET);
        return 0;
    }

    printf(BLACK "\n===== LOGIN =====\n" RESET);

    printf(PINK "Username: " RESET);
    scanf(" %[^\n]", username);

    printf(PINK "Password: " RESET);
    scanf("%20s", password);

    if (strcmp(username, savedUsername) == 0 &&
        strcmp(password, savedPassword) == 0)
    {
        printf(GREEN "Login Successful!\n" RESET);
        return 1;
    }

    printf(RED "Invalid Credentials!\n" RESET);
    return 0;
}

// ==== SELECT BUS ====
void selectBus()
{
    printf(BLUE "\n===== AVAILABLE BUSES =====\n" RESET);

    for (int i = 0; i < 4; i++)
    {
        printf(YELLOW "%d. Bus %d (%s -> %s)\n" RESET,
               i + 1,
               buses[i].busNumber,
               buses[i].source,
               buses[i].destination);
    }

    printf("Select Bus: ");
    scanf("%d", &selectedBus);
    selectedBus--;

    if (selectedBus < 0 || selectedBus >= 4)
    {
        printf(RED "Invalid Bus Selection!\n" RESET);
        selectedBus = -1;
    }
}

// ==== BUS STATUS ====
void busStatus()
{
struct Bus *b = &buses[selectedBus];

    printf(BLUE "\n===== BUS STATUS =====\n" RESET);
    printf("Bus Number      : %d\n", b->busNumber);
    printf("Source          : %s\n", b->source);
    printf("Destination     : %s\n", b->destination);
    printf("Total Seats     : %d\n", b->totalSeats);
    printf("Available Seats : %d\n", b->availableSeats);
    printf("Fare            : Rs %.2f\n", b->fare);
}

// ==== PAYMENT ====
void payment(float amount)
{
    int choice;
    int UPIPIN;
    char cardNumber[20];
    int pin;

    printf(GREEN "\n===== PAYMENT MODE =====\n" RESET);
    printf("1. UPI\n2. Card\nEnter choice: ");
    scanf("%d", &choice);

    if (choice == 1)
    {
        // ---- UPI PAYMENT ----
        
        printf(PINK "Enter UPI PIN: " RESET);
        scanf("%d", &pin);

        printf(GREEN "\nUPI Payment Successful!\n" RESET);
    }
    else if (choice == 2)
    {
        // ---- CARD PAYMENT ----
        printf(PINK "Enter Card Number: " RESET);
        scanf("%s", cardNumber);

        printf(GREEN "\nCard Payment Successful!\n" RESET);
    }
    else
    {
        printf(RED "Invalid Payment Option!\n" RESET);
        return;
    }

    printf(GREEN "Paid Amount: Rs %.2f\n" RESET, amount);
}

// ==== BOOK TICKET ====
void bookTicket()
{
    int seats;
    struct Bus *b = &buses[selectedBus];

    printf(YELLOW "Enter seats: " RESET);
    scanf("%d", &seats);

    if (seats <= 0 || seats > b->availableSeats)
    {
        printf(RED "Seats not available!\n" RESET);
        return;
    }

    payment(seats * b->fare);

    b->availableSeats -= seats;
    b->bookedSeats += seats;

    printf(GREEN "Ticket Booked Successfully!\n" RESET);
}

// ==== CANCEL TICKET ====
void cancelTicket()
{
    int seats;
    struct Bus *b = &buses[selectedBus];

    printf(RED "Enter seats to cancel: " RESET);
    scanf("%d", &seats);

    if (seats <= 0 || seats > b->bookedSeats)
    {
        printf(RED "Invalid seats!\n" RESET);
        return;
    }

    b->bookedSeats -= seats;
    b->availableSeats += seats;

    printf(GREEN "Ticket Cancelled | Refund: Rs %.2f\n" RESET,
           seats * b->fare);
}

// ==== RESERVATION MENU ====
void reservationMenu()
{
    int choice;

    selectBus();
    if (selectedBus == -1) return;

    while (1)
    {
        printf(BLUE "\n===== RESERVATION MENU =====\n" RESET);
        printf("1. Book Ticket\n2. Cancel Ticket\n3. Bus Status\n4. Logout\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1: bookTicket(); break;
        case 2: cancelTicket(); break;
        case 3: busStatus(); break;
        case 4: return;
        default: printf(RED "Invalid choice!\n" RESET);
        }
    }
}

// ==== MAIN FUNCTION ====
int main()
{
    int choice;

    while (1)
    {
        printf(PINK "\n===== MAIN MENU =====\n" RESET);
        printf("1. Signup\n2. Login\n3. Exit\nEnter choice: ");
        scanf("%d", &choice);

        if (choice == 1)
            signup();
        else if (choice == 2)
        {
            if (login())
                reservationMenu();
        }
        else if (choice == 3)
        {
            printf(GREEN "Thank you!\n" RESET);
            break;
        }
        else
            printf(RED "Invalid option!\n" RESET);
    }
    return 0;
}


