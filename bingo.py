import numpy as np
import os
import random
import math
import villager_scraper

class Bingo():

    def __init__(self, duplicates, size):
        self.duplicates = duplicates
        self.size = size
        self.matrix = []

    def generate_bingo(self):
        all_villagers = []
        if not os.path.exists("data/villagers.txt"):
            all_villagers = villager_scraper.scrape()
        else:
            f = open("data/villagers.txt", "r")
            for line in f:
                all_villagers.append(line.rstrip())
        
        for i in range(self.size):
            sub_lst = []
            for j in range(self.size):
                villager = random.choice(all_villagers)
                sub_lst.append(villager)
                if not self.duplicates:
                    all_villagers.remove(villager)
            self.matrix.append(sub_lst)

    def cross_out(self, name):
        self.matrix = [[val.replace(name, "X") for val in row] for row in self.matrix]

    def check_bingo(self):
        win = True

        for i in range(len(self.matrix)):
            win = True
            for j in range(len(self.matrix[i])):
                if self.matrix[i][j] != "X":
                    win = False
                    break
            if win == True:
                return True

        #check vertical
        for i in range(len(self.matrix)):
            win = True
            for j in range(len(self.matrix)):
                if self.matrix[j][i] != "X":
                    win = False
                    break
            if win == True:
                return True

        #check diagonal
        for i in range(len(self.matrix)):
            win = True
            if self.matrix[i][i] != "X" and self.matrix[i][len(self.matrix) - i
                -1] != "X":
                win = False
                break

        return win
    
    def set_duplicate(self, duplicate):
        self.duplicates = duplicate

    def print_bingo(self):
        print(np.matrix(self.matrix))

    def get_size(self):
        return self.size

def start_game():
    print("Hello! This is a bingo game for Animal Crossing: New Horizons")

    val = 0
    duplicate = ""
    while True:
        val = input("Enter the number of bingo squares you want: ")

        if not val.isdigit():
            print("Please only enter numbers")
            continue
        else:
            val = round(math.sqrt(int(val)))
            break

    while True:
        duplicate = input("Would you like to enable duplicate bingo squares? ")

        if duplicate != "yes" and duplicate != "no":
            print("Please enter either 'yes' or 'no'")
            continue
        else:
            if duplicate == "yes":
                duplicate = True
            else:
                duplicate = False
            break
    
    return (val, duplicate)


def main():
    while True: 
        game_over = False
        crosses = 0

        val, duplicate = start_game()
        bingo = Bingo(duplicate, val)
        bingo.generate_bingo()
        bingo.print_bingo()

        print("Enter 'quit' to quit")
        while not game_over:
            villager = input("Enter villager name to cross off: ")

            if villager == "quit":
                print("Thank you for playing!")
                return

            if not any(villager in sublist for sublist in bingo.matrix):
                bingo.print_bingo()
                print("Invalid input")
                continue
            else:
                bingo.cross_out(villager)
                crosses = crosses + 1
                if crosses >= bingo.get_size():
                    game_over = bingo.check_bingo()
                bingo.print_bingo()
                
        print("Bingo!")
        quit = "no"
        while True:
            quit = input("Would you like to play again?")

            if quit != "yes" and quit != "no":
                print("Please only enter 'yes' or 'no'")
                continue
            else:
                break
        if quit == "no":
            break
        del bingo
    print("Thank you for playing!")

if __name__ == "__main__":
    main()
