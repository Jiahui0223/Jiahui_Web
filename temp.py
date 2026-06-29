

#Exercise: Day old Bread
print("########Day old Bread########")

number_old_bread = int(input("Enter your the number of old bread:\n"))
print(f"Regular Price: £ {number_old_bread * 3.49:.2f}")
print(f"Discount:      £ {number_old_bread * 3.49 * 0.60:.2f}")
print(f"Total Price:   £ {number_old_bread * 3.49 - number_old_bread * 3.49 * 0.60:.2f}")


#Exercise: Length and Slicing (23)
print("########Length and Slicing########")

favourite_song = input("Enter your favourite song:\n")
print(len(favourite_song))

starting_number = int(input("Enter your starting number:\n"))
ending_number = int(input("Enter your ending number:\n"))
# ATTENTION! if the nummber bigger than the len(favourite_song) we should use another elif to print this situation
print(favourite_song[starting_number-1:ending_number])

#Exercise: Upper or Lower case name
print("########Upper or Lower case name########")

first_name = input("Enter your first name:\n")

if(len(first_name) < 5):
    last_name = input("Enter your last name:\n")
    full_name = first_name + last_name
    print(f"Your Full Name is:{full_name.upper()}")
else:
    print(f"Your Name is: {first_name.lower()}")


#Exercise: Pig Latin
print("########Pig Latin########")
world = input("Enter the words you want to convert to Latin:\n")
world = world.lower()

vowel_letter = ['a','e','i','o','u']

if(world[0] in vowel_letter):
    print(f"Latin word: {world}way")
else:
    first_word = world[0]
    print(f"Latin word: {world[1:]}{first_word}ay")



#Exercise:  Umbrella or no umbrella
print("########Umbrella or no umbrella########")
answer =  input("Is it raining?(YES/NO)\n")
answer = answer.lower()

if(answer == 'yes'):
    windy = input("Is it windy?(YES/NO)\n")
    windy = windy.lower()
    if(windy == 'yes'):
        print("It’s too windy for an umbrella")
    else:
        print("Take an umbrella")
else:
    print("Enjoy your day!")


#Exercise:   Your age
print("########Your age########")
age = int(input("Please enter your age:\n"))
if(age >= 18):
    print("you can vote")
else:
    if(age == 17):
        print("“You can learn how to drive")
    elif(age == 16):
        print("you can buy a lottery ticket")
    elif(age < 16 and age > 0):
        print("You can go Trick-or-Treating")
    else:
        print("Please enter a correct age")



#Exercise:  : Even or Odd
print("########Even or Odd########")
even_odd = int(input("Enter an integer:\n"))

if(even_odd == 0):
    print("EVEN")
else:
    if(even_odd %2 == 0):
        print("EVEN")
    else:
        print("ODD")


#Exercise:  Vowel or Consonant
print("########Vowel or Consonant########")
letter = input("Enter a letter:\n")
letter = letter.lower()
vowel_letter_2 = ['a','e','i','o','u']
if(letter in vowel_letter_2):
    print("Letter is a vowel")
elif(letter == 'y'):
    print("sometimes y is a vowel, and sometimes y is a consonant")
else:
    print("The letter is a consonant")


#Exercise:  Name the shape
print("########Name the shape########")
side = int(input("Enter number of sides:\n"))

name = ['Triangle','Quadrilateral','Pentagon','Hexagon','Heptagon','Octagon','Nonagon','Decagon']

if(side<=10 and side >=3):
    print(f"A figure with {side} sides is called {name[side-3]}")
else:
    print("ERROR")


#Exercise:  Classifying Triangles


print("########Classifying Triangles########")
line1 = input("Please enter the first edge\n")
line2 = input("Please enter the second edge\n")
line3 = input("Please enter the third edge\n")

if(line1 == line2 == line3):
    print("Equilateral")
else:
    if(line1 == line2 or line1 == line3 or line2 == line3):
        print("Isosceles")
    else:
        print("Scalene")



#Exercise:  Find the area

print("########Find the area########")
print("1) Square \n2) Triangle")
user_enter = int(input("Enter a number:\n"))

if(user_enter == 1):
    length = int(input("Enter the length of one of its sides\n"))
    square_area = length **2
    print(f"The area of square is: {square_area}")
elif(user_enter == 2):
    baseline = int(input("Enter the length of the Base_line:\n"))
    height = int(input("Enter the height of the triangle:\n"))
    triangle_area = baseline * height * 0.5
    print(f"The area of triangle is: {triangle_area}")
else:
    print("Please enter a reasonable value!")
