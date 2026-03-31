# script.py

from datetime import datetime

def display_current_datetime():
    current_datetime = datetime.now()
    formatted_datetime = current_datetime.strftime("%B %d, %Y at %I:%M %p")
    print(formatted_datetime)

if __name__ == "__main__":
    display_current_datetime()