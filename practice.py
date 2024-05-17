def add_number():
    numbers = [3,7,1,9,5,2]
    numbers.append(8)
    print(numbers)

add_number()

def insert_number():
    numbers=[3,7,1,9,5,2]
    numbers.insert(2,4)
    print(numbers)

insert_number()

def remove_number():
    numbers=[3,7,1,9,5,2]
    numbers.remove(7)
    print(numbers)

remove_number()

def return_value():
     numbers=[3,7,1,9,5,2]
     numbers.pop()
     print(numbers)

return_value()

def count_values():
     numbers=[3,7,1,9,5,2]
     print(numbers.count(3))

count_values()

def sort_list():
    numbers=[3,7,1,9,5,2]
    numbers.sort()
    print(numbers)

sort_list()

def reverse_list():
    numbers=[3,7,1,9,5,2]
    numbers.reverse()
    print(numbers)

reverse_list()

def clear_list():
    numbers=[3,7,1,9,5,2]
    numbers.clear()
    print(numbers)

clear_list()

def extend_list():
    numbers=[3,7,1,9,5,2]
    numbers.extend([6,8,2])
    print(numbers)

extend_list()



def is_prime():
    s=[1,2,3,4,5,6,7,8,9]
    for a in s:
        if a%2==0:
           print(a)

is_prime()

def find_large_small():
    s=[1,2,3,4,5,6,7,8,9]
    v=min(s)
    f=max(s)
    print(v)
    print(f)

find_large_small()


def remove_duplicates():
    s=[1,2,3,4,5,5,6,7,7,8,8,9,9]
    w=set(s)
    l=list(w)
    print(l)

remove_duplicates()

def is_sum(numbers):
    s=input("Enter numbers")
    for a in numbers:
        if len(numbers) !=5:
            print("enter required number") 
        elif len(numbers) ==5:
            sum+=a
            print(sum)
        else: 
            print( "Exceeded required number")
        
    numbers=[2,3,4,5,6]
    is_sum(numbers)





def sum_numbers_and_input():
    # Initialize an empty list to store the numbers
    numbers_list = []

    # Prompt the user to enter five numbers
    for i in range(5):
        num = int(input(f"Enter number: "))
        numbers_list.append(num)

    # Calculate the sum of the numbers in the list and the additional number
    total_sum = sum(numbers_list)

    # Display the sum
    print(f"The sum of the numbers in the list plus the entered number is: {total_sum}")

# Call the function to execute the program
sum_numbers_and_input()

      


        

