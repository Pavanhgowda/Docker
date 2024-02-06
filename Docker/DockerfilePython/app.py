from random import randint
min_number=int(input("Please enter the min Number"))
max_number=int(input("Please enter the max Number"))
if(max_number<min_number):
    print("Invalid Input")
else:
    rad_number=randint(min_number,max_number)
    print(rad_number)
